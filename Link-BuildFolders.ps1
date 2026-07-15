# Define the folders we want to redirect to the build root
$BuildFolders = @("out", "build", "target", "node_modules", "debug", "bin", "obj", "dist")

# Make sure BUILD_ROOT_DIR is defined
if (-not $env:BUILD_ROOT_DIR) {
    Write-Error "Environment variable BUILD_ROOT_DIR is not set."
    exit
}

# Get the name of the current project folder
$ProjectName = (Get-Item .).Name
$TargetRoot = Join-Path $env:BUILD_ROOT_DIR $ProjectName

# Ensure the target root directory exists
if (-not (Test-Path $TargetRoot)) {
    New-Item -ItemType Directory -Force -Path $TargetRoot | Out-Null
    Write-Host "Created target root: $TargetRoot" -ForegroundColor Green
}

foreach ($Folder in $BuildFolders) {
    $LocalPath = Join-Path (Get-Location) $Folder
    $TargetPath = Join-Path $TargetRoot $Folder

    # Skip if the local folder already exists and is already a junction
    if ((Get-Item -Path $LocalPath -ErrorAction SilentlyContinue).Attributes -match "ReparsePoint") {
        Write-Host "Skipping $Folder - it is already a junction." -ForegroundColor Yellow
        continue
    }

    # Ensure the physical target folder exists in BUILD_ROOT_DIR
    if (-not (Test-Path $TargetPath)) {
        New-Item -ItemType Directory -Force -Path $TargetPath | Out-Null
    }

    # If the folder already exists locally as a real directory, we must move it or delete it first
    if (Test-Path $LocalPath) {
        Write-Host "Moving existing $Folder to $TargetPath..." -ForegroundColor Cyan
        Move-Item -Path "$LocalPath\*" -Destination $TargetPath -Force -ErrorAction SilentlyContinue
        Remove-Item -Path $LocalPath -Recurse -Force
    }

    # Create the junction
    New-Item -ItemType Junction -Path $LocalPath -Target $TargetPath | Out-Null
    Write-Host "Linked $LocalPath -> $TargetPath" -ForegroundColor Green
}

Write-Host "Done! Your build folders are now safely outside of OneDrive." -ForegroundColor Green