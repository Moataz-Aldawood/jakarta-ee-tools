import { JsfTag } from './jsfCatalog';

export const PRIMEFACES_CATALOG: Record<string, JsfTag> = {
    "p:validateFile": {
        "name": "p:validateFile",
        "description": "`p:validateFile` is a validator which can be used to validate single and mulitple files, either of `p:fileUpload` or `h:inputFile`.",
        "attributes": [
            {
                "name": "allowTypes",
                "description": "Regular expression for accepted file types, e.g., /(\\.|\\/)(gif|jpeg|jpg|png)$/",
                "type": "java.lang.String"
            },
            {
                "name": "fileLimit",
                "description": "Maximum number of files to be uploaded.",
                "type": "java.lang.Integer"
            },
            {
                "name": "sizeLimit",
                "description": "Individual file size limit in bytes. Default is unlimited.",
                "type": "java.lang.Long"
            },
            {
                "name": "contentType",
                "description": "Wheter the content type should be validated based on the accept attribute of the attached component. Default is false.",
                "type": "java.lang.String"
            },
            {
                "name": "virusScan",
                "description": "Whether virus scan should be performed. Default is false.",
                "type": "java.lang.Boolean"
            }
        ]
    },
    "p:autoUpdate": {
        "name": "p:autoUpdate",
        "description": "AutoUpdate is a TagHandler to mark the parent component to be updated at every AJAX request.\n            AutoUpdate is ignored if the trigger (p:commandButton, p:ajax...) of AJAX request has the attribute ignoreAutoUpdate set to 'true'.",
        "attributes": [
            {
                "name": "disabled",
                "description": "If autoUpdate should be disabled. Default = false.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "on",
                "description": "Defines the observer event, which will trigger the auto update.",
                "type": "java.lang.String"
            }
        ]
    },
    "p:dataExporter": {
        "name": "p:dataExporter",
        "description": "DataExporter is handy for exporting data listed using a PrimeFaces Datatable to various formats such as excel, pdf, csv and xml.",
        "attributes": [
            {
                "name": "target",
                "description": "Search expression to resolve one or multiple target components.",
                "type": "java.lang.String"
            },
            {
                "name": "type",
                "description": "Export type: \"xls\", \"xlsx\", \"xlsxstream\", \"pdf\", \"csv\", \"xml\"",
                "type": "java.lang.String"
            },
            {
                "name": "fileName",
                "description": "Filename of the generated export file, defaults to target component id.",
                "type": "java.lang.String"
            },
            {
                "name": "pageOnly",
                "description": "Exports only current page instead of whole dataset.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "preProcessor",
                "description": "PreProcessor for the exported document.",
                "type": "javax.el.MethodExpression"
            },
            {
                "name": "postProcessor",
                "description": "PostProcessor for the exported document.",
                "type": "javax.el.MethodExpression"
            },
            {
                "name": "onRowExport",
                "description": "Row processor for the exported document.",
                "type": "javax.el.MethodExpression"
            },
            {
                "name": "encoding",
                "description": "Character encoding to use.",
                "type": "java.lang.String"
            },
            {
                "name": "selectionOnly",
                "description": "When enabled, only selection would be exported.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "visibleOnly",
                "description": "When enabled, only visible data would be exported. Default is false.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "exportHeader",
                "description": "When enabled, the header will be exported. Default is true.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "exportFooter",
                "description": "When enabled, the footer will be exported. Default is true.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "options",
                "description": "Options object to customize document.",
                "type": "org.primefaces.component.export.ExporterOptions"
            },
            {
                "name": "exporter",
                "description": "Custom org.primefaces.component.export.Exporter to be used instead of built-in exporters.",
                "type": "java.lang.Object"
            },
            {
                "name": "onTableRender",
                "description": "OnTableRender to be used to set the options of exported table.",
                "type": "javax.el.MethodExpression"
            },
            {
                "name": "bufferSize",
                "description": "Control how many items are fetched at a time when DataTable#lazy is enabled. Retrieve the entire underlying dataset in smaller, manageable chunks rather than all at once.",
                "type": "javax.el.ValueExpression"
            }
        ]
    },
    "p:fileDownload": {
        "name": "p:fileDownload",
        "description": "Traditionally, dynamic binary data was presented to the client by writing a servlet or filter to stream the data.\n            FileDownload simplifies this process.",
        "attributes": [
            {
                "name": "value",
                "description": "A streamed content instance.",
                "type": "java.lang.Object"
            },
            {
                "name": "contentDisposition",
                "description": "Specifies display mode (non-ajax), valid values are \"attachment\" (default) and \"inline\".",
                "type": "java.lang.String"
            },
            {
                "name": "monitorKey",
                "description": "Defines setting cookie key for monitorDownload method on client side.",
                "type": "java.lang.String"
            },
            {
                "name": "store",
                "description": "Controls the 'no-store' attribute on the cache control header. Default false is to include 'no-store'.",
                "type": "java.lang.Boolean"
            }
        ]
    },
    "p:ajax": {
        "name": "p:ajax",
        "description": "AjaxBehavior is an extension to standard f:ajax.",
        "attributes": [
            {
                "name": "listener",
                "description": "Method to process in partial request.",
                "type": "javax.el.MethodExpression"
            },
            {
                "name": "immediate",
                "description": "Boolean value that determines the phaseId to execute listener. Default is false meaning \"Invoke Application\" phase, when true\n                phase is \"Apply Request Values\".",
                "type": "java.lang.Boolean"
            },
            {
                "name": "async",
                "description": "When set to true, ajax requests are not queued.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "process",
                "description": "Component(s) to process in partial request. Defaults to @this.",
                "type": "java.lang.String"
            },
            {
                "name": "update",
                "description": "Component(s) to update with ajax.",
                "type": "java.lang.String"
            },
            {
                "name": "onstart",
                "description": "Client side callback execute before ajax request begins.",
                "type": "java.lang.String"
            },
            {
                "name": "oncomplete",
                "description": "Client side callback execute when ajax request is completed and dom is updated.",
                "type": "java.lang.String"
            },
            {
                "name": "onerror",
                "description": "Client side callback execute when ajax requests returns with error response.",
                "type": "java.lang.String"
            },
            {
                "name": "onsuccess",
                "description": "Client side callback execute before dom is updated.",
                "type": "java.lang.String"
            },
            {
                "name": "global",
                "description": "Global ajax requests are listened by ajaxStatus component, setting global to false will not trigger ajaxStatus.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "delay",
                "description": "If less than delay milliseconds elapses between calls to request() only the most recent one is sent and all other requests are\n                discarded. The default value of this option is null. If the value of delay is the literal string 'none' without the quotes or the default, no\n                delay is used.",
                "type": "java.lang.String"
            },
            {
                "name": "disabled",
                "description": "Disables ajax behavior.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "event",
                "description": "Client side event to trigger ajax request.\n                Default value is defined by parent ClientBehaviorHolder component the behavior is attached to.",
                "type": "java.lang.String"
            },
            {
                "name": "partialSubmit",
                "description": "When enabled, only values related to partially processed components would be serialized for ajax\n                instead of whole form.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "resetValues",
                "description": "If true, indicate that this particular Ajax transaction is a value reset transaction. This will cause resetValue() to be called on any\n                EditableValueHolder instances encountered as a result of this ajax transaction. If not specified, or the value is false, no such indication is\n                made.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "ignoreAutoUpdate",
                "description": "If true, components which use p:autoUpdate will not be updated for this request. If not specified, or the value is false, no such\n                indication is made.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "partialSubmitFilter",
                "description": "Selector to use when partial submit is on, default is \":input\" to select all descendant inputs of a partially processed components.",
                "type": "java.lang.String"
            },
            {
                "name": "form",
                "description": "Form to serialize for an ajax request. Default is the enclosing form.",
                "type": "java.lang.String"
            },
            {
                "name": "skipChildren",
                "description": "Some components skips processing of their children in certain events, setting skipChildren as false to disables this behavior.",
                "type": "java.lang.String"
            },
            {
                "name": "ignoreComponentNotFound",
                "description": "If true, unresolvable components referenced in the update/process attribute are ignored. Default is 'false' and therefore a ComponentNotFoundException will be thrown.",
                "type": "java.lang.Boolean"
            }
        ]
    },
    "p:printer": {
        "name": "p:printer",
        "description": "Printer allows sending a specific Faces component to the printer, not the whole page.",
        "attributes": [
            {
                "name": "target",
                "description": "Id of the component to print.",
                "type": "java.lang.String"
            },
            {
                "name": "configuration",
                "description": "Optional JSON configuration values to completely control jQuery.print.",
                "type": "java.lang.String"
            }
        ]
    },
    "p:confirm": {
        "name": "p:confirm",
        "description": "Confirm is a behavior element used to integrate with global confirm dialog.",
        "attributes": [
            {
                "name": "source",
                "description": "Source of the confirmation component. Valid values are the clientId of the source component and \"this\".",
                "type": "java.lang.String"
            },
            {
                "name": "type",
                "description": "Type of the confirmation component.",
                "type": "java.lang.String"
            },
            {
                "name": "header",
                "description": "Header text of the confirmation dialog.",
                "type": "java.lang.String"
            },
            {
                "name": "message",
                "description": "Detail text of the confirmation dialog.",
                "type": "java.lang.String"
            },
            {
                "name": "icon",
                "description": "Icon to display inside the confirm dialog.",
                "type": "java.lang.String"
            },
            {
                "name": "disabled",
                "description": "Disables confirm behavior.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "escape",
                "description": "Escape the message attribute.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "yesButtonLabel",
                "description": "Overrides label of 'Yes' button (and restores it before the global confirm dialog is reused elsewhere)",
                "type": "java.lang.String"
            },
            {
                "name": "yesButtonClass",
                "description": "Adds given style class to 'Yes' button (and removes it before the global confirm dialog is reused elsewhere)",
                "type": "java.lang.String"
            },
            {
                "name": "yesButtonIcon",
                "description": "Overrides icon of 'Yes' button (and removes it before the global confirm dialog is reused elsewhere)",
                "type": "java.lang.String"
            },
            {
                "name": "noButtonLabel",
                "description": "Overrides label of 'No' button (and restores it before the global confirm dialog is reused elsewhere)",
                "type": "java.lang.String"
            },
            {
                "name": "noButtonClass",
                "description": "Adds given style class to 'No' button (and removes it before the global confirm dialog is reused elsewhere)",
                "type": "java.lang.String"
            },
            {
                "name": "noButtonIcon",
                "description": "Overrides icon of 'No' button (and removes it before the global confirm dialog is reused elsewhere)",
                "type": "java.lang.String"
            },
            {
                "name": "beforeShow",
                "description": "Callback to execute before displaying confirmation dialog. Return false to prevent dialog from appearing.",
                "type": "java.lang.String"
            }
        ]
    },
    "p:resetInput": {
        "name": "p:resetInput",
        "description": "Input components keep their local values at state when validation fails.\n            ResetInput is used to clear the cached values from state so that components retrieve their values from the backing bean model instead.",
        "attributes": [
            {
                "name": "target",
                "description": "Comma or white-space separated list of component ids.",
                "type": "java.lang.String"
            },
            {
                "name": "clearModel",
                "description": "Whether to assign null values to bound values as well.",
                "type": "java.lang.Boolean"
            }
        ]
    },
    "p:clientValidator": {
        "name": "p:clientValidator",
        "description": "ClientValidator is a behavior element used in Client Side Validation to do instant validation in case you do not want to wait for the users\n            to fill in the form and hit commandButton/commandLink.",
        "attributes": [
            {
                "name": "event",
                "description": "Event to trigger the validation.",
                "type": "java.lang.String"
            },
            {
                "name": "disabled",
                "description": "Disables instant client validation for the attached input.",
                "type": "java.lang.Boolean"
            }
        ]
    },
    "p:importConstants": {
        "name": "p:importConstants",
        "description": "Utility tag to import constants.",
        "attributes": [
            {
                "name": "type",
                "description": "The constants class.",
                "type": "java.lang.String"
            },
            {
                "name": "var",
                "description": "The EL variable which can be used to obtain the constants. Default value: Name of the class without package.",
                "type": "String"
            }
        ]
    },
    "p:importEnum": {
        "name": "p:importEnum",
        "description": "Utility tag to import enums.",
        "attributes": [
            {
                "name": "type",
                "description": "The enum class.",
                "type": "java.lang.String"
            },
            {
                "name": "var",
                "description": "The EL variable which can be used to obtain the enum values. Default value: Name of the class without package.",
                "type": "String"
            },
            {
                "name": "allSuffix",
                "description": "Deprecated. Use the key ALL_VALUES to access all values, which is and was always available. The suffix mapping for an array with all enum values. Default value: ALL_VALUES.",
                "type": "java.lang.String"
            }
        ]
    },
    "p:accordionPanel": {
        "name": "p:accordionPanel",
        "description": "AccordionPanel is a container component that displays content in stacked format.",
        "attributes": [
            {
                "name": "id",
                "description": "Unique identifier of the component in a namingContainer.",
                "type": "java.lang.String"
            },
            {
                "name": "rendered",
                "description": "Boolean value to specify the rendering of the component, when set to false component will not be rendered.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "binding",
                "description": "An el expression referring to a server side UIComponent instance in a backing bean.",
                "type": "javax.faces.component.UIComponent"
            },
            {
                "name": "widgetVar",
                "description": "Name of the client side widget.",
                "type": "java.lang.String"
            },
            {
                "name": "activeIndex",
                "description": "Index of the active tab or a comma separated string of indexes when multiple mode is on. Alternative: all. Default: 0.",
                "type": "java.lang.String"
            },
            {
                "name": "style",
                "description": "Inline style of the container element.",
                "type": "java.lang.String"
            },
            {
                "name": "styleClass",
                "description": "Style class of the container element.",
                "type": "java.lang.String"
            },
            {
                "name": "onTabChange",
                "description": "Client side callback to execute when a tab is clicked.",
                "type": "java.lang.String"
            },
            {
                "name": "onTabShow",
                "description": "Client side callback to execute when a tab is shown.",
                "type": "java.lang.String"
            },
            {
                "name": "onTabClose",
                "description": "Client side callback to execute when a tab is closed.",
                "type": "java.lang.String"
            },
            {
                "name": "dynamic",
                "description": "Defines the toggle mode.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "cache",
                "description": "Defines if activating a dynamic tab should load the contents from server again.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "var",
                "description": "Name of collection iterator to use in dynamic number of tabs.",
                "type": "String"
            },
            {
                "name": "varStatus",
                "description": "Name of the exported request scoped variable for the status of the iteration.",
                "type": "java.lang.String"
            },
            {
                "name": "value",
                "description": "List to iterate to display dynamic number of tabs.",
                "type": "java.util.List"
            },
            {
                "name": "multiple",
                "description": "Enables activating multiple tabs, default is false.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "dir",
                "description": "Defines text direction, valid values are \"ltr\" (default) and \"rtl\".",
                "type": "java.lang.String"
            },
            {
                "name": "prependId",
                "description": "AccordionPanel is a naming container thus prepends its id to its children by default, a false value turns this behavior off except for dynamic tabs.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "tabindex",
                "description": "Position of the headers in the tabbing order. Default is 0.",
                "type": "java.lang.String"
            },
            {
                "name": "tabController",
                "description": "Method providing suggestions.",
                "type": "javax.el.MethodExpression"
            },
            {
                "name": "multiViewState",
                "description": "Whether to keep AccordionPanel state across views, defaults to false.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "toggleSpeed",
                "description": "Sets toggle animation speed in milliseconds. Default is 500.",
                "type": "java.lang.Integer"
            },
            {
                "name": "scrollIntoView",
                "description": "Should the tab scroll into view. One of start, center, end, nearest, or null if disabled. Default is null.",
                "type": "java.lang.String"
            }
        ]
    },
    "p:ajaxExceptionHandler": {
        "name": "p:ajaxExceptionHandler",
        "description": "AjaxExceptionHandler is a utility component for the built-in ExceptionHandler.",
        "attributes": [
            {
                "name": "id",
                "description": "Unique identifier of the component in a namingContainer.",
                "type": "java.lang.String"
            },
            {
                "name": "rendered",
                "description": "Boolean value to specify the rendering of the component, when set to false component will not be rendered.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "binding",
                "description": "An el expression referring to a server side UIComponent instance in a backing bean.",
                "type": "javax.faces.component.UIComponent"
            },
            {
                "name": "widgetVar",
                "description": "Name of the client side widget.",
                "type": "java.lang.String"
            },
            {
                "name": "onexception",
                "description": "Client side callback to execute after a exception with this type occurred.",
                "type": "java.lang.String"
            },
            {
                "name": "update",
                "description": "Components to update after a exception with this type occurred.",
                "type": "java.lang.String"
            },
            {
                "name": "type",
                "description": "Exception type to handle.",
                "type": "java.lang.String"
            }
        ]
    },
    "p:ajaxStatus": {
        "name": "p:ajaxStatus",
        "description": "AjaxStatus is a global notifier for AJAX requests made by PrimeFaces components.",
        "attributes": [
            {
                "name": "id",
                "description": "Unique identifier of the component in a namingContainer.",
                "type": "java.lang.String"
            },
            {
                "name": "rendered",
                "description": "Boolean value to specify the rendering of the component, when set to false component will not be rendered.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "binding",
                "description": "An el expression referring to a server side UIComponent instance in a backing bean.",
                "type": "javax.faces.component.UIComponent"
            },
            {
                "name": "widgetVar",
                "description": "Name of the client side widget.",
                "type": "java.lang.String"
            },
            {
                "name": "delay",
                "description": "Delay in milliseconds before displaying the ajax status. Default is 0 meaning immediate.",
                "type": "int"
            },
            {
                "name": "onstart",
                "description": "Client side callback to execute after ajax requests start.",
                "type": "java.lang.String"
            },
            {
                "name": "oncomplete",
                "description": "Client side callback to execute after ajax requests complete.",
                "type": "java.lang.String"
            },
            {
                "name": "onsuccess",
                "description": "Client side callback to execute after ajax requests completed successfully.",
                "type": "java.lang.String"
            },
            {
                "name": "onerror",
                "description": "Client side callback to execute when an ajax request fails.",
                "type": "java.lang.String"
            },
            {
                "name": "style",
                "description": "Inline style of the container element.",
                "type": "java.lang.String"
            },
            {
                "name": "styleClass",
                "description": "Style class of the container element.",
                "type": "java.lang.String"
            }
        ]
    },
    "p:audio": {
        "name": "p:audio",
        "description": "Audio component is used for embedding audio content such as MP3, OGG, WAV to Faces views.",
        "attributes": [
            {
                "name": "id",
                "description": "Unique identifier of the component in a namingContainer.",
                "type": "java.lang.String"
            },
            {
                "name": "rendered",
                "description": "Boolean value to specify the rendering of the component, when set to false component will not be rendered.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "binding",
                "description": "An el expression referring to a server side UIComponent instance in a backing bean.",
                "type": "javax.faces.component.UIComponent"
            },
            {
                "name": "value",
                "description": "Media source to play.",
                "type": "java.lang.Object"
            },
            {
                "name": "player",
                "description": "Type of the player, possible values are \"mp3\",\"ogg\", and \"wav\".",
                "type": "java.lang.String"
            },
            {
                "name": "style",
                "description": "Style of the player.",
                "type": "java.lang.String"
            },
            {
                "name": "styleClass",
                "description": "Style class of the player.",
                "type": "java.lang.String"
            },
            {
                "name": "cache",
                "description": "Controls browser caching mode of the resource. Default is true",
                "type": "java.lang.Boolean"
            },
            {
                "name": "controls",
                "description": "Whether the audio/video should display controls (like play/pause etc.)",
                "type": "java.lang.Boolean"
            },
            {
                "name": "controlslist",
                "description": "When specified, helps the browser select what controls to show. The allowed values are nodownload, nofullscreen and noremoteplayback.",
                "type": "java.lang.String"
            },
            {
                "name": "crossorigin",
                "description": "This enumerated attribute indicates whether to use CORS to fetch the related audio/video file. The allowed values are anonymous and user-credentials.",
                "type": "java.lang.String"
            },
            {
                "name": "autoplay",
                "description": "Specifies that the video will start playing as soon as it is ready.)",
                "type": "java.lang.Boolean"
            },
            {
                "name": "disableremoteplayback",
                "description": "Used to disable the capability of remote playback in devices that are attached using wired (HDMI, DVI, etc.) and wireless technologies (Miracast, Chromecast, DLNA, AirPlay, etc.)",
                "type": "java.lang.Boolean"
            },
            {
                "name": "loop",
                "description": "Specifies that the audio/video will start over again, every time it is finished.)",
                "type": "java.lang.Boolean"
            },
            {
                "name": "muted",
                "description": "Specifies that the audio output should be muted.)",
                "type": "java.lang.Boolean"
            }
        ]
    },
    "p:autoComplete": {
        "name": "p:autoComplete",
        "description": "AutoComplete provides live suggestions while an input is being typed.",
        "attributes": [
            {
                "name": "id",
                "description": "Unique identifier of the component in a namingContainer.",
                "type": "java.lang.String"
            },
            {
                "name": "rendered",
                "description": "Boolean value to specify the rendering of the component, when set to false component will not be rendered.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "binding",
                "description": "An el expression referring to a server side UIComponent instance in a backing bean.",
                "type": "javax.faces.component.UIComponent"
            },
            {
                "name": "value",
                "description": "Value of the component.",
                "type": "java.lang.Object"
            },
            {
                "name": "converter",
                "description": "An el expression or a literal text that defines a converter for the component. When it's an EL expression, it's resolved to a converter instance.\n    In case it's a static text, it must refer to a converter id.",
                "type": "javax.faces.convert.Converter"
            },
            {
                "name": "immediate",
                "description": "When set true, process validations logic is executed at apply request values phase for this component. Default is false.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "required",
                "description": "Marks component as required.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "validator",
                "description": "A method expression referring to a method validating the input.",
                "type": "javax.faces.validator.Validator"
            },
            {
                "name": "valueChangeListener",
                "description": "A method binding expression referring to a method for handling a valuchangeevent.",
                "type": "javax.faces.event.ValueChangeListener"
            },
            {
                "name": "requiredMessage",
                "description": "Message to display when required field validation fails.",
                "type": "java.lang.String"
            },
            {
                "name": "converterMessage",
                "description": "Message to display when conversion fails.",
                "type": "java.lang.String"
            },
            {
                "name": "validatorMessage",
                "description": "Message to display when validation fails.",
                "type": "java.lang.String"
            },
            {
                "name": "accesskey",
                "description": "Access key to transfer focus to the input element.",
                "type": "java.lang.String"
            },
            {
                "name": "alt",
                "description": "Alternate textual description of the input element.",
                "type": "java.lang.String"
            },
            {
                "name": "autocomplete",
                "description": "Controls browser autocomplete behavior.",
                "type": "java.lang.String"
            },
            {
                "name": "dir",
                "description": "Direction indication for text that does not inherit directionality.",
                "type": "java.lang.String"
            },
            {
                "name": "disabled",
                "description": "Disables the input element, default is false.",
                "type": "boolean"
            },
            {
                "name": "label",
                "description": "A localized user presentable name.",
                "type": "java.lang.String"
            },
            {
                "name": "lang",
                "description": "Code describing the language used in the generated markup.",
                "type": "java.lang.String"
            },
            {
                "name": "maxlength",
                "description": "Maximum number of characters that may be entered in this field.",
                "type": "int"
            },
            {
                "name": "onblur",
                "description": "Client side callback to execute when input element loses focus.",
                "type": "java.lang.String"
            },
            {
                "name": "onchange",
                "description": "Client side callback to execute when input element loses focus and its value has been modified since gaining focus.",
                "type": "java.lang.String"
            },
            {
                "name": "onclick",
                "description": "Client side callback to execute when input element is clicked.",
                "type": "java.lang.String"
            },
            {
                "name": "ondblclick",
                "description": "Client side callback to execute when input element is double clicked.",
                "type": "java.lang.String"
            },
            {
                "name": "onfocus",
                "description": "Client side callback to execute when input element receives focus.",
                "type": "java.lang.String"
            },
            {
                "name": "onkeydown",
                "description": "Client side callback to execute when a key is pressed down over input element.",
                "type": "java.lang.String"
            },
            {
                "name": "onkeypress",
                "description": "Client side callback to execute when a key is pressed and released over input element.",
                "type": "java.lang.String"
            },
            {
                "name": "onkeyup",
                "description": "Client side callback to execute when a key is released over input element.",
                "type": "java.lang.String"
            },
            {
                "name": "onmousedown",
                "description": "Client side callback to execute when a pointer input element is pressed down over input element.",
                "type": "java.lang.String"
            },
            {
                "name": "onmousemove",
                "description": "Client side callback to execute when a pointer input element is moved within input element.",
                "type": "java.lang.String"
            },
            {
                "name": "onmouseout",
                "description": "Client side callback to execute when a pointer input element is moved away from input element.",
                "type": "java.lang.String"
            },
            {
                "name": "onmouseover",
                "description": "Client side callback to execute when a pointer input element is moved onto input element.",
                "type": "java.lang.String"
            },
            {
                "name": "onmouseup",
                "description": "Client side callback to execute when a pointer input element is released over input element.",
                "type": "java.lang.String"
            },
            {
                "name": "onwheel",
                "description": "Client side callback to execute when the mouse wheel rolls up or down over an element.",
                "type": "java.lang.String"
            },
            {
                "name": "onselect",
                "description": "Client side callback to execute when text within input element is selected by user.",
                "type": "java.lang.String"
            },
            {
                "name": "oncut",
                "description": "Client side callback to execute when the user copies the content of an element.",
                "type": "java.lang.String"
            },
            {
                "name": "oncopy",
                "description": "Client side callback to execute when the user cuts the content of an element.",
                "type": "java.lang.String"
            },
            {
                "name": "onpaste",
                "description": "Client side callback to execute when the user pastes some content in an element.",
                "type": "java.lang.String"
            },
            {
                "name": "oninput",
                "description": "Client side callback to execute when an element gets user input.",
                "type": "java.lang.String"
            },
            {
                "name": "oncontextmenu",
                "description": "Client side callback to execute when a context menu is triggered.",
                "type": "java.lang.String"
            },
            {
                "name": "oninvalid",
                "description": "Client side callback to execute when an element is invalid.",
                "type": "java.lang.String"
            },
            {
                "name": "onreset",
                "description": "Client side callback to execute when the Reset button in a form is clicked.",
                "type": "java.lang.String"
            },
            {
                "name": "onsearch",
                "description": "Client side callback to execute when the user writes something in a search field.",
                "type": "java.lang.String"
            },
            {
                "name": "ondrag",
                "description": "Client side callback to execute when an element is dragged.",
                "type": "java.lang.String"
            },
            {
                "name": "ondragend",
                "description": "Client side callback to execute at the end of a drag operation.",
                "type": "java.lang.String"
            },
            {
                "name": "ondragenter",
                "description": "Client side callback to execute when an element has been dragged to a valid drop target.",
                "type": "java.lang.String"
            },
            {
                "name": "ondragleave",
                "description": "Client side callback to execute when an element leaves a valid drop target.",
                "type": "java.lang.String"
            },
            {
                "name": "ondragover",
                "description": "Client side callback to execute when an element is being dragged over a valid drop target.",
                "type": "java.lang.String"
            },
            {
                "name": "ondragstart",
                "description": "Client side callback to execute at the start of a drag operation.",
                "type": "java.lang.String"
            },
            {
                "name": "ondrop",
                "description": "Client side callback to execute when dragged element is being dropped.",
                "type": "java.lang.String"
            },
            {
                "name": "onscroll",
                "description": "Client side callback to execute when an element's scrollbar is being scrolled.",
                "type": "java.lang.String"
            },
            {
                "name": "readonly",
                "description": "Flag indicating that this component will prevent changes by the user.",
                "type": "boolean"
            },
            {
                "name": "size",
                "description": "Number of characters used to determine the width of the input element.",
                "type": "int"
            },
            {
                "name": "style",
                "description": "Inline style of the component.",
                "type": "java.lang.String"
            },
            {
                "name": "styleClass",
                "description": "Style class of the component.",
                "type": "java.lang.String"
            },
            {
                "name": "tabindex",
                "description": "Position of the element in the tabbing order.",
                "type": "java.lang.String"
            },
            {
                "name": "title",
                "description": "Advisory tooltip information.",
                "type": "java.lang.String"
            },
            {
                "name": "placeholder",
                "description": "The placeholder attribute specifies a short hint that describes the expected value of an input field.",
                "type": "java.lang.String"
            },
            {
                "name": "inputmode",
                "description": "HTML5 inputmode attribute for hinting at the type of data this control has for touch devices to display appropriate virtual keyboard.",
                "type": "java.lang.String"
            },
            {
                "name": "widgetVar",
                "description": "Name of the client side widget.",
                "type": "java.lang.String"
            },
            {
                "name": "completeMethod",
                "description": "Method providing suggestions.",
                "type": "javax.el.MethodExpression"
            },
            {
                "name": "var",
                "description": "Name of the iterator used in pojo based suggestion.",
                "type": "String"
            },
            {
                "name": "itemLabel",
                "description": "Label of the item.",
                "type": "java.lang.String"
            },
            {
                "name": "itemValue",
                "description": "Value of the item.",
                "type": "java.lang.Object"
            },
            {
                "name": "itemStyleClass",
                "description": "A string to be rendered onto the class tag of the selected items (tokens rendered inside the input container).",
                "type": "java.lang.String"
            },
            {
                "name": "maxResults",
                "description": "Maximum number of results to be displayed. Default is unlimited.",
                "type": "java.lang.Integer"
            },
            {
                "name": "minQueryLength",
                "description": "Number of characters to be typed before starting to query. Default is 1.",
                "type": "java.lang.Integer"
            },
            {
                "name": "queryDelay",
                "description": "Delay to wait in milliseconds before sending each query to the server. Default is 300.",
                "type": "java.lang.Integer"
            },
            {
                "name": "forceSelection",
                "description": "When enabled, autoComplete only accepts input from the selection list. Default is false.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "scrollHeight",
                "description": "Defines the height of the viewport for autocomplete suggestions.",
                "type": "java.lang.Integer"
            },
            {
                "name": "effect",
                "description": "Animation effect to use when showing and hiding suggestions.",
                "type": "java.lang.String"
            },
            {
                "name": "effectDuration",
                "description": "Duration of the animation effect in milliseconds.",
                "type": "java.lang.Integer"
            },
            {
                "name": "dropdown",
                "description": "",
                "type": "java.lang.Boolean"
            },
            {
                "name": "panelStyle",
                "description": "Inline style of the dropdown panel container element.",
                "type": "java.lang.String"
            },
            {
                "name": "panelStyleClass",
                "description": "Style class of the dropdown panel container element.",
                "type": "java.lang.String"
            },
            {
                "name": "multiple",
                "description": "",
                "type": "java.lang.Boolean"
            },
            {
                "name": "itemtipMyPosition",
                "description": "Position of itemtip with respect to item. Default is \"left top\".",
                "type": "java.lang.String"
            },
            {
                "name": "itemtipAtPosition",
                "description": "Position of item with respect to item. Default is \"right bottom\".",
                "type": "java.lang.String"
            },
            {
                "name": "cache",
                "description": "When enabled autocomplete caches the searched result list.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "cacheTimeout",
                "description": "Timeout value for cached results.",
                "type": "java.lang.Integer"
            },
            {
                "name": "appendTo",
                "description": "Appends the overlay to the element defined by search expression. Defaults to document body.",
                "type": "java.lang.String"
            },
            {
                "name": "groupBy",
                "description": "Value to group items in categories.",
                "type": "java.lang.Object"
            },
            {
                "name": "queryEvent",
                "description": "Event to initiate the query, valid values are \"keyup\" and \"enter\".",
                "type": "java.lang.String"
            },
            {
                "name": "dropdownMode",
                "description": "Specifies the behavior dropdown button. Default \"blank\" mode\n                sends an empty string and \"current\" mode sends the input value.",
                "type": "java.lang.String"
            },
            {
                "name": "autoHighlight",
                "description": "Highlights the first suggested item automatically. Default is true.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "highlightSelector",
                "description": "jQuery selector specifies what content to identify for highlighting in search results. By default, it targets \"&lt;span&gt;\" elements.",
                "type": "java.lang.String"
            },
            {
                "name": "emptyMessage",
                "description": "Text to display when there is no data to display. Default is \"No records found.\"",
                "type": "java.lang.String"
            },
            {
                "name": "showEmptyMessage",
                "description": "Should the empty message be displayed when no items are found? Default is true.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "selectLimit",
                "description": "Limits the selection. Default is unlimited.",
                "type": "java.lang.Integer"
            },
            {
                "name": "inputStyle",
                "description": "Inline style of the input element.",
                "type": "java.lang.String"
            },
            {
                "name": "inputStyleClass",
                "description": "Style class of the input element.",
                "type": "java.lang.String"
            },
            {
                "name": "groupByTooltip",
                "description": "Tooltip to display on group headers.",
                "type": "java.lang.String"
            },
            {
                "name": "my",
                "description": "Position of panel with respect to input Default is \"left top\".",
                "type": "java.lang.String"
            },
            {
                "name": "at",
                "description": "Position of input with respect to panel Default is \"left bottom\".",
                "type": "java.lang.String"
            },
            {
                "name": "active",
                "description": "Defines if autocomplete functionality is enabled. Default is true and a false value simply turns the component into a simple inputtext.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "type",
                "description": "Input field type. Default is text.",
                "type": "java.lang.String"
            },
            {
                "name": "moreText",
                "description": "The text shown in panel when the suggested list is greater than maxResults.",
                "type": "java.lang.String"
            },
            {
                "name": "unique",
                "description": "Ensures uniqueness of selected items.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "dynamic",
                "description": "Defines if dynamic loading is enabled for the element's panel.\n                If the value is \"true\", the overlay is not rendered on page load to improve performance. Default is false.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "autoSelection",
                "description": "Defines if auto selection of items that are equal to the typed input is enabled.\n                If true, an item that is equal to the typed input is selected. Default is true.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "escape",
                "description": "Defines if autocomplete results are escaped or not. Default is true.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "queryMode",
                "description": "Specifies query mode, valid values are \"server\" (default), \"client\" and \"hybrid\".",
                "type": "java.lang.String"
            },
            {
                "name": "dropdownTabindex",
                "description": "Position of the dropdown button in the tabbing order.",
                "type": "java.lang.String"
            },
            {
                "name": "completeEndpoint",
                "description": "REST-endpoint for fetching autocomplete-suggestions (instead of completeMethod).",
                "type": "java.lang.String"
            },
            {
                "name": "lazyModel",
                "description": "LazyDataModel for fetching autocomplete-suggestions (instead of completeMethod).",
                "type": "java.lang.Object"
            },
            {
                "name": "lazyField",
                "description": "Field of lazyModel to apply query to using `MatchMode.CONTAINS`",
                "type": "java.lang.String"
            }
        ]
    },
    "p:barcode": {
        "name": "p:barcode",
        "description": "Barcode component is used to display various barcode formats.",
        "attributes": [
            {
                "name": "id",
                "description": "Unique identifier of the component in a namingContainer.",
                "type": "java.lang.String"
            },
            {
                "name": "rendered",
                "description": "Boolean value to specify the rendering of the component, when set to false component will not be rendered.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "binding",
                "description": "An el expression referring to a server side UIComponent instance in a backing bean.",
                "type": "javax.faces.component.UIComponent"
            },
            {
                "name": "type",
                "description": "Type of the barcode.",
                "type": "java.lang.String"
            },
            {
                "name": "cache",
                "description": "Controls browser caching mode of the resource. Default is true.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "format",
                "description": "Format of the generated barcode, valid values are png (default) and svg.",
                "type": "java.lang.String"
            },
            {
                "name": "orientation",
                "description": "The barcode orientation in terms of angle (0, 90, 180, 270).",
                "type": "java.lang.Integer"
            },
            {
                "name": "magnification",
                "description": "The magnification factor of the barcode. Default is 2.0.",
                "type": "java.lang.Double"
            },
            {
                "name": "quietZoneHorizontal",
                "description": "The horizontal quiet zone of the barcode in pixels. Default is 10 pixels.",
                "type": "java.lang.Integer"
            },
            {
                "name": "quietZoneVertical",
                "description": "The vertical quiet zone of the barcode in pixels. Default is 1 pixel.",
                "type": "java.lang.Integer"
            },
            {
                "name": "qrErrorCorrection",
                "description": "The QR Code error correction level. L (default) - up to 7% damage. M - up to 15% damage. Q - up to 25% damage. H - up to 30% damage",
                "type": "java.lang.String"
            },
            {
                "name": "hrp",
                "description": "The barcode human readable placement of text either \"none\", \"top\", or \"bottom\".",
                "type": "java.lang.String"
            },
            {
                "name": "value",
                "description": "Binary data to stream or context relative path.",
                "type": "java.lang.Object"
            },
            {
                "name": "alt",
                "description": "Alternate text for the image.",
                "type": "java.lang.String"
            },
            {
                "name": "width",
                "description": "Width of the image.",
                "type": "java.lang.String"
            },
            {
                "name": "height",
                "description": "Height of the image.",
                "type": "java.lang.String"
            },
            {
                "name": "title",
                "description": "Title of the image.",
                "type": "java.lang.String"
            },
            {
                "name": "dir",
                "description": "Direction of the text displayed.",
                "type": "java.lang.String"
            },
            {
                "name": "lang",
                "description": "Language code.",
                "type": "java.lang.String"
            },
            {
                "name": "ismap",
                "description": "Specifies to use a server-side image map.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "usemap",
                "description": "Name of the client side map.",
                "type": "java.lang.String"
            },
            {
                "name": "style",
                "description": "Style of the image.",
                "type": "java.lang.String"
            },
            {
                "name": "styleClass",
                "description": "Style class of the image.",
                "type": "java.lang.String"
            },
            {
                "name": "onclick",
                "description": "onclick dom event handler.",
                "type": "java.lang.String"
            },
            {
                "name": "ondblclick",
                "description": "ondblclick dom event handler.",
                "type": "java.lang.String"
            },
            {
                "name": "onkeydown",
                "description": "onkeydown dom event handler.",
                "type": "java.lang.String"
            },
            {
                "name": "onkeypress",
                "description": "onkeypress dom event handler.",
                "type": "java.lang.String"
            },
            {
                "name": "onkeyup",
                "description": "onkeyup dom event handler.",
                "type": "java.lang.String"
            },
            {
                "name": "onmousedown",
                "description": "onmousedown dom event handler.",
                "type": "java.lang.String"
            },
            {
                "name": "onmousemove",
                "description": "onmousemove dom event handler.",
                "type": "java.lang.String"
            },
            {
                "name": "onmouseout",
                "description": "onmouseout dom event handler.",
                "type": "java.lang.String"
            },
            {
                "name": "onmouseover",
                "description": "onmouseover dom event handler.",
                "type": "java.lang.String"
            },
            {
                "name": "onmouseup",
                "description": "onmouseup dom event handler.",
                "type": "java.lang.String"
            }
        ]
    },
    "p:blockUI": {
        "name": "p:blockUI",
        "description": "BlockUI blocks Faces components during AJAX processing.",
        "attributes": [
            {
                "name": "id",
                "description": "Unique identifier of the component in a namingContainer.",
                "type": "java.lang.String"
            },
            {
                "name": "rendered",
                "description": "Boolean value to specify the rendering of the component, when set to false component will not be rendered.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "binding",
                "description": "An el expression referring to a server side UIComponent instance in a backing bean.",
                "type": "javax.faces.component.UIComponent"
            },
            {
                "name": "widgetVar",
                "description": "Name of the client side widget.",
                "type": "java.lang.String"
            },
            {
                "name": "trigger",
                "description": "Identifier of component(s) to bind the block UI.",
                "type": "java.lang.String"
            },
            {
                "name": "block",
                "description": "Component whose UI to block.",
                "type": "java.lang.String"
            },
            {
                "name": "blocked",
                "description": "Blocks the ui by default when enabled.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "animate",
                "description": "When disabled, Displays block without animation effect",
                "type": "java.lang.Boolean"
            },
            {
                "name": "styleClass",
                "description": "Style class of the component.",
                "type": "java.lang.String"
            },
            {
                "name": "delay",
                "description": "Delay in milliseconds before displaying the block. Default is '0', meaning immediate.",
                "type": "java.lang.String"
            }
        ]
    },
    "p:breadCrumb": {
        "name": "p:breadCrumb",
        "description": "Breadcrumb is a navigation component that provides contextual information about page hierarchy in the workflow.",
        "attributes": [
            {
                "name": "id",
                "description": "Unique identifier of the component in a namingContainer.",
                "type": "java.lang.String"
            },
            {
                "name": "rendered",
                "description": "Boolean value to specify the rendering of the component, when set to false component will not be rendered.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "binding",
                "description": "An el expression referring to a server side UIComponent instance in a backing bean.",
                "type": "javax.faces.component.UIComponent"
            },
            {
                "name": "widgetVar",
                "description": "Name of the client side widget.",
                "type": "java.lang.String"
            },
            {
                "name": "model",
                "description": "MenuModel instance to create menus programmatically.",
                "type": "org.primefaces.model.menu.MenuModel"
            },
            {
                "name": "style",
                "description": "Style of main container element.",
                "type": "java.lang.String"
            },
            {
                "name": "styleClass",
                "description": "Style class of main container.",
                "type": "java.lang.String"
            },
            {
                "name": "homeDisplay",
                "description": "Defines display mode of root link, valid values are \"icon\" default and \"text\".",
                "type": "java.lang.String"
            },
            {
                "name": "homeIcon",
                "description": "Defines home icon CSS class, default value is \"ui-icon ui-icon-home\".",
                "type": "java.lang.String"
            },
            {
                "name": "tabindex",
                "description": "Position of the items in the tabbing order. Default is 0.",
                "type": "java.lang.String"
            },
            {
                "name": "lastItemDisabled",
                "description": "Boolean flag indicating whether the last item should be disabled. Default is false.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "seo",
                "description": "Used to produce an Advanced SEO structure on the page. Default is false.",
                "type": "java.lang.Boolean"
            }
        ]
    },
    "p:button": {
        "name": "p:button",
        "description": "Button is an extension to the standard h:button component with skinning capabilities.",
        "attributes": [
            {
                "name": "id",
                "description": "Unique identifier of the component in a namingContainer.",
                "type": "java.lang.String"
            },
            {
                "name": "rendered",
                "description": "Boolean value to specify the rendering of the component, when set to false component will not be rendered.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "binding",
                "description": "An el expression referring to a server side UIComponent instance in a backing bean.",
                "type": "javax.faces.component.UIComponent"
            },
            {
                "name": "widgetVar",
                "description": "Name of the client side widget.",
                "type": "java.lang.String"
            },
            {
                "name": "value",
                "description": "Value of the component than can be either an EL expression of a literal text.",
                "type": "java.lang.String"
            },
            {
                "name": "outcome",
                "description": "Used to resolve a navigation case.",
                "type": "java.lang.String"
            },
            {
                "name": "includeViewParams",
                "description": "Whether to include page parameters in target URI. Default is false.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "fragment",
                "description": "Identifier of the target page which should be scrolled to.",
                "type": "java.lang.String"
            },
            {
                "name": "disabled",
                "description": "Disables button.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "accesskey",
                "description": "Access key that when pressed transfers focus to button.",
                "type": "java.lang.String"
            },
            {
                "name": "alt",
                "description": "Alternate textual description.",
                "type": "java.lang.String"
            },
            {
                "name": "dir",
                "description": "Direction indication for text that does not inherit directionality. Valid values are LTR and RTL.",
                "type": "java.lang.String"
            },
            {
                "name": "lang",
                "description": "Code describing the language used in the generated markup.",
                "type": "java.lang.String"
            },
            {
                "name": "tabindex",
                "description": "Position in the tabbing order.",
                "type": "java.lang.String"
            },
            {
                "name": "title",
                "description": "Advisory tooltip information.",
                "type": "java.lang.String"
            },
            {
                "name": "readonly",
                "description": "Makes button read only.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "style",
                "description": "Inline style of the button.",
                "type": "java.lang.String"
            },
            {
                "name": "styleClass",
                "description": "Style class of the button.",
                "type": "java.lang.String"
            },
            {
                "name": "onblur",
                "description": "Client side callback to execute when button loses focus.",
                "type": "java.lang.String"
            },
            {
                "name": "onchange",
                "description": "Client side callback to execute when button loses focus and its value has been modified since gaining focus.",
                "type": "java.lang.String"
            },
            {
                "name": "onclick",
                "description": "Client side callback to execute when button is clicked.",
                "type": "java.lang.String"
            },
            {
                "name": "ondblclick",
                "description": "Client side callback to execute when button is double clicked.",
                "type": "java.lang.String"
            },
            {
                "name": "onfocus",
                "description": "Client side callback to execute when button receives focus.",
                "type": "java.lang.String"
            },
            {
                "name": "onkeydown",
                "description": "Client side callback to execute when a key is pressed down over button.",
                "type": "java.lang.String"
            },
            {
                "name": "onkeypress",
                "description": "Client side callback to execute when a key is pressed and released over button.",
                "type": "java.lang.String"
            },
            {
                "name": "onkeyup",
                "description": "Client side callback to execute when a key is released over button.",
                "type": "java.lang.String"
            },
            {
                "name": "onmousedown",
                "description": "Client side callback to execute when a pointer button is pressed down over button.",
                "type": "java.lang.String"
            },
            {
                "name": "onmousemove",
                "description": "Client side callback to execute when a pointer button is moved within button.",
                "type": "java.lang.String"
            },
            {
                "name": "onmouseout",
                "description": "Client side callback to execute when a pointer button is moved away from button.",
                "type": "java.lang.String"
            },
            {
                "name": "onmouseover",
                "description": "Client side callback to execute when a pointer button is moved onto button.",
                "type": "java.lang.String"
            },
            {
                "name": "onmouseup",
                "description": "Client side callback to execute when a pointer button is released over button.",
                "type": "java.lang.String"
            },
            {
                "name": "icon",
                "description": "Icon of the button.",
                "type": "java.lang.String"
            },
            {
                "name": "iconPos",
                "description": "Position of the icon, default value is left.",
                "type": "java.lang.String"
            },
            {
                "name": "href",
                "description": "Resource to link to.",
                "type": "java.lang.String"
            },
            {
                "name": "target",
                "description": "The window target. Default _self.",
                "type": "java.lang.String"
            },
            {
                "name": "escape",
                "description": "Defines if label of the component is escaped or not.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "inline",
                "description": "Displays button inline instead of fitting the content width, only used by mobile.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "disableClientWindow",
                "description": "Disable appending the on the rendering of this element.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "ariaLabel",
                "description": "The aria-label attribute is used to define a string that labels the current element for accessibility.",
                "type": "java.lang.String"
            }
        ]
    },
    "p:cache": {
        "name": "p:cache",
        "description": "Cache component is used to reduce page load time by caching the content after initial rendering.",
        "attributes": [
            {
                "name": "id",
                "description": "Unique identifier of the component in a namingContainer.",
                "type": "java.lang.String"
            },
            {
                "name": "rendered",
                "description": "Boolean value to specify the rendering of the component, when set to false component will not be rendered.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "binding",
                "description": "An el expression referring to a server side UIComponent instance in a backing bean.",
                "type": "javax.faces.component.UIComponent"
            },
            {
                "name": "disabled",
                "description": "Disables caching.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "region",
                "description": "Unique id of the cache region, defaults to view id.",
                "type": "java.lang.String"
            },
            {
                "name": "key",
                "description": "Unique id of the cache entry in region, defaults to client id of component.",
                "type": "java.lang.String"
            },
            {
                "name": "processEvents",
                "description": "When enabled, lifecycle events such as button actions are executed. Default is false.",
                "type": "java.lang.Boolean"
            }
        ]
    },
    "p:calendar": {
        "name": "p:calendar",
        "description": "Calendar is an input component used to provide a date. Other than basic features calendar supports paging, localization, AJAX selection and more.",
        "attributes": [
            {
                "name": "id",
                "description": "Unique identifier of the component in a namingContainer.",
                "type": "java.lang.String"
            },
            {
                "name": "rendered",
                "description": "Boolean value to specify the rendering of the component, when set to false component will not be rendered.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "binding",
                "description": "An el expression referring to a server side UIComponent instance in a backing bean.",
                "type": "javax.faces.component.UIComponent"
            },
            {
                "name": "value",
                "description": "Value of the component.",
                "type": "java.lang.Object"
            },
            {
                "name": "converter",
                "description": "An el expression or a literal text that defines a converter for the component. When it's an EL expression, it's resolved to a converter instance.\n    In case it's a static text, it must refer to a converter id.",
                "type": "javax.faces.convert.Converter"
            },
            {
                "name": "immediate",
                "description": "When set true, process validations logic is executed at apply request values phase for this component. Default is false.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "required",
                "description": "Marks component as required.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "validator",
                "description": "A method expression referring to a method validating the input.",
                "type": "javax.faces.validator.Validator"
            },
            {
                "name": "valueChangeListener",
                "description": "A method binding expression referring to a method for handling a valuchangeevent.",
                "type": "javax.faces.event.ValueChangeListener"
            },
            {
                "name": "requiredMessage",
                "description": "Message to display when required field validation fails.",
                "type": "java.lang.String"
            },
            {
                "name": "converterMessage",
                "description": "Message to display when conversion fails.",
                "type": "java.lang.String"
            },
            {
                "name": "validatorMessage",
                "description": "Message to display when validation fails.",
                "type": "java.lang.String"
            },
            {
                "name": "accesskey",
                "description": "Access key to transfer focus to the input element.",
                "type": "java.lang.String"
            },
            {
                "name": "alt",
                "description": "Alternate textual description of the input element.",
                "type": "java.lang.String"
            },
            {
                "name": "autocomplete",
                "description": "Controls browser autocomplete behavior.",
                "type": "java.lang.String"
            },
            {
                "name": "dir",
                "description": "Direction indication for text that does not inherit directionality.",
                "type": "java.lang.String"
            },
            {
                "name": "disabled",
                "description": "Disables the input element, default is false.",
                "type": "boolean"
            },
            {
                "name": "label",
                "description": "A localized user presentable name.",
                "type": "java.lang.String"
            },
            {
                "name": "lang",
                "description": "Code describing the language used in the generated markup.",
                "type": "java.lang.String"
            },
            {
                "name": "maxlength",
                "description": "Maximum number of characters that may be entered in this field.",
                "type": "int"
            },
            {
                "name": "onblur",
                "description": "Client side callback to execute when input element loses focus.",
                "type": "java.lang.String"
            },
            {
                "name": "onchange",
                "description": "Client side callback to execute when input element loses focus and its value has been modified since gaining focus.",
                "type": "java.lang.String"
            },
            {
                "name": "onclick",
                "description": "Client side callback to execute when input element is clicked.",
                "type": "java.lang.String"
            },
            {
                "name": "ondblclick",
                "description": "Client side callback to execute when input element is double clicked.",
                "type": "java.lang.String"
            },
            {
                "name": "onfocus",
                "description": "Client side callback to execute when input element receives focus.",
                "type": "java.lang.String"
            },
            {
                "name": "onkeydown",
                "description": "Client side callback to execute when a key is pressed down over input element.",
                "type": "java.lang.String"
            },
            {
                "name": "onkeypress",
                "description": "Client side callback to execute when a key is pressed and released over input element.",
                "type": "java.lang.String"
            },
            {
                "name": "onkeyup",
                "description": "Client side callback to execute when a key is released over input element.",
                "type": "java.lang.String"
            },
            {
                "name": "onmousedown",
                "description": "Client side callback to execute when a pointer input element is pressed down over input element.",
                "type": "java.lang.String"
            },
            {
                "name": "onmousemove",
                "description": "Client side callback to execute when a pointer input element is moved within input element.",
                "type": "java.lang.String"
            },
            {
                "name": "onmouseout",
                "description": "Client side callback to execute when a pointer input element is moved away from input element.",
                "type": "java.lang.String"
            },
            {
                "name": "onmouseover",
                "description": "Client side callback to execute when a pointer input element is moved onto input element.",
                "type": "java.lang.String"
            },
            {
                "name": "onmouseup",
                "description": "Client side callback to execute when a pointer input element is released over input element.",
                "type": "java.lang.String"
            },
            {
                "name": "onwheel",
                "description": "Client side callback to execute when the mouse wheel rolls up or down over an element.",
                "type": "java.lang.String"
            },
            {
                "name": "onselect",
                "description": "Client side callback to execute when text within input element is selected by user.",
                "type": "java.lang.String"
            },
            {
                "name": "oncut",
                "description": "Client side callback to execute when the user copies the content of an element.",
                "type": "java.lang.String"
            },
            {
                "name": "oncopy",
                "description": "Client side callback to execute when the user cuts the content of an element.",
                "type": "java.lang.String"
            },
            {
                "name": "onpaste",
                "description": "Client side callback to execute when the user pastes some content in an element.",
                "type": "java.lang.String"
            },
            {
                "name": "oninput",
                "description": "Client side callback to execute when an element gets user input.",
                "type": "java.lang.String"
            },
            {
                "name": "oncontextmenu",
                "description": "Client side callback to execute when a context menu is triggered.",
                "type": "java.lang.String"
            },
            {
                "name": "oninvalid",
                "description": "Client side callback to execute when an element is invalid.",
                "type": "java.lang.String"
            },
            {
                "name": "onreset",
                "description": "Client side callback to execute when the Reset button in a form is clicked.",
                "type": "java.lang.String"
            },
            {
                "name": "onsearch",
                "description": "Client side callback to execute when the user writes something in a search field.",
                "type": "java.lang.String"
            },
            {
                "name": "ondrag",
                "description": "Client side callback to execute when an element is dragged.",
                "type": "java.lang.String"
            },
            {
                "name": "ondragend",
                "description": "Client side callback to execute at the end of a drag operation.",
                "type": "java.lang.String"
            },
            {
                "name": "ondragenter",
                "description": "Client side callback to execute when an element has been dragged to a valid drop target.",
                "type": "java.lang.String"
            },
            {
                "name": "ondragleave",
                "description": "Client side callback to execute when an element leaves a valid drop target.",
                "type": "java.lang.String"
            },
            {
                "name": "ondragover",
                "description": "Client side callback to execute when an element is being dragged over a valid drop target.",
                "type": "java.lang.String"
            },
            {
                "name": "ondragstart",
                "description": "Client side callback to execute at the start of a drag operation.",
                "type": "java.lang.String"
            },
            {
                "name": "ondrop",
                "description": "Client side callback to execute when dragged element is being dropped.",
                "type": "java.lang.String"
            },
            {
                "name": "onscroll",
                "description": "Client side callback to execute when an element's scrollbar is being scrolled.",
                "type": "java.lang.String"
            },
            {
                "name": "readonly",
                "description": "Flag indicating that this component will prevent changes by the user.",
                "type": "boolean"
            },
            {
                "name": "size",
                "description": "Number of characters used to determine the width of the input element.",
                "type": "int"
            },
            {
                "name": "style",
                "description": "Inline style of the component.",
                "type": "java.lang.String"
            },
            {
                "name": "styleClass",
                "description": "Style class of the component.",
                "type": "java.lang.String"
            },
            {
                "name": "tabindex",
                "description": "Position of the element in the tabbing order.",
                "type": "java.lang.String"
            },
            {
                "name": "title",
                "description": "Advisory tooltip information.",
                "type": "java.lang.String"
            },
            {
                "name": "placeholder",
                "description": "The placeholder attribute specifies a short hint that describes the expected value of an input field.",
                "type": "java.lang.String"
            },
            {
                "name": "widgetVar",
                "description": "Name of the client side widget.",
                "type": "java.lang.String"
            },
            {
                "name": "mindate",
                "description": "Sets calendar's minimum visible date.",
                "type": "java.lang.Object"
            },
            {
                "name": "maxdate",
                "description": "Sets calendar's maximum visible date.",
                "type": "java.lang.Object"
            },
            {
                "name": "pages",
                "description": "Enables multiple page rendering.",
                "type": "java.lang.Integer"
            },
            {
                "name": "mode",
                "description": "Defines how the calendar will be displayed. Default is popup",
                "type": "java.lang.String"
            },
            {
                "name": "pattern",
                "description": "DateFormat pattern for localization.",
                "type": "java.lang.String"
            },
            {
                "name": "locale",
                "description": "User locale for i18n localization messages. The attribute can be either a String or java.util.Locale object.",
                "type": "java.lang.Object"
            },
            {
                "name": "navigator",
                "description": "Enables month/year navigator. Default is false.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "timeZone",
                "description": "String or a java.util.TimeZone instance to specify the timezone used for date conversion, defaults to TimeZone.getDefault()",
                "type": "java.lang.Object"
            },
            {
                "name": "readonlyInput",
                "description": "Makes input text of a popup calendar readonly. Default is false.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "showButtonPanel",
                "description": "Visibility of button panel containing today and done buttons. Default is false.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "effect",
                "description": "Effect to use when displaying and showing the popup calendar.",
                "type": "java.lang.String"
            },
            {
                "name": "effectDuration",
                "description": "Duration of the effect. Default is normal.",
                "type": "java.lang.String"
            },
            {
                "name": "showOn",
                "description": "Client side event that displays the popup calendar.",
                "type": "java.lang.String"
            },
            {
                "name": "showWeek",
                "description": "Displays the week number next to each week. Default is false.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "disabledWeekends",
                "description": "Disables weekend columns. Default is false.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "showOtherMonths",
                "description": "Displays days belonging to other months. Default is false.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "showLongMonthNames",
                "description": "Displays long month names instead of short names in month picker and month navigator. Default is false.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "selectOtherMonths",
                "description": "Enables selection of days belonging to other months. Default is false.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "yearRange",
                "description": "Year range for the navigator, default is \"c-10:c+10\"",
                "type": "java.lang.String"
            },
            {
                "name": "timeOnly",
                "description": "Shows only time picker without date.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "stepHour",
                "description": "Hour steps, default is 1.",
                "type": "java.lang.Integer"
            },
            {
                "name": "stepMinute",
                "description": "Minute steps, default is 1.",
                "type": "java.lang.Integer"
            },
            {
                "name": "stepSecond",
                "description": "Second steps, default is 1.",
                "type": "java.lang.Integer"
            },
            {
                "name": "minHour",
                "description": "Minimum boundary for hour selection. Default is 0.",
                "type": "java.lang.Integer"
            },
            {
                "name": "maxHour",
                "description": "Maximum boundary for hour selection. Default is 23.",
                "type": "java.lang.Integer"
            },
            {
                "name": "minMinute",
                "description": "Minimum boundary for minute selection. Default is 0.",
                "type": "java.lang.Integer"
            },
            {
                "name": "maxMinute",
                "description": "Maximum boundary for minute selection. Default is 59.",
                "type": "java.lang.Integer"
            },
            {
                "name": "minSecond",
                "description": "Minimum boundary for second selection. Default is 0.",
                "type": "java.lang.Integer"
            },
            {
                "name": "maxSecond",
                "description": "Maximum boundary for second selection. Default is 59.",
                "type": "java.lang.Integer"
            },
            {
                "name": "pagedate",
                "description": "Sets the initial date when value is not populated.",
                "type": "java.lang.Object"
            },
            {
                "name": "beforeShowDay",
                "description": "Callback to execute before displaying a date, used to customize date display.",
                "type": "java.lang.String"
            },
            {
                "name": "timeControlType",
                "description": "Defines the type of element to use for time picker, valid values are \"slider\" , \"select\" and \"custom\"(with \"timeControlObject\" attribute).",
                "type": "java.lang.String"
            },
            {
                "name": "beforeShow",
                "description": "Callback to execute before displaying calendar, element and calendar instance are passed as parameters.",
                "type": "java.lang.String"
            },
            {
                "name": "mask",
                "description": "Defines if a mask should be applied to the input field. Default value is \"false\" and valid values to enable are \"true\" that uses the pattern as the mask or a custom template. Refer to\n                inputMask component for more information about custom templates.",
                "type": "java.lang.String"
            },
            {
                "name": "maskSlotChar",
                "description": "PlaceHolder in mask template.",
                "type": "java.lang.String"
            },
            {
                "name": "maskAutoClear",
                "description": "Clears the field on blur when incomplete input is entered.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "timeControlObject",
                "description": "Client side object to use in custom timeControlType.",
                "type": "java.lang.String"
            },
            {
                "name": "timeInput",
                "description": "Allows direct input in time field. Default is false.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "showHour",
                "description": "Whether to show the hour control, valid values are \"true\" and \"false\".",
                "type": "java.lang.String"
            },
            {
                "name": "showMinute",
                "description": "Whether to show the minute control, valid values are \"true\" and \"false\".",
                "type": "java.lang.String"
            },
            {
                "name": "showSecond",
                "description": "Whether to show the second control, valid values are \"true\" and \"false\".",
                "type": "java.lang.String"
            },
            {
                "name": "showMillisec",
                "description": "Whether to show the millisecond control, valid values are \"true\" and \"false\".",
                "type": "java.lang.String"
            },
            {
                "name": "showTodayButton",
                "description": "Whether to show the \"Current Date\" button if showButtonPanel is rendered. Default is \"true\".",
                "type": "java.lang.Boolean"
            },
            {
                "name": "buttonTabindex",
                "description": "Position of the button in the tabbing order.",
                "type": "java.lang.String"
            },
            {
                "name": "inputStyle",
                "description": "Inline style of the input element. Used when mode is popup.",
                "type": "java.lang.String"
            },
            {
                "name": "inputStyleClass",
                "description": "Style class of the input element. Used when mode is popup.",
                "type": "java.lang.String"
            },
            {
                "name": "type",
                "description": "Input field type. Default is text.",
                "type": "java.lang.String"
            },
            {
                "name": "focusOnSelect",
                "description": "If enabled, the input is focused again after selecting a date. Default is false.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "oneLine",
                "description": "Try to show the time dropdowns all on one line. This should be used with controlType 'select'.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "defaultHour",
                "description": "Default for hour selection, if no date is given. Default is 0.",
                "type": "java.lang.Integer"
            },
            {
                "name": "defaultMinute",
                "description": "Default for minute selection, if no date is given. Default is 0.",
                "type": "java.lang.Integer"
            },
            {
                "name": "defaultSecond",
                "description": "Default for second selection, if no date is given. Default is 0.",
                "type": "java.lang.Integer"
            },
            {
                "name": "defaultMillisecond",
                "description": "Default for millisecond selection, if no date is given. Default is 0.",
                "type": "java.lang.Integer"
            },
            {
                "name": "resolverStyle",
                "description": "ResolverStyle for java.time.format.DateTimeFormatter, lenient, smart or strict, Default is smart.",
                "type": "java.lang.String"
            },
            {
                "name": "touchable",
                "description": "Enable touch support if browser detection supports it. Default is false because it is globally enabled by default.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "shortYearCutoff",
                "description": "The cutoff year for determining the century for a date. Default is \"+10\".",
                "type": "java.lang.String"
            }
        ]
    },
    "p:captcha": {
        "name": "p:captcha",
        "description": "Captcha is a form validation component based on Recaptcha/hCaptcha API.",
        "attributes": [
            {
                "name": "id",
                "description": "Unique identifier of the component in a namingContainer.",
                "type": "java.lang.String"
            },
            {
                "name": "rendered",
                "description": "Boolean value to specify the rendering of the component, when set to false component will not be rendered.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "binding",
                "description": "An el expression referring to a server side UIComponent instance in a backing bean.",
                "type": "javax.faces.component.UIComponent"
            },
            {
                "name": "value",
                "description": "Value of the component.",
                "type": "java.lang.Object"
            },
            {
                "name": "converter",
                "description": "An el expression or a literal text that defines a converter for the component. When it's an EL expression, it's resolved to a converter instance.\n    In case it's a static text, it must refer to a converter id.",
                "type": "javax.faces.convert.Converter"
            },
            {
                "name": "immediate",
                "description": "When set true, process validations logic is executed at apply request values phase for this component. Default is false.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "required",
                "description": "Marks component as required.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "validator",
                "description": "A method expression referring to a method validating the input.",
                "type": "javax.faces.validator.Validator"
            },
            {
                "name": "valueChangeListener",
                "description": "A method binding expression referring to a method for handling a valuchangeevent.",
                "type": "javax.faces.event.ValueChangeListener"
            },
            {
                "name": "requiredMessage",
                "description": "Message to display when required field validation fails.",
                "type": "java.lang.String"
            },
            {
                "name": "converterMessage",
                "description": "Message to display when conversion fails.",
                "type": "java.lang.String"
            },
            {
                "name": "validatorMessage",
                "description": "Message to display when validation fails.",
                "type": "java.lang.String"
            },
            {
                "name": "type",
                "description": "Which captcha to use, either 'g-recaptcha' for Google reCaptcha or 'h-captcha` for hCaptcha. Default is 'g-recaptcha'.",
                "type": "java.lang.String"
            },
            {
                "name": "executor",
                "description": "JavaScript global executor for the captcha. Default is 'grecaptcha'.",
                "type": "java.lang.String"
            },
            {
                "name": "theme",
                "description": "Theme of the captcha either 'light', 'dark', or 'auto'. Default is auto.",
                "type": "java.lang.String"
            },
            {
                "name": "language",
                "description": "Key of the supported languages. Default is \"en\".",
                "type": "java.lang.String"
            },
            {
                "name": "tabindex",
                "description": "Position of the input element in the tabbing order.",
                "type": "java.lang.Integer"
            },
            {
                "name": "label",
                "description": "A localized user presentable name.",
                "type": "java.lang.String"
            },
            {
                "name": "callback",
                "description": "Callback executed when the user submits a successful captcha response.",
                "type": "java.lang.String"
            },
            {
                "name": "expired",
                "description": "Callback executed when the captcha response expires and the user needs to solve a new captcha.",
                "type": "java.lang.String"
            },
            {
                "name": "size",
                "description": "The size of the widget.",
                "type": "java.lang.String"
            },
            {
                "name": "sourceUrl",
                "description": "URL for the ReCaptcha JavaScript file. Some countries do not have access to Google.",
                "type": "java.lang.String"
            },
            {
                "name": "verifyUrl",
                "description": "URL for the verification of the captcha.",
                "type": "java.lang.String"
            }
        ]
    },
    "p:carousel": {
        "name": "p:carousel",
        "description": "Carousel is a multi purpose component to display a set of data or general content with slide effects.",
        "attributes": [
            {
                "name": "id",
                "description": "Unique identifier of the component in a namingContainer.",
                "type": "java.lang.String"
            },
            {
                "name": "rendered",
                "description": "Boolean value to specify the rendering of the component, when set to false component will not be rendered.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "binding",
                "description": "An el expression referring to a server side UIComponent instance in a backing bean.",
                "type": "javax.faces.component.UIComponent"
            },
            {
                "name": "widgetVar",
                "description": "Name of the client side widget.",
                "type": "java.lang.String"
            },
            {
                "name": "value",
                "description": "Datasource of the component.",
                "type": "java.lang.Object"
            },
            {
                "name": "var",
                "description": "Name of the iterator variable that references each element in the data set.",
                "type": "String"
            },
            {
                "name": "varStatus",
                "description": "Name of the exported request scoped variable for the status of the iteration.",
                "type": "java.lang.String"
            },
            {
                "name": "page",
                "description": "Index of the first item.",
                "type": "java.lang.Integer"
            },
            {
                "name": "headerText",
                "description": "Shortcut for header facet.",
                "type": "java.lang.String"
            },
            {
                "name": "footerText",
                "description": "Shortcut for footer facet.",
                "type": "java.lang.String"
            },
            {
                "name": "style",
                "description": "Inline style of the main container.",
                "type": "java.lang.String"
            },
            {
                "name": "styleClass",
                "description": "Style class of the main container.",
                "type": "java.lang.String"
            },
            {
                "name": "circular",
                "description": "Defines if scrolling would be infinite. Default is false.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "autoplayInterval",
                "description": "Sets the time in milliseconds to have Carousel start scrolling automatically after being initialized. Default is 0.",
                "type": "java.lang.Integer"
            },
            {
                "name": "numVisible",
                "description": "Number of visible items per page. Default is 1.",
                "type": "java.lang.Integer"
            },
            {
                "name": "numScroll",
                "description": "Number of items to scroll. Default is 1.",
                "type": "java.lang.Integer"
            },
            {
                "name": "responsiveOptions",
                "description": "A list of options for responsive design.",
                "type": "java.util.List"
            },
            {
                "name": "orientation",
                "description": "Specifies the layout of the component, valid values are \"horizontal\" and \"vertical\". Default is vertical.",
                "type": "java.lang.String"
            },
            {
                "name": "onPageChange",
                "description": "Client side callback to invoke after scroll.",
                "type": "java.lang.String"
            },
            {
                "name": "verticalViewPortHeight",
                "description": "Height of the viewport in vertical layout. Default is 300px.",
                "type": "java.lang.String"
            },
            {
                "name": "contentStyleClass",
                "description": "Style class of main content.",
                "type": "java.lang.String"
            },
            {
                "name": "containerStyleClass",
                "description": "Style class of the viewport container.",
                "type": "java.lang.String"
            },
            {
                "name": "indicatorsContentStyleClass",
                "description": "Style class of the paginator items.",
                "type": "java.lang.String"
            },
            {
                "name": "touchable",
                "description": "Enable touch support if browser detection supports it. Default is false because it is globally enabled by default.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "paginator",
                "description": "Enables paginator links. Default is true.",
                "type": "java.lang.Boolean"
            }
        ]
    },
    "p:cellEditor": {
        "name": "p:cellEditor",
        "description": "CellEditor is a helper component of datatable used for incell editing.",
        "attributes": [
            {
                "name": "id",
                "description": "Unique identifier of the component in a namingContainer.",
                "type": "java.lang.String"
            },
            {
                "name": "rendered",
                "description": "Boolean value to specify the rendering of the component, when set to false component will not be rendered.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "binding",
                "description": "An el expression referring to a server side UIComponent instance in a backing bean.",
                "type": "javax.faces.component.UIComponent"
            },
            {
                "name": "disabled",
                "description": "Prevents hidden content to be shown.",
                "type": "java.lang.Boolean"
            }
        ]
    },
    "p:checkbox": {
        "name": "p:checkbox",
        "description": "Checkbox is a helper component of SelectManyCheckbox to implement custom layouts.",
        "attributes": [
            {
                "name": "id",
                "description": "Unique identifier of the component in a namingContainer.",
                "type": "java.lang.String"
            },
            {
                "name": "rendered",
                "description": "Boolean value to specify the rendering of the component, when set to false component will not be rendered.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "binding",
                "description": "An el expression referring to a server side UIComponent instance in a backing bean.",
                "type": "javax.faces.component.UIComponent"
            },
            {
                "name": "widgetVar",
                "description": "Name of the client side widget.",
                "type": "java.lang.String"
            },
            {
                "name": "disabled",
                "description": "Disables the component.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "itemIndex",
                "description": "Index of the selectItem of the SelectManyCheckbox.",
                "type": "java.lang.Integer"
            },
            {
                "name": "onchange",
                "description": "Client side callback to execute on state change.",
                "type": "java.lang.String"
            },
            {
                "name": "for",
                "description": "Id of the SelectManyCheckbox component to attach to.",
                "type": "java.lang.String"
            },
            {
                "name": "style",
                "description": "Inline style of the component.",
                "type": "java.lang.String"
            },
            {
                "name": "styleClass",
                "description": "Style class of the component.",
                "type": "java.lang.String"
            },
            {
                "name": "tabindex",
                "description": "The tabindex attribute specifies the tab order of an element when the \"tab\" button is used for navigating.",
                "type": "java.lang.String"
            }
        ]
    },
    "p:chips": {
        "name": "p:chips",
        "description": "Chips is used to enter multiple values on an inputfield.",
        "attributes": [
            {
                "name": "id",
                "description": "Unique identifier of the component in a namingContainer.",
                "type": "java.lang.String"
            },
            {
                "name": "rendered",
                "description": "Boolean value to specify the rendering of the component, when set to false component will not be rendered.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "binding",
                "description": "An el expression referring to a server side UIComponent instance in a backing bean.",
                "type": "javax.faces.component.UIComponent"
            },
            {
                "name": "value",
                "description": "Value of the component.",
                "type": "java.lang.Object"
            },
            {
                "name": "converter",
                "description": "An el expression or a literal text that defines a converter for the component. When it's an EL expression, it's resolved to a converter instance.\n    In case it's a static text, it must refer to a converter id.",
                "type": "javax.faces.convert.Converter"
            },
            {
                "name": "immediate",
                "description": "When set true, process validations logic is executed at apply request values phase for this component. Default is false.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "required",
                "description": "Marks component as required.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "validator",
                "description": "A method expression referring to a method validating the input.",
                "type": "javax.faces.validator.Validator"
            },
            {
                "name": "valueChangeListener",
                "description": "A method binding expression referring to a method for handling a valuchangeevent.",
                "type": "javax.faces.event.ValueChangeListener"
            },
            {
                "name": "requiredMessage",
                "description": "Message to display when required field validation fails.",
                "type": "java.lang.String"
            },
            {
                "name": "converterMessage",
                "description": "Message to display when conversion fails.",
                "type": "java.lang.String"
            },
            {
                "name": "validatorMessage",
                "description": "Message to display when validation fails.",
                "type": "java.lang.String"
            },
            {
                "name": "accesskey",
                "description": "Access key to transfer focus to the input element.",
                "type": "java.lang.String"
            },
            {
                "name": "alt",
                "description": "Alternate textual description of the input element.",
                "type": "java.lang.String"
            },
            {
                "name": "autocomplete",
                "description": "Controls browser autocomplete behavior.",
                "type": "java.lang.String"
            },
            {
                "name": "dir",
                "description": "Direction indication for text that does not inherit directionality.",
                "type": "java.lang.String"
            },
            {
                "name": "disabled",
                "description": "Disables the input element, default is false.",
                "type": "boolean"
            },
            {
                "name": "label",
                "description": "A localized user presentable name.",
                "type": "java.lang.String"
            },
            {
                "name": "lang",
                "description": "Code describing the language used in the generated markup.",
                "type": "java.lang.String"
            },
            {
                "name": "maxlength",
                "description": "Maximum number of characters that may be entered in this field.",
                "type": "int"
            },
            {
                "name": "onblur",
                "description": "Client side callback to execute when input element loses focus.",
                "type": "java.lang.String"
            },
            {
                "name": "onchange",
                "description": "Client side callback to execute when input element loses focus and its value has been modified since gaining focus.",
                "type": "java.lang.String"
            },
            {
                "name": "onclick",
                "description": "Client side callback to execute when input element is clicked.",
                "type": "java.lang.String"
            },
            {
                "name": "ondblclick",
                "description": "Client side callback to execute when input element is double clicked.",
                "type": "java.lang.String"
            },
            {
                "name": "onfocus",
                "description": "Client side callback to execute when input element receives focus.",
                "type": "java.lang.String"
            },
            {
                "name": "onkeydown",
                "description": "Client side callback to execute when a key is pressed down over input element.",
                "type": "java.lang.String"
            },
            {
                "name": "onkeypress",
                "description": "Client side callback to execute when a key is pressed and released over input element.",
                "type": "java.lang.String"
            },
            {
                "name": "onkeyup",
                "description": "Client side callback to execute when a key is released over input element.",
                "type": "java.lang.String"
            },
            {
                "name": "onmousedown",
                "description": "Client side callback to execute when a pointer input element is pressed down over input element.",
                "type": "java.lang.String"
            },
            {
                "name": "onmousemove",
                "description": "Client side callback to execute when a pointer input element is moved within input element.",
                "type": "java.lang.String"
            },
            {
                "name": "onmouseout",
                "description": "Client side callback to execute when a pointer input element is moved away from input element.",
                "type": "java.lang.String"
            },
            {
                "name": "onmouseover",
                "description": "Client side callback to execute when a pointer input element is moved onto input element.",
                "type": "java.lang.String"
            },
            {
                "name": "onmouseup",
                "description": "Client side callback to execute when a pointer input element is released over input element.",
                "type": "java.lang.String"
            },
            {
                "name": "onwheel",
                "description": "Client side callback to execute when the mouse wheel rolls up or down over an element.",
                "type": "java.lang.String"
            },
            {
                "name": "onselect",
                "description": "Client side callback to execute when text within input element is selected by user.",
                "type": "java.lang.String"
            },
            {
                "name": "oncut",
                "description": "Client side callback to execute when the user copies the content of an element.",
                "type": "java.lang.String"
            },
            {
                "name": "oncopy",
                "description": "Client side callback to execute when the user cuts the content of an element.",
                "type": "java.lang.String"
            },
            {
                "name": "onpaste",
                "description": "Client side callback to execute when the user pastes some content in an element.",
                "type": "java.lang.String"
            },
            {
                "name": "oninput",
                "description": "Client side callback to execute when an element gets user input.",
                "type": "java.lang.String"
            },
            {
                "name": "oncontextmenu",
                "description": "Client side callback to execute when a context menu is triggered.",
                "type": "java.lang.String"
            },
            {
                "name": "oninvalid",
                "description": "Client side callback to execute when an element is invalid.",
                "type": "java.lang.String"
            },
            {
                "name": "onreset",
                "description": "Client side callback to execute when the Reset button in a form is clicked.",
                "type": "java.lang.String"
            },
            {
                "name": "onsearch",
                "description": "Client side callback to execute when the user writes something in a search field.",
                "type": "java.lang.String"
            },
            {
                "name": "ondrag",
                "description": "Client side callback to execute when an element is dragged.",
                "type": "java.lang.String"
            },
            {
                "name": "ondragend",
                "description": "Client side callback to execute at the end of a drag operation.",
                "type": "java.lang.String"
            },
            {
                "name": "ondragenter",
                "description": "Client side callback to execute when an element has been dragged to a valid drop target.",
                "type": "java.lang.String"
            },
            {
                "name": "ondragleave",
                "description": "Client side callback to execute when an element leaves a valid drop target.",
                "type": "java.lang.String"
            },
            {
                "name": "ondragover",
                "description": "Client side callback to execute when an element is being dragged over a valid drop target.",
                "type": "java.lang.String"
            },
            {
                "name": "ondragstart",
                "description": "Client side callback to execute at the start of a drag operation.",
                "type": "java.lang.String"
            },
            {
                "name": "ondrop",
                "description": "Client side callback to execute when dragged element is being dropped.",
                "type": "java.lang.String"
            },
            {
                "name": "onscroll",
                "description": "Client side callback to execute when an element's scrollbar is being scrolled.",
                "type": "java.lang.String"
            },
            {
                "name": "readonly",
                "description": "Flag indicating that this component will prevent changes by the user.",
                "type": "boolean"
            },
            {
                "name": "size",
                "description": "Number of characters used to determine the width of the input element.",
                "type": "int"
            },
            {
                "name": "style",
                "description": "Inline style of the component.",
                "type": "java.lang.String"
            },
            {
                "name": "styleClass",
                "description": "Style class of the component.",
                "type": "java.lang.String"
            },
            {
                "name": "tabindex",
                "description": "Position of the element in the tabbing order.",
                "type": "java.lang.String"
            },
            {
                "name": "title",
                "description": "Advisory tooltip information.",
                "type": "java.lang.String"
            },
            {
                "name": "placeholder",
                "description": "The placeholder attribute specifies a short hint that describes the expected value of an input field.",
                "type": "java.lang.String"
            },
            {
                "name": "widgetVar",
                "description": "Name of the client side widget.",
                "type": "java.lang.String"
            },
            {
                "name": "max",
                "description": "Maximum number of entries allowed.",
                "type": "java.lang.Integer"
            },
            {
                "name": "inputStyle",
                "description": "Inline style of the input control.",
                "type": "java.lang.String"
            },
            {
                "name": "inputStyleClass",
                "description": "Style class of the input control.",
                "type": "java.lang.String"
            },
            {
                "name": "addOnBlur",
                "description": "Whether to add an item when the input loses focus. Default false.",
                "type": "boolean"
            },
            {
                "name": "addOnPaste",
                "description": "Whether to add the items immediately when pasting into the input. Default false.",
                "type": "boolean"
            },
            {
                "name": "unique",
                "description": "Prevent duplicate entries from being added. Default false.",
                "type": "boolean"
            },
            {
                "name": "separator",
                "description": "Separator character to allow multiple values such if a list is pasted into the input. Default is ','.",
                "type": "java.lang.String"
            }
        ]
    },
    "p:clock": {
        "name": "p:clock",
        "description": "Clock displays server or client datetime live.",
        "attributes": [
            {
                "name": "id",
                "description": "Unique identifier of the component in a namingContainer.",
                "type": "java.lang.String"
            },
            {
                "name": "rendered",
                "description": "Boolean value to specify the rendering of the component, when set to false component will not be rendered.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "binding",
                "description": "An el expression referring to a server side UIComponent instance in a backing bean.",
                "type": "javax.faces.component.UIComponent"
            },
            {
                "name": "widgetVar",
                "description": "Name of the client side widget.",
                "type": "java.lang.String"
            },
            {
                "name": "pattern",
                "description": "Datetime format.",
                "type": "java.lang.String"
            },
            {
                "name": "mode",
                "description": "Mode of the client, valid values are client and server.",
                "type": "java.lang.String"
            },
            {
                "name": "autoSync",
                "description": "Syncs time periodically in server mode.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "syncInterval",
                "description": "Defines the sync interval in autoSync mode, default is 60000 milliseconds.",
                "type": "java.lang.Integer"
            },
            {
                "name": "timeZone",
                "description": "String or a java.util.TimeZone instance to specify the timezone used for date conversion, defaults to TimeZone.getDefault()",
                "type": "java.lang.Object"
            },
            {
                "name": "displayMode",
                "description": "Display mode, valid values are digital(default) and analog.",
                "type": "java.lang.String"
            },
            {
                "name": "value",
                "description": "Custom clock time in 'server' mode must be either Date or LocalDateTime. Null means use server clock time.",
                "type": "java.lang.Object"
            }
        ]
    },
    "p:colorPicker": {
        "name": "p:colorPicker",
        "description": "ColorPicker is an input component with a color palette.",
        "attributes": [
            {
                "name": "id",
                "description": "Unique identifier of the component in a namingContainer.",
                "type": "java.lang.String"
            },
            {
                "name": "rendered",
                "description": "Boolean value to specify the rendering of the component, when set to false component will not be rendered.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "binding",
                "description": "An el expression referring to a server side UIComponent instance in a backing bean.",
                "type": "javax.faces.component.UIComponent"
            },
            {
                "name": "value",
                "description": "Value of the component.",
                "type": "java.lang.Object"
            },
            {
                "name": "converter",
                "description": "An el expression or a literal text that defines a converter for the component. When it's an EL expression, it's resolved to a converter instance.\n    In case it's a static text, it must refer to a converter id.",
                "type": "javax.faces.convert.Converter"
            },
            {
                "name": "immediate",
                "description": "When set true, process validations logic is executed at apply request values phase for this component. Default is false.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "required",
                "description": "Marks component as required.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "validator",
                "description": "A method expression referring to a method validating the input.",
                "type": "javax.faces.validator.Validator"
            },
            {
                "name": "valueChangeListener",
                "description": "A method binding expression referring to a method for handling a valuchangeevent.",
                "type": "javax.faces.event.ValueChangeListener"
            },
            {
                "name": "requiredMessage",
                "description": "Message to display when required field validation fails.",
                "type": "java.lang.String"
            },
            {
                "name": "converterMessage",
                "description": "Message to display when conversion fails.",
                "type": "java.lang.String"
            },
            {
                "name": "validatorMessage",
                "description": "Message to display when validation fails.",
                "type": "java.lang.String"
            },
            {
                "name": "accesskey",
                "description": "Access key to transfer focus to the input element.",
                "type": "java.lang.String"
            },
            {
                "name": "alt",
                "description": "Alternate textual description of the input element.",
                "type": "java.lang.String"
            },
            {
                "name": "autocomplete",
                "description": "Controls browser autocomplete behavior.",
                "type": "java.lang.String"
            },
            {
                "name": "dir",
                "description": "Direction indication for text that does not inherit directionality.",
                "type": "java.lang.String"
            },
            {
                "name": "disabled",
                "description": "Disables the input element, default is false.",
                "type": "boolean"
            },
            {
                "name": "label",
                "description": "A localized user presentable name.",
                "type": "java.lang.String"
            },
            {
                "name": "lang",
                "description": "Code describing the language used in the generated markup.",
                "type": "java.lang.String"
            },
            {
                "name": "maxlength",
                "description": "DO NOT USE! To limit the number of digits...set maximumValue, minimumValue and/or decimalPlaces accordingly.",
                "type": "int"
            },
            {
                "name": "onblur",
                "description": "Client side callback to execute when input element loses focus.",
                "type": "java.lang.String"
            },
            {
                "name": "onchange",
                "description": "Client side callback to execute when input element loses focus and its value has been modified since gaining focus.",
                "type": "java.lang.String"
            },
            {
                "name": "onclick",
                "description": "Client side callback to execute when input element is clicked.",
                "type": "java.lang.String"
            },
            {
                "name": "ondblclick",
                "description": "Client side callback to execute when input element is double clicked.",
                "type": "java.lang.String"
            },
            {
                "name": "onfocus",
                "description": "Client side callback to execute when input element receives focus.",
                "type": "java.lang.String"
            },
            {
                "name": "onkeydown",
                "description": "Client side callback to execute when a key is pressed down over input element.",
                "type": "java.lang.String"
            },
            {
                "name": "onkeypress",
                "description": "Client side callback to execute when a key is pressed and released over input element.",
                "type": "java.lang.String"
            },
            {
                "name": "onkeyup",
                "description": "Client side callback to execute when a key is released over input element.",
                "type": "java.lang.String"
            },
            {
                "name": "onmousedown",
                "description": "Client side callback to execute when a pointer input element is pressed down over input element.",
                "type": "java.lang.String"
            },
            {
                "name": "onmousemove",
                "description": "Client side callback to execute when a pointer input element is moved within input element.",
                "type": "java.lang.String"
            },
            {
                "name": "onmouseout",
                "description": "Client side callback to execute when a pointer input element is moved away from input element.",
                "type": "java.lang.String"
            },
            {
                "name": "onmouseover",
                "description": "Client side callback to execute when a pointer input element is moved onto input element.",
                "type": "java.lang.String"
            },
            {
                "name": "onmouseup",
                "description": "Client side callback to execute when a pointer input element is released over input element.",
                "type": "java.lang.String"
            },
            {
                "name": "onwheel",
                "description": "Client side callback to execute when the mouse wheel rolls up or down over an element.",
                "type": "java.lang.String"
            },
            {
                "name": "onselect",
                "description": "Client side callback to execute when text within input element is selected by user.",
                "type": "java.lang.String"
            },
            {
                "name": "oncut",
                "description": "Client side callback to execute when the user copies the content of an element.",
                "type": "java.lang.String"
            },
            {
                "name": "oncopy",
                "description": "Client side callback to execute when the user cuts the content of an element.",
                "type": "java.lang.String"
            },
            {
                "name": "onpaste",
                "description": "Client side callback to execute when the user pastes some content in an element.",
                "type": "java.lang.String"
            },
            {
                "name": "oninput",
                "description": "Client side callback to execute when an element gets user input.",
                "type": "java.lang.String"
            },
            {
                "name": "oncontextmenu",
                "description": "Client side callback to execute when a context menu is triggered.",
                "type": "java.lang.String"
            },
            {
                "name": "oninvalid",
                "description": "Client side callback to execute when an element is invalid.",
                "type": "java.lang.String"
            },
            {
                "name": "onreset",
                "description": "Client side callback to execute when the Reset button in a form is clicked.",
                "type": "java.lang.String"
            },
            {
                "name": "onsearch",
                "description": "Client side callback to execute when the user writes something in a search field.",
                "type": "java.lang.String"
            },
            {
                "name": "ondrag",
                "description": "Client side callback to execute when an element is dragged.",
                "type": "java.lang.String"
            },
            {
                "name": "ondragend",
                "description": "Client side callback to execute at the end of a drag operation.",
                "type": "java.lang.String"
            },
            {
                "name": "ondragenter",
                "description": "Client side callback to execute when an element has been dragged to a valid drop target.",
                "type": "java.lang.String"
            },
            {
                "name": "ondragleave",
                "description": "Client side callback to execute when an element leaves a valid drop target.",
                "type": "java.lang.String"
            },
            {
                "name": "ondragover",
                "description": "Client side callback to execute when an element is being dragged over a valid drop target.",
                "type": "java.lang.String"
            },
            {
                "name": "ondragstart",
                "description": "Client side callback to execute at the start of a drag operation.",
                "type": "java.lang.String"
            },
            {
                "name": "ondrop",
                "description": "Client side callback to execute when dragged element is being dropped.",
                "type": "java.lang.String"
            },
            {
                "name": "onscroll",
                "description": "Client side callback to execute when an element's scrollbar is being scrolled.",
                "type": "java.lang.String"
            },
            {
                "name": "readonly",
                "description": "Flag indicating that this component will prevent changes by the user.",
                "type": "boolean"
            },
            {
                "name": "size",
                "description": "Number of characters used to determine the width of the input element.",
                "type": "int"
            },
            {
                "name": "style",
                "description": "Inline style of the component.",
                "type": "java.lang.String"
            },
            {
                "name": "styleClass",
                "description": "Style class of the component.",
                "type": "java.lang.String"
            },
            {
                "name": "tabindex",
                "description": "Position of the element in the tabbing order.",
                "type": "java.lang.String"
            },
            {
                "name": "title",
                "description": "Advisory tooltip information.",
                "type": "java.lang.String"
            },
            {
                "name": "placeholder",
                "description": "The placeholder attribute specifies a short hint that describes the expected value of an input field.",
                "type": "java.lang.String"
            },
            {
                "name": "widgetVar",
                "description": "Name of the client side widget.",
                "type": "java.lang.String"
            },
            {
                "name": "mode",
                "description": "Display mode, valid values are'popup' and 'inline'. Default is 'popup'.",
                "type": "java.lang.String"
            },
            {
                "name": "theme",
                "description": "Available themes: default, large, polaroid, pill (horizontal).",
                "type": "java.lang.String"
            },
            {
                "name": "themeMode",
                "description": "Set the theme to light, dark, or auto mode. Default to auto to detect your OS setting.",
                "type": "java.lang.String"
            },
            {
                "name": "format",
                "description": "Set the preferred color string format: hex, rgb, hsl, auto, mixed.",
                "type": "java.lang.String"
            },
            {
                "name": "formatToggle",
                "description": "Set to true to enable format toggle buttons in the color picker dialog. This will also force the \"format\" to auto.",
                "type": "boolean"
            },
            {
                "name": "alpha",
                "description": "Enable or disable alpha support. When disabled, it will strip the alpha value from the existing color value in all formats. Default true.",
                "type": "boolean"
            },
            {
                "name": "forceAlpha",
                "description": "Set to true to always include the alpha value in the color value even if the opacity is 100%. Default false.",
                "type": "boolean"
            },
            {
                "name": "swatchesOnly",
                "description": "Set to true to hide all the color picker widgets (spectrum, hue, ...) except the swatches. Default false.",
                "type": "boolean"
            },
            {
                "name": "swatches",
                "description": "A comma separated list of the desired color swatches to display. If omitted or the array is empty, the color swatches will be disabled.",
                "type": "java.lang.String"
            },
            {
                "name": "focusInput",
                "description": "Focus the color value input when the color picker dialog is opened. Default true.",
                "type": "boolean"
            },
            {
                "name": "selectInput",
                "description": "Select and focus the color value input when the color picker dialog is opened. Default false.",
                "type": "boolean"
            },
            {
                "name": "clearButton",
                "description": "Show an optional clear button. Default false.",
                "type": "boolean"
            },
            {
                "name": "closeButton",
                "description": "Show an optional close button. Default false.",
                "type": "boolean"
            }
        ]
    },
    "p:column": {
        "name": "p:column",
        "description": "Column is an extended version of the standard column used by various PrimeFaces components like datatable, treetable and more.",
        "attributes": [
            {
                "name": "id",
                "description": "Unique identifier of the component in a namingContainer.",
                "type": "java.lang.String"
            },
            {
                "name": "rendered",
                "description": "Boolean value to specify the rendering of the component, when set to false component will not be rendered.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "binding",
                "description": "An el expression referring to a server side UIComponent instance in a backing bean.",
                "type": "javax.faces.component.UIComponent"
            },
            {
                "name": "sortBy",
                "description": "Property to be used for sorting.",
                "type": "java.lang.Object"
            },
            {
                "name": "sortOrder",
                "description": "Sets default sorting order. Possible values \"asc\", \"desc\" or null",
                "type": "java.lang.String"
            },
            {
                "name": "nullSortOrder",
                "description": "Defines where the null values are placed in ascending sort order. Default value is \"1\" meaning null values are placed at the end in ascending mode and\n                at beginning in descending mode. Set to \"-1\" for the opposite behavior.",
                "type": "java.lang.Integer"
            },
            {
                "name": "sortPriority",
                "description": "Sets default sorting priority over the other columns. Default is Integer.MAX_VALUE. Lower values have more priority.",
                "type": "java.lang.Integer"
            },
            {
                "name": "caseSensitiveSort",
                "description": "Case sensitivity for sorting, insensitive by default.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "title",
                "description": "Advisory tooltip information.",
                "type": "java.lang.String"
            },
            {
                "name": "style",
                "description": "Inline style of the column.",
                "type": "java.lang.String"
            },
            {
                "name": "styleClass",
                "description": "Style class of the column.",
                "type": "java.lang.String"
            },
            {
                "name": "sortFunction",
                "description": "Custom pluggable sortFunction.",
                "type": "javax.el.MethodExpression"
            },
            {
                "name": "filterBy",
                "description": "Property to be used for filtering.",
                "type": "java.lang.Object"
            },
            {
                "name": "filterStyle",
                "description": "Inline style of the filter element.",
                "type": "java.lang.String"
            },
            {
                "name": "filterStyleClass",
                "description": "Style class of the filter element.",
                "type": "java.lang.String"
            },
            {
                "name": "filterMatchMode",
                "description": "Match mode for filtering.",
                "type": "java.lang.String"
            },
            {
                "name": "filterPosition",
                "description": "Location of the column filter with respect to header content. Options are 'bottom'(default) and 'top'.",
                "type": "java.lang.String"
            },
            {
                "name": "filterPlaceholder",
                "description": "Placeholder for plain input text style filters.",
                "type": "java.lang.String"
            },
            {
                "name": "rowspan",
                "description": "Defines the number of rows the column spans.",
                "type": "java.lang.Integer"
            },
            {
                "name": "colspan",
                "description": "Defines the number of columns the column spans.",
                "type": "java.lang.Integer"
            },
            {
                "name": "headerText",
                "description": "Shortcut for header facet.",
                "type": "java.lang.String"
            },
            {
                "name": "footerText",
                "description": "Shortcut for footer facet.",
                "type": "java.lang.String"
            },
            {
                "name": "selectionBox",
                "description": "Indicates whether or not the column should contain a radiobutton or checkbox for selection",
                "type": "java.lang.Boolean"
            },
            {
                "name": "filterMaxLength",
                "description": "Maximum number of characters for an input filter.",
                "type": "java.lang.Integer"
            },
            {
                "name": "resizable",
                "description": "Specifies resizable feature at column level. Datatable's resizableColumns must be enabled to use this option.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "exportable",
                "description": "Defines if the column should be exported by dataexporter.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "filterValue",
                "description": "Value of the filter field.",
                "type": "java.lang.Object"
            },
            {
                "name": "width",
                "description": "Width of the column in pixels or percentage.",
                "type": "java.lang.String"
            },
            {
                "name": "toggleable",
                "description": "Defines if column is toggleable by columnToggler component. Default value is true and a false value marks the column as static.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "draggable",
                "description": "Defines if column is draggable if draggableColumns is set. Default true.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "filterFunction",
                "description": "Custom implementation to filter a value against a constraint.",
                "type": "javax.el.MethodExpression"
            },
            {
                "name": "field",
                "description": "Name of the field associated to bean \"var\".",
                "type": "java.lang.String"
            },
            {
                "name": "responsivePriority",
                "description": "Responsive priority of the column, lower values have more priority.",
                "type": "java.lang.Integer"
            },
            {
                "name": "sortable",
                "description": "Boolean value to mark column as sortable.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "filterable",
                "description": "Boolean value to mark column as filterable.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "visible",
                "description": "Controls the visibility of the column, default is true.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "selectRow",
                "description": "Whether clicking the column selects the row when datatable has row selection enabled, default is true.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "ariaHeaderText",
                "description": "Accessible label for screen readers. IMPORTANT: Overrides headerText and headerFacet if specified. Only necessary when the column header is not human readable (e.g. empty header or icon-only header).",
                "type": "java.lang.String"
            },
            {
                "name": "exportFunction",
                "description": "Custom pluggable exportFunction.",
                "type": "javax.el.MethodExpression"
            },
            {
                "name": "groupRow",
                "description": "Speficies whether to group rows based on the column data.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "exportValue",
                "description": "Defines the value of the cell to be exported if something other than the cell contents or exportFunction.",
                "type": "java.lang.String"
            },
            {
                "name": "exportRowspan",
                "description": "Defines the number of rows the column spans to be exported.",
                "type": "java.lang.Integer"
            },
            {
                "name": "exportColspan",
                "description": "Defines the number of columns the column spans to be exported.",
                "type": "java.lang.Integer"
            },
            {
                "name": "exportHeaderValue",
                "description": "Defines if the header value of column to be exported.",
                "type": "java.lang.String"
            },
            {
                "name": "exportFooterValue",
                "description": "Defines if the footer value of column to be exported.",
                "type": "java.lang.String"
            },
            {
                "name": "exportTag",
                "description": "If XML data exporter in use, this allows customization of the column tag in the XML.",
                "type": "java.lang.String"
            },
            {
                "name": "displayPriority",
                "description": "Defines the display priority, in which order the columns should be displayed.",
                "type": "java.lang.Integer"
            },
            {
                "name": "converter",
                "description": "An EL expression or a literal text that defines a converter for the component. When it's an EL expression, it's resolved to a converter instance.\n    In case it's a static text, it must refer to a converter id.",
                "type": "java.lang.Object"
            }
        ]
    },
    "p:columnGroup": {
        "name": "p:columnGroup",
        "description": "ColumnGroup is used by datatable for grouping.",
        "attributes": [
            {
                "name": "id",
                "description": "Unique identifier of the component in a namingContainer.",
                "type": "java.lang.String"
            },
            {
                "name": "rendered",
                "description": "Boolean value to specify the rendering of the component, when set to false component will not be rendered.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "binding",
                "description": "An el expression referring to a server side UIComponent instance in a backing bean.",
                "type": "javax.faces.component.UIComponent"
            },
            {
                "name": "type",
                "description": "Type of group, valid values are header and footer.",
                "type": "java.lang.String"
            }
        ]
    },
    "p:columns": {
        "name": "p:columns",
        "description": "Columns is used by datatable to create columns dynamically.",
        "attributes": [
            {
                "name": "id",
                "description": "Unique identifier of the component in a namingContainer.",
                "type": "java.lang.String"
            },
            {
                "name": "rendered",
                "description": "Boolean value to specify the rendering of the component, when set to false component will not be rendered.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "binding",
                "description": "An el expression referring to a server side UIComponent instance in a backing bean.",
                "type": "javax.faces.component.UIComponent"
            },
            {
                "name": "value",
                "description": "",
                "type": "java.lang.Object"
            },
            {
                "name": "var",
                "description": "Name of the iterator variable that references each element in the data set.",
                "type": "String"
            },
            {
                "name": "sortBy",
                "description": "Property to be used for sorting.",
                "type": "java.lang.Object"
            },
            {
                "name": "title",
                "description": "Advisory tooltip information.",
                "type": "java.lang.String"
            },
            {
                "name": "style",
                "description": "Inline style of the column.",
                "type": "java.lang.String"
            },
            {
                "name": "styleClass",
                "description": "Style class of the column.",
                "type": "java.lang.String"
            },
            {
                "name": "sortOrder",
                "description": "Sets default sorting order. Possible values \"asc\", \"desc\" or null",
                "type": "java.lang.String"
            },
            {
                "name": "sortPriority",
                "description": "Sets default sorting priority over the other columns. Default is Integer.MAX_VALUE. Lower values have more priority.",
                "type": "java.lang.Integer"
            },
            {
                "name": "sortFunction",
                "description": "Custom pluggable sortFunction.",
                "type": "javax.el.MethodExpression"
            },
            {
                "name": "nullSortOrder",
                "description": "Defines where the null values are placed in ascending sort order. Default value is \"1\" meaning null values are placed at the end in ascending mode and\n                at beginning in descending mode. Set to \"-1\" for the opposite behavior.",
                "type": "java.lang.Integer"
            },
            {
                "name": "caseSensitiveSort",
                "description": "Case sensitivity for sorting, insensitive by default.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "filterBy",
                "description": "Property to be used for filtering.",
                "type": "java.lang.Object"
            },
            {
                "name": "filterStyle",
                "description": "Inline style of the filter element.",
                "type": "java.lang.String"
            },
            {
                "name": "filterStyleClass",
                "description": "Style class of the filter element.",
                "type": "java.lang.String"
            },
            {
                "name": "filterMatchMode",
                "description": "Match mode for filtering.",
                "type": "java.lang.String"
            },
            {
                "name": "filterPosition",
                "description": "Location of the column filter with respect to header content. Options are 'bottom'(default) and 'top'.",
                "type": "java.lang.String"
            },
            {
                "name": "filterPlaceholder",
                "description": "Placeholder for plain input text style filters.",
                "type": "java.lang.String"
            },
            {
                "name": "filterValue",
                "description": "Value of the filter field.",
                "type": "java.lang.Object"
            },
            {
                "name": "rowspan",
                "description": "Defines the number of rows the column spans.",
                "type": "java.lang.Integer"
            },
            {
                "name": "colspan",
                "description": "Defines the number of columns the column spans.",
                "type": "java.lang.Integer"
            },
            {
                "name": "headerText",
                "description": "Shortcut for header facet.",
                "type": "java.lang.String"
            },
            {
                "name": "footerText",
                "description": "Shortcut for footer facet.",
                "type": "java.lang.String"
            },
            {
                "name": "filterMaxLength",
                "description": "Maximum number of characters for an input filter.",
                "type": "java.lang.Integer"
            },
            {
                "name": "resizable",
                "description": "Specifies resizable feature at column level. Datatable's resizableColumns must be enabled to use this option.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "exportable",
                "description": "Defines if the column should be exported by dataexporter.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "columnIndexVar",
                "description": "Name of iterator to refer each row index.",
                "type": "java.lang.String"
            },
            {
                "name": "width",
                "description": "Width of the column in pixels or percentage.",
                "type": "java.lang.String"
            },
            {
                "name": "toggleable",
                "description": "Defines if columns are toggleable by columnToggler component. Default value is true and a false value marks the column as static.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "draggable",
                "description": "Defines if columns are draggable if draggableColumns is set. Default true.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "filterFunction",
                "description": "Custom implementation to filter a value against a constraint.",
                "type": "javax.el.MethodExpression"
            },
            {
                "name": "field",
                "description": "Name of the field to pass lazy load method for filtering and sorting. If not specified, filterBy-sortBy values are used to identify the field name.",
                "type": "java.lang.String"
            },
            {
                "name": "responsivePriority",
                "description": "Responsive priority of the column, lower values have more priority.",
                "type": "java.lang.Integer"
            },
            {
                "name": "sortable",
                "description": "Boolean value to mark column as sortable.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "filterable",
                "description": "Boolean value to mark column as filterable.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "visible",
                "description": "Controls the visibility of the column, default is true.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "selectRow",
                "description": "Whether clicking the column selects the row when datatable has row selection enabled, default is true.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "ariaHeaderText",
                "description": "Accessible label for screen readers. IMPORTANT: Overrides headerText and headerFacet if specified. Only necessary when the column header is not human readable (e.g. empty header or icon-only header).",
                "type": "java.lang.String"
            },
            {
                "name": "exportFunction",
                "description": "Custom pluggable exportFunction.",
                "type": "javax.el.MethodExpression"
            },
            {
                "name": "groupRow",
                "description": "Speficies whether to group rows based on the column data.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "exportValue",
                "description": "Defines the value of the cell to be exported if something other than the cell contents or exportFunction.",
                "type": "java.lang.String"
            },
            {
                "name": "exportRowspan",
                "description": "Defines the number of rows the column spans to be exported.",
                "type": "java.lang.Integer"
            },
            {
                "name": "exportColspan",
                "description": "Defines the number of columns the column spans to be exported.",
                "type": "java.lang.Integer"
            },
            {
                "name": "exportHeaderValue",
                "description": "Defines if the header value of column to be exported.",
                "type": "java.lang.String"
            },
            {
                "name": "exportFooterValue",
                "description": "Defines if the footer value of column to be exported.",
                "type": "java.lang.String"
            },
            {
                "name": "exportTag",
                "description": "If XML data exporter in use, this allows customization of the column tag in the XML.",
                "type": "java.lang.String"
            },
            {
                "name": "displayPriority",
                "description": "Defines the display priority, in which order the columns should be displayed.",
                "type": "java.lang.Integer"
            },
            {
                "name": "converter",
                "description": "An EL expression or a literal text that defines a converter for the component. When it's an EL expression, it's resolved to a converter instance.\n    In case it's a static text, it must refer to a converter id.",
                "type": "java.lang.Object"
            }
        ]
    },
    "p:columnToggler": {
        "name": "p:columnToggler",
        "description": "ColumnToggler is a helper component for datatable to toggle visibility of columns.",
        "attributes": [
            {
                "name": "id",
                "description": "Unique identifier of the component in a namingContainer.",
                "type": "java.lang.String"
            },
            {
                "name": "rendered",
                "description": "Boolean value to specify the rendering of the component, when set to false component will not be rendered.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "binding",
                "description": "An el expression referring to a server side UIComponent instance in a backing bean.",
                "type": "javax.faces.component.UIComponent"
            },
            {
                "name": "widgetVar",
                "description": "Name of the client side widget.",
                "type": "java.lang.String"
            },
            {
                "name": "trigger",
                "description": "A search expression resolving to a component to get attached to.",
                "type": "java.lang.String"
            },
            {
                "name": "datasource",
                "description": "A search expression resolving to a DataTable component whose columns to be toggled.",
                "type": "java.lang.String"
            }
        ]
    },
    "p:commandButton": {
        "name": "p:commandButton",
        "description": "CommandButton is an extended version of standard Faces commandButton with ajax and skinning features.",
        "attributes": [
            {
                "name": "id",
                "description": "Unique identifier of the component in a namingContainer.",
                "type": "java.lang.String"
            },
            {
                "name": "rendered",
                "description": "Boolean value to specify the rendering of the component, when set to false component will not be rendered.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "binding",
                "description": "An el expression referring to a server side UIComponent instance in a backing bean.",
                "type": "javax.faces.component.UIComponent"
            },
            {
                "name": "value",
                "description": "Label of the component.",
                "type": "java.lang.Object"
            },
            {
                "name": "actionListener",
                "description": "An actionlistener to process when command is executed.",
                "type": "javax.faces.event.ActionListener"
            },
            {
                "name": "action",
                "description": "A method expression or a string outcome to process when command is executed.",
                "type": "javax.el.MethodExpression"
            },
            {
                "name": "immediate",
                "description": "Boolean value that determines the phaseId of the action event,\n    when true actions are processed at \"Apply Request Values\", when false at \"Invoke Application\" phase.",
                "type": "boolean"
            },
            {
                "name": "widgetVar",
                "description": "Name of the client side widget.",
                "type": "java.lang.String"
            },
            {
                "name": "ajax",
                "description": "Specifies the submit mode, when set to true (default), submit would be made with Ajax.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "async",
                "description": "When set to true, ajax requests are not queued.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "process",
                "description": "Component(s) to process partially instead of whole view.",
                "type": "java.lang.String"
            },
            {
                "name": "update",
                "description": "Component(s) to be updated with ajax.",
                "type": "java.lang.String"
            },
            {
                "name": "onstart",
                "description": "Client side callback to execute before ajax request begins.",
                "type": "java.lang.String"
            },
            {
                "name": "oncomplete",
                "description": "Client side callback to execute when ajax request is completed.",
                "type": "java.lang.String"
            },
            {
                "name": "onerror",
                "description": "Client side callback to execute when ajax request fails.",
                "type": "java.lang.String"
            },
            {
                "name": "onsuccess",
                "description": "Client side callback to execute when ajax request succeeds.",
                "type": "java.lang.String"
            },
            {
                "name": "global",
                "description": "Defines whether to trigger ajaxStatus or not.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "delay",
                "description": "If less than delay milliseconds elapses between calls to request() only the most recent one is sent and all other requests are discarded. The default value of this option is null. If the value of delay is the literal string 'none' without the quotes or the default, no delay is used.",
                "type": "java.lang.String"
            },
            {
                "name": "timeout",
                "description": "Defines the timeout for the ajax request.",
                "type": "java.lang.Integer"
            },
            {
                "name": "partialSubmit",
                "description": "When enabled, only values related to partially processed components would be serialized for ajax\n                instead of whole form.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "resetValues",
                "description": "If true, indicate that this particular Ajax transaction is a value reset transaction. This will cause resetValue() to be called on any EditableValueHolder instances encountered as a result of this ajax transaction. If not specified, or the value is false, no such indication is made.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "ignoreAutoUpdate",
                "description": "If true, components which use p:autoUpdate will not be updated for this request. If not specified, or the value is false, no such indication is made.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "accesskey",
                "description": "Access key that when pressed transfers focus to the button.",
                "type": "java.lang.String"
            },
            {
                "name": "alt",
                "description": "Alternate textual description of the button.",
                "type": "java.lang.String"
            },
            {
                "name": "dir",
                "description": "Direction indication for text that does not inherit directionality. Valid values are LTR and RTL.",
                "type": "java.lang.String"
            },
            {
                "name": "disabled",
                "description": "Disables the button.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "label",
                "description": "A localized user presentable name.",
                "type": "java.lang.String"
            },
            {
                "name": "lang",
                "description": "Code describing the language used in the generated markup.",
                "type": "java.lang.String"
            },
            {
                "name": "tabindex",
                "description": "Position of the button element in the tabbing order.",
                "type": "java.lang.String"
            },
            {
                "name": "title",
                "description": "Advisory tooltip information.",
                "type": "java.lang.String"
            },
            {
                "name": "type",
                "description": "Sets the behavior of the button. Default is submit.",
                "type": "java.lang.String"
            },
            {
                "name": "style",
                "description": "Inline style of the button element.",
                "type": "java.lang.String"
            },
            {
                "name": "styleClass",
                "description": "Style class of the button element.",
                "type": "java.lang.String"
            },
            {
                "name": "onblur",
                "description": "Client side callback to execute when button loses focus.",
                "type": "java.lang.String"
            },
            {
                "name": "onchange",
                "description": "Client side callback to execute when button loses focus and its value has been modified since gaining focus.",
                "type": "java.lang.String"
            },
            {
                "name": "onclick",
                "description": "Client side callback to execute when button is clicked.",
                "type": "java.lang.String"
            },
            {
                "name": "ondblclick",
                "description": "Client side callback to execute when button is double clicked.",
                "type": "java.lang.String"
            },
            {
                "name": "onfocus",
                "description": "Client side callback to execute when button receives focus.",
                "type": "java.lang.String"
            },
            {
                "name": "onkeydown",
                "description": "Client side callback to execute when a key is pressed down over button.",
                "type": "java.lang.String"
            },
            {
                "name": "onkeypress",
                "description": "Client side callback to execute when a key is pressed and released over button.",
                "type": "java.lang.String"
            },
            {
                "name": "onkeyup",
                "description": "Client side callback to execute when a key is released over button.",
                "type": "java.lang.String"
            },
            {
                "name": "onmousedown",
                "description": "Client side callback to execute when a pointer button is pressed down over button.",
                "type": "java.lang.String"
            },
            {
                "name": "onmousemove",
                "description": "Client side callback to execute when a pointer button is moved within button.",
                "type": "java.lang.String"
            },
            {
                "name": "onmouseout",
                "description": "Client side callback to execute when a pointer button is moved away from button.",
                "type": "java.lang.String"
            },
            {
                "name": "onmouseover",
                "description": "Client side callback to execute when a pointer button is moved onto button.",
                "type": "java.lang.String"
            },
            {
                "name": "onmouseup",
                "description": "Client side callback to execute when a pointer button is released over button.",
                "type": "java.lang.String"
            },
            {
                "name": "onselect",
                "description": "Client side callback to execute when text within button is selected by user.",
                "type": "java.lang.String"
            },
            {
                "name": "icon",
                "description": "Icon of the button.",
                "type": "java.lang.String"
            },
            {
                "name": "iconPos",
                "description": "Position of the icon, default value is left.",
                "type": "java.lang.String"
            },
            {
                "name": "inline",
                "description": "Displays button inline instead of fitting the content width, only used by mobile.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "escape",
                "description": "Defines if label of the component is escaped or not.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "validateClient",
                "description": "When set to true client side validation is enabled, global setting is required to be enabled as a prerequisite.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "enabledByValidateClient",
                "description": "When set to true this button is only enabled after successful client side validation. Used together with p:clientValidator on all relevant input-components.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "partialSubmitFilter",
                "description": "Selector to use when partial submit is on, default is \":input\" to select all descendant inputs of a partially processed components.",
                "type": "java.lang.String"
            },
            {
                "name": "form",
                "description": "Form to serialize for an ajax request. Default is the enclosing form.",
                "type": "java.lang.String"
            },
            {
                "name": "renderDisabledClick",
                "description": "When enabled, click event can be added to disabled button",
                "type": "java.lang.Boolean"
            },
            {
                "name": "ariaLabel",
                "description": "The aria-label attribute is used to define a string that labels the current element for accessibility.",
                "type": "java.lang.String"
            },
            {
                "name": "ignoreComponentNotFound",
                "description": "If true, unresolvable components referenced in the update/process attribute are ignored. Default is 'false' and therefore a ComponentNotFoundException will be thrown.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "disableOnAjax",
                "description": "If true, the button will be disabled during Ajax requests triggered by the button. Default is 'true'.",
                "type": "java.lang.Boolean"
            }
        ]
    },
    "p:commandLink": {
        "name": "p:commandLink",
        "description": "CommandLink extends standard Faces commandLink with extra PrimeFaces capabilities.",
        "attributes": [
            {
                "name": "id",
                "description": "Unique identifier of the component in a namingContainer.",
                "type": "java.lang.String"
            },
            {
                "name": "rendered",
                "description": "Boolean value to specify the rendering of the component, when set to false component will not be rendered.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "binding",
                "description": "An el expression referring to a server side UIComponent instance in a backing bean.",
                "type": "javax.faces.component.UIComponent"
            },
            {
                "name": "value",
                "description": "Label of the component.",
                "type": "java.lang.Object"
            },
            {
                "name": "actionListener",
                "description": "An actionlistener to process when command is executed.",
                "type": "javax.faces.event.ActionListener"
            },
            {
                "name": "action",
                "description": "A method expression or a string outcome to process when command is executed.",
                "type": "javax.el.MethodExpression"
            },
            {
                "name": "immediate",
                "description": "Boolean value that determines the phaseId of the action event,\n    when true actions are processed at \"Apply Request Values\", when false at \"Invoke Application\" phase.",
                "type": "boolean"
            },
            {
                "name": "widgetVar",
                "description": "Name of the client side widget.",
                "type": "java.lang.String"
            },
            {
                "name": "ajax",
                "description": "Specifies the submit mode, when set to true (default), submit would be made with Ajax.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "async",
                "description": "When set to true, ajax requests are not queued.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "process",
                "description": "Component(s) to process partially instead of whole view.",
                "type": "java.lang.String"
            },
            {
                "name": "update",
                "description": "Component(s) to be updated with ajax.",
                "type": "java.lang.String"
            },
            {
                "name": "onstart",
                "description": "Client side callback to execute before ajax request begins.",
                "type": "java.lang.String"
            },
            {
                "name": "oncomplete",
                "description": "Client side callback to execute when ajax request is completed.",
                "type": "java.lang.String"
            },
            {
                "name": "onerror",
                "description": "Client side callback to execute when ajax request fails.",
                "type": "java.lang.String"
            },
            {
                "name": "onsuccess",
                "description": "Client side callback to execute when ajax request succeeds.",
                "type": "java.lang.String"
            },
            {
                "name": "global",
                "description": "Defines whether to trigger ajaxStatus or not.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "delay",
                "description": "If less than delay milliseconds elapses between calls to request() only the most recent one is sent and all other requests are discarded. The default value of this option is null. If the value of delay is the literal string 'none' without the quotes or the default, no delay is used.",
                "type": "java.lang.String"
            },
            {
                "name": "timeout",
                "description": "Defines the timeout for the ajax request.",
                "type": "java.lang.Integer"
            },
            {
                "name": "partialSubmit",
                "description": "When enabled, only values related to partially processed components would be serialized for ajax\n                instead of whole form.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "resetValues",
                "description": "If true, indicate that this particular Ajax transaction is a value reset transaction. This will cause resetValue() to be called on any EditableValueHolder instances encountered as a result of this ajax transaction. If not specified, or the value is false, no such indication is made.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "ignoreAutoUpdate",
                "description": "If true, components which use p:autoUpdate will not be updated for this request. If not specified, or the value is false, no such indication is made.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "accesskey",
                "description": "Access key that when pressed transfers focus to the link.",
                "type": "java.lang.String"
            },
            {
                "name": "charset",
                "description": "Character encoding of the resource designated by this hyperlink.",
                "type": "java.lang.String"
            },
            {
                "name": "coords",
                "description": "Position and shape of the hot spot on the screen for client use in image maps.",
                "type": "java.lang.String"
            },
            {
                "name": "dir",
                "description": "Direction indication for text that does not inherit directionality. Valid values are LTR and RTL.",
                "type": "java.lang.String"
            },
            {
                "name": "disabled",
                "description": "Disables the link.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "hreflang",
                "description": "Language code of the resource designated by the link.",
                "type": "java.lang.String"
            },
            {
                "name": "rel",
                "description": "Relationship from the current document to the anchor specified by the link, values are provided by a space-separated list of link types.",
                "type": "java.lang.String"
            },
            {
                "name": "rev",
                "description": "A reverse link from the anchor specified by this link to the current document, values are provided by a space-separated list of link types.",
                "type": "java.lang.String"
            },
            {
                "name": "shape",
                "description": "Shape of hot spot on the screen, valid values are default, rect, circle and poly.",
                "type": "java.lang.String"
            },
            {
                "name": "tabindex",
                "description": "Position of the button element in the tabbing order.",
                "type": "java.lang.String"
            },
            {
                "name": "target",
                "description": "Name of a frame where the resource targeted by this link will be displayed.",
                "type": "java.lang.String"
            },
            {
                "name": "title",
                "description": "Advisory tooltip information.",
                "type": "java.lang.String"
            },
            {
                "name": "type",
                "description": "Type of resource referenced by the link.",
                "type": "java.lang.String"
            },
            {
                "name": "style",
                "description": "Style to be applied on the anchor element.",
                "type": "java.lang.String"
            },
            {
                "name": "styleClass",
                "description": "StyleClass to be applied on the anchor element",
                "type": "java.lang.String"
            },
            {
                "name": "onblur",
                "description": "Client side callback to execute when link loses focus.",
                "type": "java.lang.String"
            },
            {
                "name": "onclick",
                "description": "Client side callback to execute when link is clicked.",
                "type": "java.lang.String"
            },
            {
                "name": "ondblclick",
                "description": "Client side callback to execute when link is double clicked.",
                "type": "java.lang.String"
            },
            {
                "name": "onfocus",
                "description": "Client side callback to execute when link receives focus.",
                "type": "java.lang.String"
            },
            {
                "name": "onkeydown",
                "description": "Client side callback to execute when a key is pressed down over link.",
                "type": "java.lang.String"
            },
            {
                "name": "onkeypress",
                "description": "Client side callback to execute when a key is pressed and released over link.",
                "type": "java.lang.String"
            },
            {
                "name": "onkeyup",
                "description": "Client side callback to execute when a key is released over link.",
                "type": "java.lang.String"
            },
            {
                "name": "onmousedown",
                "description": "Client side callback to execute when a pointer button is pressed down over link.",
                "type": "java.lang.String"
            },
            {
                "name": "onmousemove",
                "description": "Client side callback to execute when a pointer button is moved within link.",
                "type": "java.lang.String"
            },
            {
                "name": "onmouseout",
                "description": "Client side callback to execute when a pointer button is moved away from link.",
                "type": "java.lang.String"
            },
            {
                "name": "onmouseover",
                "description": "Client side callback to execute when a pointer button is moved onto link.",
                "type": "java.lang.String"
            },
            {
                "name": "onmouseup",
                "description": "Client side callback to execute when a pointer button is released over link.",
                "type": "java.lang.String"
            },
            {
                "name": "validateClient",
                "description": "When set to true client side validation is enabled, global setting is required to be enabled as a prerequisite.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "partialSubmitFilter",
                "description": "Selector to use when partial submit is on, default is \":input\" to select all descendant inputs of a partially processed components.",
                "type": "java.lang.String"
            },
            {
                "name": "form",
                "description": "Form to serialize for an ajax request. Default is the enclosing form.",
                "type": "java.lang.String"
            },
            {
                "name": "ariaLabel",
                "description": "The aria-label attribute is used to define a string that labels the current element for accessibility.",
                "type": "java.lang.String"
            },
            {
                "name": "ignoreComponentNotFound",
                "description": "If true, unresolvable components referenced in the update/process attribute are ignored. Default is 'false' and therefore a ComponentNotFoundException will be thrown.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "disableOnAjax",
                "description": "If true, the link will be disabled during Ajax requests triggered by the link. Default is 'true'.",
                "type": "java.lang.Boolean"
            }
        ]
    },
    "p:confirmDialog": {
        "name": "p:confirmDialog",
        "description": "ConfirmDialog is a replacement to the legacy javascript confirmation box.\n        Skinning, customization and avoiding popup blockers are notabled advantages over classic javascript confirmation.",
        "attributes": [
            {
                "name": "id",
                "description": "Unique identifier of the component in a namingContainer.",
                "type": "java.lang.String"
            },
            {
                "name": "rendered",
                "description": "Boolean value to specify the rendering of the component, when set to false component will not be rendered.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "binding",
                "description": "An el expression referring to a server side UIComponent instance in a backing bean.",
                "type": "javax.faces.component.UIComponent"
            },
            {
                "name": "widgetVar",
                "description": "Name of the client side widget.",
                "type": "java.lang.String"
            },
            {
                "name": "message",
                "description": "Text to be displayed in body. Required.",
                "type": "java.lang.String"
            },
            {
                "name": "header",
                "description": "Text for the header.",
                "type": "java.lang.String"
            },
            {
                "name": "severity",
                "description": "Message severity for the dislayed icon. Default is alert.",
                "type": "java.lang.String"
            },
            {
                "name": "width",
                "description": "Width of the dialog in pixels. Default is auto.",
                "type": "java.lang.String"
            },
            {
                "name": "height",
                "description": "Height of the dialog.",
                "type": "java.lang.String"
            },
            {
                "name": "style",
                "description": "Inner style of the dialog container.",
                "type": "java.lang.String"
            },
            {
                "name": "styleClass",
                "description": "Style class of the dialog container.",
                "type": "java.lang.String"
            },
            {
                "name": "closable",
                "description": "Defines if close icon should be displayed or not. Default is true.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "appendTo",
                "description": "Appends the dialog to the given search expression.",
                "type": "java.lang.String"
            },
            {
                "name": "visible",
                "description": "Sets dialogs visibility. Default is false.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "showEffect",
                "description": "Effect to use when showing the dialog.",
                "type": "java.lang.String"
            },
            {
                "name": "hideEffect",
                "description": "Effect to use when hiding the dialog.",
                "type": "java.lang.String"
            },
            {
                "name": "closeOnEscape",
                "description": "Defines if dialog should close when escape key is pressed. Default is false.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "dir",
                "description": "Defines text direction, valid values are \"ltr\" (default) and \"rtl\".",
                "type": "java.lang.String"
            },
            {
                "name": "global",
                "description": "When enabled, confirmDialog becomes a shared for other components that require confirmation.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "responsive",
                "description": "In responsive mode the dialog adjusts itself based on screen width, browser resizing, and scrolling of the document.",
                "type": "java.lang.Boolean"
            }
        ]
    },
    "p:contextMenu": {
        "name": "p:contextMenu",
        "description": "ContextMenu provides an overlay menu displayed on mouse right-click event.",
        "attributes": [
            {
                "name": "id",
                "description": "Unique identifier of the component in a namingContainer.",
                "type": "java.lang.String"
            },
            {
                "name": "rendered",
                "description": "Boolean value to specify the rendering of the component, when set to false component will not be rendered.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "binding",
                "description": "An el expression referring to a server side UIComponent instance in a backing bean.",
                "type": "javax.faces.component.UIComponent"
            },
            {
                "name": "widgetVar",
                "description": "Name of the client side widget.",
                "type": "java.lang.String"
            },
            {
                "name": "for",
                "description": "Id of the component to attach to.",
                "type": "java.lang.String"
            },
            {
                "name": "style",
                "description": "Style of the main container element.",
                "type": "java.lang.String"
            },
            {
                "name": "styleClass",
                "description": "Style class of the main container element.",
                "type": "java.lang.String"
            },
            {
                "name": "model",
                "description": "Menu model instance to create menu programmatically.",
                "type": "org.primefaces.model.menu.MenuModel"
            },
            {
                "name": "disabled",
                "description": "If true, prevents menu from being shown.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "nodeType",
                "description": "Type of tree nodes to get attached.",
                "type": "java.lang.String"
            },
            {
                "name": "event",
                "description": "Event to bind the contextmenu default is right click.",
                "type": "java.lang.String"
            },
            {
                "name": "beforeShow",
                "description": "Client side callback to execute before context menu is shown.",
                "type": "java.lang.String"
            },
            {
                "name": "selectionMode",
                "description": "Defines the selection behavior. Valid values are \"single\" and \"multiple\" (default).",
                "type": "java.lang.String"
            },
            {
                "name": "targetFilter",
                "description": "Selector to filter the elements to attach the menu. Default is null.",
                "type": "java.lang.String"
            },
            {
                "name": "touchable",
                "description": "Enable touch support if browser detection supports it. Default is false because it is globally enabled by default.",
                "type": "java.lang.Boolean"
            }
        ]
    },
    "p:dashboard": {
        "name": "p:dashboard",
        "description": "Dashboard provides a portal like layout with drag-drop based reorder capabilities.",
        "attributes": [
            {
                "name": "id",
                "description": "Unique identifier of the component in a namingContainer.",
                "type": "java.lang.String"
            },
            {
                "name": "rendered",
                "description": "Boolean value to specify the rendering of the component, when set to false component will not be rendered.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "binding",
                "description": "An el expression referring to a server side UIComponent instance in a backing bean.",
                "type": "javax.faces.component.UIComponent"
            },
            {
                "name": "widgetVar",
                "description": "Name of the client side widget.",
                "type": "java.lang.String"
            },
            {
                "name": "model",
                "description": "Dashboard model instance representing the layout of the UI.",
                "type": "org.primefaces.model.DashboardModel"
            },
            {
                "name": "disabled",
                "description": "Disables the component.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "reordering",
                "description": "Allow reordering of panels. Default is true.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "style",
                "description": "Inline style of the dashboard container.",
                "type": "java.lang.String"
            },
            {
                "name": "styleClass",
                "description": "Style class of the dashboard container.",
                "type": "java.lang.String"
            },
            {
                "name": "responsive",
                "description": "In responsive mode, PrimeFlex can be used to dynamically size columns and responsiveness. Default is false.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "var",
                "description": "Name of collection iterator which will be the value of DashboardWidget.getValue().",
                "type": "String"
            },
            {
                "name": "scope",
                "description": "Scope for dashboard drag and drop behaviour. Items can be dragged between multiple dashboards with the same scope. (default: dashboard)",
                "type": "String"
            }
        ]
    },
    "p:dataGrid": {
        "name": "p:dataGrid",
        "description": "DataGrid displays a collection of data in grid layout. AJAX Pagination is a built-in feature and paginator UI is fully customizable via various options like paginatorTemplate, rowPerPageOptions, pageLinks and more.",
        "attributes": [
            {
                "name": "id",
                "description": "Unique identifier of the component in a namingContainer.",
                "type": "java.lang.String"
            },
            {
                "name": "rendered",
                "description": "Boolean value to specify the rendering of the component, when set to false component will not be rendered.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "binding",
                "description": "An el expression referring to a server side UIComponent instance in a backing bean.",
                "type": "javax.faces.component.UIComponent"
            },
            {
                "name": "value",
                "description": "Datasource of the component.",
                "type": "java.lang.Object"
            },
            {
                "name": "var",
                "description": "Name of the iterator variable that references each element in the data set.",
                "type": "String"
            },
            {
                "name": "rows",
                "description": "Number of rows to display per page. Default value is 0 meaning to display all data available.",
                "type": "java.lang.Integer"
            },
            {
                "name": "first",
                "description": "Index of the first data to display.",
                "type": "java.lang.Integer"
            },
            {
                "name": "widgetVar",
                "description": "Name of the client side widget.",
                "type": "java.lang.String"
            },
            {
                "name": "columns",
                "description": "Number of columns of grid. Default is 3.",
                "type": "java.lang.Integer"
            },
            {
                "name": "paginator",
                "description": "Enables pagination.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "paginatorTemplate",
                "description": "Template of the paginator.",
                "type": "java.lang.String"
            },
            {
                "name": "rowsPerPageTemplate",
                "description": "Template of the rowsPerPage dropdown.",
                "type": "java.lang.String"
            },
            {
                "name": "currentPageReportTemplate",
                "description": "Template of the currentPageReport UI.",
                "type": "java.lang.String"
            },
            {
                "name": "pageLinks",
                "description": "Maximum number of page links to display. Default is 10.",
                "type": "java.lang.Integer"
            },
            {
                "name": "paginatorPosition",
                "description": "Paginator can be positioned at the \"top,\" \"bottom,\" or \"both.\" Default setting is \"both.\"",
                "type": "java.lang.String"
            },
            {
                "name": "paginatorAlwaysVisible",
                "description": "Defines if paginator should be hidden if total data count is less than number of rows per page. Default is true.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "style",
                "description": "Inline style of the main container.",
                "type": "java.lang.String"
            },
            {
                "name": "styleClass",
                "description": "Style class of the main container.",
                "type": "java.lang.String"
            },
            {
                "name": "rowIndexVar",
                "description": "Name of iterator to refer each row index.",
                "type": "java.lang.String"
            },
            {
                "name": "emptyMessage",
                "description": "Text to display when there is no data to display. Default is \"No records found.\"",
                "type": "java.lang.String"
            },
            {
                "name": "lazy",
                "description": "Defines if lazy loading is enabled for the data component.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "rowStatePreserved",
                "description": "Keeps state of its children on a per-row basis. Default is false.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "multiViewState",
                "description": "Whether to keep DataGrid state across views, defaults to false.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "touchable",
                "description": "Enable touch support if browser detection supports it. Default is false because it is globally enabled by default.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "rowStyle",
                "description": "Inline style of each row (grid-cell).",
                "type": "java.lang.String"
            },
            {
                "name": "rowStyleClass",
                "description": "Style class of each row (grid-cell).",
                "type": "java.lang.String"
            },
            {
                "name": "flex",
                "description": "Use modern PrimeFlex-Grid instead of classic Grid CSS.",
                "type": "java.lang.Boolean"
            }
        ]
    },
    "p:dataList": {
        "name": "p:dataList",
        "description": "DataList presents a collection of data in list layout with several display types.\n        AJAX Pagination is a built-in feature and paginator UI is fully customizable via various options like paginatorTemplate, rowsPerPageOptions, pageLinks and more.",
        "attributes": [
            {
                "name": "id",
                "description": "Unique identifier of the component in a namingContainer.",
                "type": "java.lang.String"
            },
            {
                "name": "rendered",
                "description": "Boolean value to specify the rendering of the component, when set to false component will not be rendered.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "binding",
                "description": "An el expression referring to a server side UIComponent instance in a backing bean.",
                "type": "javax.faces.component.UIComponent"
            },
            {
                "name": "value",
                "description": "Datasource of the component.",
                "type": "java.lang.Object"
            },
            {
                "name": "var",
                "description": "Name of the iterator variable that references each element in the data set.",
                "type": "String"
            },
            {
                "name": "rows",
                "description": "Number of rows to display per page. Default value is 0 meaning to display all data available.",
                "type": "java.lang.Integer"
            },
            {
                "name": "first",
                "description": "Index of the first data to display.",
                "type": "java.lang.Integer"
            },
            {
                "name": "widgetVar",
                "description": "Name of the client side widget.",
                "type": "java.lang.String"
            },
            {
                "name": "type",
                "description": "Type of the list, valid values are \"unordered\", \"ordered\" and \"definition\". Default is unordered.",
                "type": "java.lang.String"
            },
            {
                "name": "itemType",
                "description": "Specifies the list item type.",
                "type": "java.lang.String"
            },
            {
                "name": "paginator",
                "description": "Enables pagination. Default is false.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "paginatorTemplate",
                "description": "Template of the paginator.",
                "type": "java.lang.String"
            },
            {
                "name": "rowsPerPageTemplate",
                "description": "Template of the rowsPerPage dropdown.",
                "type": "java.lang.String"
            },
            {
                "name": "currentPageReportTemplate",
                "description": "Template of the currentPageReport UI.",
                "type": "java.lang.String"
            },
            {
                "name": "pageLinks",
                "description": "Maximum number of page links to display. Default is 10.",
                "type": "java.lang.Integer"
            },
            {
                "name": "paginatorPosition",
                "description": "Position of the paginator. Default is both.",
                "type": "java.lang.String"
            },
            {
                "name": "paginatorAlwaysVisible",
                "description": "Defines if paginator should be hidden if total data count is less than number of rows per page.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "style",
                "description": "Inline style of the main container.",
                "type": "java.lang.String"
            },
            {
                "name": "styleClass",
                "description": "Style class of the main container.",
                "type": "java.lang.String"
            },
            {
                "name": "rowIndexVar",
                "description": "Name of iterator to refer each row index.",
                "type": "java.lang.String"
            },
            {
                "name": "varStatus",
                "description": "Name of the exported request scoped variable for the status of the iteration.",
                "type": "java.lang.String"
            },
            {
                "name": "lazy",
                "description": "Defines if lazy loading is enabled for the data component.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "emptyMessage",
                "description": "Text to display when there is no data to display. Default is \"No records found.\"",
                "type": "java.lang.String"
            },
            {
                "name": "itemStyleClass",
                "description": "Style class of an item in list. This option is useful to assign specific styles to certain items using an EL expression.",
                "type": "java.lang.String"
            },
            {
                "name": "rowStatePreserved",
                "description": "Keeps state of its children on a per-row basis. Default is false.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "multiViewState",
                "description": "Whether to keep list state across views, defaults to false.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "touchable",
                "description": "Enable touch support if browser detection supports it. Default is false because it is globally enabled by default.",
                "type": "java.lang.Boolean"
            }
        ]
    },
    "p:dataScroller": {
        "name": "p:dataScroller",
        "description": "DataScroller displays a collection of data featuring on demand loading using scroll.",
        "attributes": [
            {
                "name": "id",
                "description": "Unique identifier of the component in a namingContainer.",
                "type": "java.lang.String"
            },
            {
                "name": "rendered",
                "description": "Boolean value to specify the rendering of the component, when set to false component will not be rendered.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "binding",
                "description": "An el expression referring to a server side UIComponent instance in a backing bean.",
                "type": "javax.faces.component.UIComponent"
            },
            {
                "name": "value",
                "description": "Datasource of the component.",
                "type": "java.lang.Object"
            },
            {
                "name": "var",
                "description": "Name of the iterator variable that references each element in the data set.",
                "type": "String"
            },
            {
                "name": "rows",
                "description": "Number of rows to display per page. Default value is 0 meaning to display all data available.",
                "type": "java.lang.Integer"
            },
            {
                "name": "first",
                "description": "Index of the first data to display.",
                "type": "java.lang.Integer"
            },
            {
                "name": "widgetVar",
                "description": "Name of the client side widget.",
                "type": "java.lang.String"
            },
            {
                "name": "style",
                "description": "Inline style of the main container.",
                "type": "java.lang.String"
            },
            {
                "name": "styleClass",
                "description": "Style class of the main container.",
                "type": "java.lang.String"
            },
            {
                "name": "chunkSize",
                "description": "Number of items to fetch.",
                "type": "java.lang.Integer"
            },
            {
                "name": "rowIndexVar",
                "description": "Name of iterator to refer each row index.",
                "type": "java.lang.String"
            },
            {
                "name": "mode",
                "description": "Defines the target to listen for scroll event, valid values are \"document\" (default) and \"inline\".",
                "type": "java.lang.String"
            },
            {
                "name": "scrollHeight",
                "description": "Defines pixel height of the viewport in inline mode.",
                "type": "java.lang.String"
            },
            {
                "name": "lazy",
                "description": "Defines if lazy loading is enabled for the data component.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "buffer",
                "description": "Percentage height of the buffer between the bottom of the page and the scroll position to initiate\n                the load for the new chunk. Value is defined in integer and default is 10 meaning load would happen after 90% of the viewport is scrolled down.",
                "type": "java.lang.Integer"
            },
            {
                "name": "virtualScroll",
                "description": "Loads data on demand as the scrollbar gets close to the bottom. Default is false.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "startAtBottom",
                "description": "if the scrollAtBottom is enabled, scroll position is at bottom and data loading starts from the bottom. Default value is false.",
                "type": "java.lang.Boolean"
            }
        ]
    },
    "p:dataTable": {
        "name": "p:dataTable",
        "description": "DataTable is an enhanced version of the standard Datatable that provides built-in solutions to many commons use cases like paging, sorting, selection, lazy loading, filtering and more.",
        "attributes": [
            {
                "name": "id",
                "description": "Unique identifier of the component in a namingContainer.",
                "type": "java.lang.String"
            },
            {
                "name": "rendered",
                "description": "Boolean value to specify the rendering of the component, when set to false component will not be rendered.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "binding",
                "description": "An el expression referring to a server side UIComponent instance in a backing bean.",
                "type": "javax.faces.component.UIComponent"
            },
            {
                "name": "value",
                "description": "Datasource of the component.",
                "type": "java.lang.Object"
            },
            {
                "name": "var",
                "description": "Name of the iterator variable that references each element in the data set.",
                "type": "String"
            },
            {
                "name": "rows",
                "description": "Number of rows to display per page. Default value is 0 meaning to display all data available.",
                "type": "java.lang.Integer"
            },
            {
                "name": "first",
                "description": "Index of the first data to display.",
                "type": "java.lang.Integer"
            },
            {
                "name": "widgetVar",
                "description": "Name of the client side widget.",
                "type": "java.lang.String"
            },
            {
                "name": "paginator",
                "description": "Enables pagination. Default is false.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "paginatorTemplate",
                "description": "Template of the paginator.",
                "type": "java.lang.String"
            },
            {
                "name": "rowsPerPageTemplate",
                "description": "Template of the rowsPerPage dropdown.",
                "type": "java.lang.String"
            },
            {
                "name": "currentPageReportTemplate",
                "description": "Template of the currentPageReport UI.",
                "type": "java.lang.String"
            },
            {
                "name": "pageLinks",
                "description": "Maximum number of page links to display. Default is 10.",
                "type": "java.lang.Integer"
            },
            {
                "name": "paginatorPosition",
                "description": "Position of the paginator. Default is both.",
                "type": "java.lang.String"
            },
            {
                "name": "paginatorAlwaysVisible",
                "description": "Defines if paginator should be hidden if total data count is less than number of rows per page. Default is true.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "scrollable",
                "description": "Makes data scrollable with fixed header. Default is false.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "scrollHeight",
                "description": "Height for scrollable data.",
                "type": "java.lang.String"
            },
            {
                "name": "scrollWidth",
                "description": "Width for scrollable data.",
                "type": "java.lang.String"
            },
            {
                "name": "selectionMode",
                "description": "Enables data selection, valid values are \"single\" and \"multiple\".",
                "type": "java.lang.String"
            },
            {
                "name": "selection",
                "description": "Reference to the selection data.",
                "type": "java.lang.Object"
            },
            {
                "name": "selectionPageOnly",
                "description": "When using paginator and checkbox selection mode the select all checkbox in header will select the current page if true or all rows if false. Default true.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "rowIndexVar",
                "description": "Name of iterator to refer each row index.",
                "type": "java.lang.String"
            },
            {
                "name": "emptyMessage",
                "description": "Text to display when there is no data to display. Default is \"No records found.\"",
                "type": "java.lang.String"
            },
            {
                "name": "style",
                "description": "Inline style of the main container.",
                "type": "java.lang.String"
            },
            {
                "name": "styleClass",
                "description": "Style class of the main container.",
                "type": "java.lang.String"
            },
            {
                "name": "liveScroll",
                "description": "Enables live scrolling. Default is false.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "rowStyleClass",
                "description": "Style class for each row.",
                "type": "java.lang.String"
            },
            {
                "name": "onExpandStart",
                "description": "Client side callback to execute before row expansion.",
                "type": "java.lang.String"
            },
            {
                "name": "resizableColumns",
                "description": "Decides whether datatable columns are resizable or not.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "sortBy",
                "description": "Property to be used for default sorting. Expects a single or a collection of SortMeta.",
                "type": "java.lang.Object"
            },
            {
                "name": "sortMode",
                "description": "Defines sorting mode, valid values are \"single\" and \"multiple\" (default).",
                "type": "java.lang.String"
            },
            {
                "name": "allowUnsorting",
                "description": "Defines whether columns are allowed to be unsorted. Default is false.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "scrollRows",
                "description": "",
                "type": "java.lang.Integer"
            },
            {
                "name": "rowKey",
                "description": "Unique identifier of row data.",
                "type": "java.lang.Object"
            },
            {
                "name": "filterEvent",
                "description": "Client side event to invoke filtering. If \"enter\" it will only filter after ENTER key is pressed. Default is keyup.",
                "type": "java.lang.String"
            },
            {
                "name": "filterNormalize",
                "description": "Defines if filtering would be done using normalized values (accents will be removed from characters). Default is false.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "filterDelay",
                "description": "Delay to wait in milliseconds before sending each filter query. Default is 300.",
                "type": "java.lang.Integer"
            },
            {
                "name": "tableStyle",
                "description": "Inline style of the table element.",
                "type": "java.lang.String"
            },
            {
                "name": "tableStyleClass",
                "description": "Style class of the table element.",
                "type": "java.lang.String"
            },
            {
                "name": "draggableColumns",
                "description": "Decides whether datatable columns can be reordered using dragdrop.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "editable",
                "description": "Controls incell editing.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "lazy",
                "description": "Defines if lazy loading is enabled for the data component.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "filteredValue",
                "description": "List to keep the filtered data if filtering is enabled.",
                "type": "java.util.List"
            },
            {
                "name": "editMode",
                "description": "Defines edit mode, valid values are \"row\" (default) and \"cell\".",
                "type": "java.lang.String"
            },
            {
                "name": "editingRow",
                "description": "Defines if cell editors of row should be displayed as editable or not. Default is false meaning display mode.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "exportTag",
                "description": "If XML data exporter in use, this allows customization of the document tag in the XML.",
                "type": "java.lang.String"
            },
            {
                "name": "exportRowTag",
                "description": "If XML data exporter in use, this allows customization of the row tag in the XML.",
                "type": "java.lang.String"
            },
            {
                "name": "cellSeparator",
                "description": "Separator text to use in output mode of editable cells with multiple components.",
                "type": "java.lang.String"
            },
            {
                "name": "summary",
                "description": "Summary attribute for WCAG.",
                "type": "java.lang.String"
            },
            {
                "name": "frozenRows",
                "description": "Number of rows to freeze starting from the beginning.",
                "type": "java.lang.Integer"
            },
            {
                "name": "dir",
                "description": "Defines text direction, valid values are \"ltr\" (default) and \"rtl\".",
                "type": "java.lang.String"
            },
            {
                "name": "liveResize",
                "description": "Columns are resized live in this mode without using a resize helper.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "stickyHeader",
                "description": "Sticky header stays in window viewport during scrolling.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "expandedRow",
                "description": "Defines if row should be rendered as expanded by default.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "selectionDisabled",
                "description": "Disables row selection when true.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "selectionRowMode",
                "description": "Indicates how rows of a DataTable may be selected, when clicking on the row itself (not the checkbox / radiobutton from p:column). \n\t\t    The value `new` always unselects other rows, `add` preserves the currently selected rows, and `none` disables row selection.",
                "type": "java.lang.String"
            },
            {
                "name": "rowExpandMode",
                "description": "Defines row expand mode, valid values are \"single\" and \"multiple\" (default).",
                "type": "java.lang.String"
            },
            {
                "name": "dataLocale",
                "description": "Locale to be used in features such as filtering and sorting, defaults to view locale.",
                "type": "java.lang.Object"
            },
            {
                "name": "nativeElements",
                "description": "In native mode, datatable uses native radio-checkbox elements for row selection instead of extended ones.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "frozenColumns",
                "description": "Number of columns to freeze, default is 0.",
                "type": "java.lang.Integer"
            },
            {
                "name": "frozenColumnsAlignment",
                "description": "Defines the alignment of frozen columns, valid values are 'left' and 'right', default is 'left'",
                "type": "java.lang.String"
            },
            {
                "name": "draggableRows",
                "description": "When enabled, rows can be reordered using dragdrop.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "skipChildren",
                "description": "Ignores processing of children during lifecycle, improves performance if table only has output components, default is false.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "selectionTextDisabled",
                "description": "Disables text selection on row click. Default is true.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "initMode",
                "description": "Defines when the datatable is initiated at client side, valid values are \"load\" (default) and \"immediate\".",
                "type": "java.lang.String"
            },
            {
                "name": "tabindex",
                "description": "Position of the element in the tabbing order.",
                "type": "java.lang.String"
            },
            {
                "name": "reflow",
                "description": "Reflow mode is a responsive mode to display columns as stacked depending on screen size.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "liveScrollBuffer",
                "description": "Percentage height of the buffer between the bottom of the page and the scroll position to initiate\n                the load for the new chunk. Value is defined in integer and default is 0.",
                "type": "java.lang.Integer"
            },
            {
                "name": "rowHover",
                "description": "Adds hover effect to rows, default is false. Hover is always on when selection is enabled.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "rowStatePreserved",
                "description": "Keeps state of its children on a per-row basis. Default is false.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "resizeMode",
                "description": "Defines the resize behavior, valid values are \"fit\" (default) and expand.",
                "type": "java.lang.String"
            },
            {
                "name": "ariaRowLabel",
                "description": "Label to read by screen readers on checkbox and radio selection.",
                "type": "java.lang.String"
            },
            {
                "name": "saveOnCellBlur",
                "description": "Saves the changes in cell editing on blur, when set to false changes are discarded.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "clientCache",
                "description": "Caches the next page asynchronously, default is false.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "multiViewState",
                "description": "Whether to keep table state across views, defaults to false.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "filterBy",
                "description": "Property to be used for default filtering. Expects a single or a collection of FilterMeta.",
                "type": "java.util.Map"
            },
            {
                "name": "globalFilter",
                "description": "Value of the global filter to use when filtering by default.",
                "type": "java.lang.String"
            },
            {
                "name": "globalFilterOnly",
                "description": "When true this will hide all column filters and allow all columns to be filtered by global filter only, defaults to false.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "cellEditMode",
                "description": "Defines the cell edit behavior, valid values are \"eager\" (default) and \"lazy\".",
                "type": "java.lang.String"
            },
            {
                "name": "cellNavigation",
                "description": "Enables cell navigation with the keyboard for WCAG and screen reader compliance. Default is true.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "virtualScroll",
                "description": "Loads data on demand as the scrollbar gets close to the bottom. Default is false.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "rowDragSelector",
                "description": "Defines the element used to reorder rows using dragdrop. Default selector is \"td,span:not(.ui-c)\"",
                "type": "java.lang.String"
            },
            {
                "name": "draggableRowsFunction",
                "description": "Method expression to execute after dragging row.",
                "type": "javax.el.MethodExpression"
            },
            {
                "name": "onRowClick",
                "description": "Client side callback to execute after clicking row.",
                "type": "java.lang.String"
            },
            {
                "name": "editInitEvent",
                "description": "Defines a client side event to open cell on editable table.",
                "type": "java.lang.String"
            },
            {
                "name": "rowSelector",
                "description": "Client side check if rowclick triggered row click event not a clickable element in row content.",
                "type": "java.lang.String"
            },
            {
                "name": "disableContextMenuIfEmpty",
                "description": "Decides whether to disable context menu or not if a table has no records.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "escapeText",
                "description": "Defines if headerText and footerText values on columns are escaped or not. Default is true.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "rowEditMode",
                "description": "Defines the row edit behavior, valid values are \"eager\" (default) and \"lazy\".",
                "type": "java.lang.String"
            },
            {
                "name": "stickyTopAt",
                "description": "Selector to position on the page according to other fixing elements on the top of the table. Default is null.",
                "type": "java.lang.String"
            },
            {
                "name": "globalFilterFunction",
                "description": "Custom implementation to globally filter a value against a constraint.",
                "type": "javax.el.MethodExpression"
            },
            {
                "name": "touchable",
                "description": "Enable touch support if browser detection supports it. Default is false because it is globally enabled by default.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "renderEmptyFacets",
                "description": "Render facets even if their children are not rendered. Default is false.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "stripedRows",
                "description": "Whether to display striped rows to visually separate content. Default is false.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "showGridlines",
                "description": "When enabled, cell borders are displayed. Default is false.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "size",
                "description": "Size of the table content, valid values are \"small\" and \"large\". Leave empty for regular size.",
                "type": "java.lang.String"
            },
            {
                "name": "partialUpdate",
                "description": "When disabled, it updates the whole table instead of updating a specific field such as body element in the client requests of the dataTable. Default is true.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "showSelectAll",
                "description": "Whether to show the select all checkbox inside the column's header. Default is true.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "selectAllFilteredOnly",
                "description": "When enabled, toggle select will only apply on filtered items",
                "type": "java.lang.Boolean"
            }
        ]
    },
    "p:dataView": {
        "name": "p:dataView",
        "description": "DataView displays data in grid or list layout.",
        "attributes": [
            {
                "name": "id",
                "description": "Unique identifier of the component in a namingContainer.",
                "type": "java.lang.String"
            },
            {
                "name": "rendered",
                "description": "Boolean value to specify the rendering of the component, when set to false component will not be rendered.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "binding",
                "description": "An el expression referring to a server side UIComponent instance in a backing bean.",
                "type": "javax.faces.component.UIComponent"
            },
            {
                "name": "value",
                "description": "Datasource of the component.",
                "type": "java.lang.Object"
            },
            {
                "name": "var",
                "description": "Name of the iterator variable that references each element in the data set.",
                "type": "String"
            },
            {
                "name": "rowIndexVar",
                "description": "Name of iterator to refer each row index.",
                "type": "java.lang.String"
            },
            {
                "name": "rows",
                "description": "Number of rows to display per page. Default value is 0 meaning to display all data available.",
                "type": "java.lang.Integer"
            },
            {
                "name": "first",
                "description": "Index of the first data to display.",
                "type": "java.lang.Integer"
            },
            {
                "name": "widgetVar",
                "description": "Name of the client side widget.",
                "type": "java.lang.String"
            },
            {
                "name": "lazy",
                "description": "Defines if lazy loading is enabled for the data component.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "paginator",
                "description": "Enables pagination.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "paginatorTemplate",
                "description": "Template of the paginator.",
                "type": "java.lang.String"
            },
            {
                "name": "rowsPerPageTemplate",
                "description": "Template of the rowsPerPage dropdown.",
                "type": "java.lang.String"
            },
            {
                "name": "currentPageReportTemplate",
                "description": "Template of the currentPageReport UI.",
                "type": "java.lang.String"
            },
            {
                "name": "pageLinks",
                "description": "Maximum number of page links to display. Default is 10.",
                "type": "java.lang.Integer"
            },
            {
                "name": "paginatorPosition",
                "description": "Position of the paginator. Default is both.",
                "type": "java.lang.String"
            },
            {
                "name": "paginatorAlwaysVisible",
                "description": "Defines if paginator should be hidden if total data count is less than number of rows per page. Default is true.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "style",
                "description": "Inline style of the main container.",
                "type": "java.lang.String"
            },
            {
                "name": "styleClass",
                "description": "Style class of the main container.",
                "type": "java.lang.String"
            },
            {
                "name": "layout",
                "description": "Layout of the items, valid values are \"list\" and \"grid\".",
                "type": "java.lang.String"
            },
            {
                "name": "gridIcon",
                "description": "",
                "type": "java.lang.String"
            },
            {
                "name": "listIcon",
                "description": "",
                "type": "java.lang.String"
            },
            {
                "name": "multiViewState",
                "description": "Whether to keep DataView state across views, defaults to false.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "touchable",
                "description": "Enable touch support if browser detection supports it. Default is false because it is globally enabled by default.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "gridRowStyle",
                "description": "Inline style of each row (grid-cell) in grid layout.",
                "type": "java.lang.String"
            },
            {
                "name": "gridRowStyleClass",
                "description": "Style class of each row (grid-cell) in grid layout.",
                "type": "java.lang.String"
            },
            {
                "name": "emptyMessage",
                "description": "Text to display when there is no data to display.",
                "type": "java.lang.String"
            },
            {
                "name": "flex",
                "description": "Use modern PrimeFlex-Grid instead of classic Grid CSS.",
                "type": "java.lang.Boolean"
            }
        ]
    },
    "p:dataViewGridItem": {
        "name": "p:dataViewGridItem",
        "description": "dataViewGridItem is a helper component for DataView to add grid items.",
        "attributes": [
            {
                "name": "id",
                "description": "Unique identifier of the component in a namingContainer.",
                "type": "java.lang.String"
            },
            {
                "name": "rendered",
                "description": "Boolean value to specify the rendering of the component, when set to false component will not be rendered.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "binding",
                "description": "An el expression referring to a server side UIComponent instance in a backing bean.",
                "type": "javax.faces.component.UIComponent"
            },
            {
                "name": "columns",
                "description": "Number of columns of grid. Default is 3.",
                "type": "java.lang.Integer"
            }
        ]
    },
    "p:dataViewListItem": {
        "name": "p:dataViewListItem",
        "description": "dataViewListItem is a helper component for DataView to add list items.",
        "attributes": [
            {
                "name": "id",
                "description": "Unique identifier of the component in a namingContainer.",
                "type": "java.lang.String"
            },
            {
                "name": "rendered",
                "description": "Boolean value to specify the rendering of the component, when set to false component will not be rendered.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "binding",
                "description": "An el expression referring to a server side UIComponent instance in a backing bean.",
                "type": "javax.faces.component.UIComponent"
            }
        ]
    },
    "p:defaultCommand": {
        "name": "p:defaultCommand",
        "description": "DefaultCommand defines the default command component to invoke when enter key is pressed in a form.",
        "attributes": [
            {
                "name": "id",
                "description": "Unique identifier of the component in a namingContainer.",
                "type": "java.lang.String"
            },
            {
                "name": "rendered",
                "description": "Boolean value to specify the rendering of the component, when set to false component will not be rendered.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "binding",
                "description": "An el expression referring to a server side UIComponent instance in a backing bean.",
                "type": "javax.faces.component.UIComponent"
            },
            {
                "name": "widgetVar",
                "description": "Name of the client side widget.",
                "type": "java.lang.String"
            },
            {
                "name": "target",
                "description": "Identifier of the default command component.",
                "type": "java.lang.String"
            },
            {
                "name": "scope",
                "description": "Identifier of the grouping component to enable multiple default commands in a form.",
                "type": "java.lang.String"
            }
        ]
    },
    "p:diagram": {
        "name": "p:diagram",
        "description": "Diagram is a component to create visual elements and connect them on a web page.",
        "attributes": [
            {
                "name": "id",
                "description": "Unique identifier of the component in a namingContainer.",
                "type": "java.lang.String"
            },
            {
                "name": "rendered",
                "description": "Boolean value to specify the rendering of the component, when set to false component will not be rendered.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "binding",
                "description": "An el expression referring to a server side UIComponent instance in a backing bean.",
                "type": "javax.faces.component.UIComponent"
            },
            {
                "name": "id",
                "description": "Unique identifier of the component in a namingContainer.",
                "type": "java.lang.String"
            },
            {
                "name": "rendered",
                "description": "Boolean value to specify the rendering of the component, when set to false component will not be rendered.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "binding",
                "description": "An el expression referring to a server side UIComponent instance in a backing bean.",
                "type": "javax.faces.component.UIComponent"
            },
            {
                "name": "value",
                "description": "Value of the component.",
                "type": "java.lang.Object"
            },
            {
                "name": "converter",
                "description": "An el expression or a literal text that defines a converter for the component. When it's an EL expression, it's resolved to a converter instance.\n    In case it's a static text, it must refer to a converter id.",
                "type": "javax.faces.convert.Converter"
            },
            {
                "name": "widgetVar",
                "description": "Name of the client side widget.",
                "type": "java.lang.String"
            },
            {
                "name": "var",
                "description": "Name of the iterator variable that references each element in the data set.",
                "type": "String"
            },
            {
                "name": "style",
                "description": "Inline style of the component.",
                "type": "java.lang.String"
            },
            {
                "name": "styleClass",
                "description": "Style class of the component.",
                "type": "java.lang.String"
            }
        ]
    },
    "p:dialog": {
        "name": "p:dialog",
        "description": "Dialog is a panel component overlaying other elements. Dialog avoids popup blockers, provides customization, resizing, modality, ajax interactions and more.",
        "attributes": [
            {
                "name": "id",
                "description": "Unique identifier of the component in a namingContainer.",
                "type": "java.lang.String"
            },
            {
                "name": "rendered",
                "description": "Boolean value to specify the rendering of the component, when set to false component will not be rendered.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "binding",
                "description": "An el expression referring to a server side UIComponent instance in a backing bean.",
                "type": "javax.faces.component.UIComponent"
            },
            {
                "name": "widgetVar",
                "description": "Name of the client side widget.",
                "type": "java.lang.String"
            },
            {
                "name": "header",
                "description": "Text of the header.",
                "type": "java.lang.String"
            },
            {
                "name": "draggable",
                "description": "Specifies draggability. Default is true.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "resizable",
                "description": "Specifies resizability. Default is true.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "modal",
                "description": "Boolean value that specifies whether the document should be shielded with a partially transparent mask to require the user to close the Panel before being able to activate any elements in the document. Default is false.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "blockScroll",
                "description": "Whether to block scrolling of the document when dialog is modal.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "visible",
                "description": "Sets dialogs visibility. Default is false.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "width",
                "description": "Width of the dialog in pixels. Default is auto.",
                "type": "java.lang.String"
            },
            {
                "name": "height",
                "description": "Height of the dialog.",
                "type": "java.lang.String"
            },
            {
                "name": "minWidth",
                "description": "Minimum width of a resizable dialog. Default is unl.",
                "type": "java.lang.Integer"
            },
            {
                "name": "minHeight",
                "description": "Minimum height of a resizable dialog. Default is height of titlebar.",
                "type": "java.lang.Integer"
            },
            {
                "name": "style",
                "description": "Inline style of the dialog container.",
                "type": "java.lang.String"
            },
            {
                "name": "styleClass",
                "description": "Style class of the dialog container.",
                "type": "java.lang.String"
            },
            {
                "name": "showEffect",
                "description": "Effect to use when showing the dialog.",
                "type": "java.lang.String"
            },
            {
                "name": "hideEffect",
                "description": "Effect to use when hiding the dialog.",
                "type": "java.lang.String"
            },
            {
                "name": "my",
                "description": "Position of the dialog relative to the target. Default is \"center\".",
                "type": "java.lang.String"
            },
            {
                "name": "position",
                "description": "Defines where the dialog should be displayed. Default is \"center\".",
                "type": "java.lang.String"
            },
            {
                "name": "closable",
                "description": "Defines if close icon should be displayed or not.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "onShow",
                "description": "Client side callback to execute when dialog is displayed.",
                "type": "java.lang.String"
            },
            {
                "name": "onHide",
                "description": "Client side callback to execute when dialog is hidden.",
                "type": "java.lang.String"
            },
            {
                "name": "appendTo",
                "description": "Appends the dialog to the given search expression.",
                "type": "java.lang.String"
            },
            {
                "name": "showHeader",
                "description": "Specifies visibility of header content.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "footer",
                "description": "Text of the footer.",
                "type": "java.lang.String"
            },
            {
                "name": "dynamic",
                "description": "Dynamic mode allows dialog to fetch it's contents before it's shown rather than on page load\n                which is useful to reduce initial page load times. Default is false.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "minimizable",
                "description": "Specifies if dialog is minimizable or not. Default false.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "maximizable",
                "description": "Specifies if dialog is maximizable or not. Default false.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "closeOnEscape",
                "description": "Defines if dialog should close when escape key is pressed. Default is false.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "dir",
                "description": "Defines text direction, valid values are \"ltr\" (default) and \"rtl\".",
                "type": "java.lang.String"
            },
            {
                "name": "focus",
                "description": "Defines which component to focus.",
                "type": "java.lang.String"
            },
            {
                "name": "fitViewport",
                "description": "Dialog size might exceed viewport if content is bigger than viewport in terms of height. fitViewport option automatically\n                adjusts height to fit dialog within the viewport.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "positionType",
                "description": "Defines whether dialog will be kept in viewport on scroll (fixed) or keep its position (absolute). Default is fixed.",
                "type": "java.lang.String"
            },
            {
                "name": "responsive",
                "description": "In responsive mode, dialog adjusts itself based on screen width.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "cache",
                "description": "Only relevant for dynamic=\"true\": Defines if activating the dialog should load the contents from server again. For cache=\"true\" (default) the dialog content is only loaded once.",
                "type": "java.lang.Boolean"
            }
        ]
    },
    "p:dock": {
        "name": "p:dock",
        "description": "Dock component mimics the well known dock interface of Mac OS X.",
        "attributes": [
            {
                "name": "id",
                "description": "Unique identifier of the component in a namingContainer.",
                "type": "java.lang.String"
            },
            {
                "name": "rendered",
                "description": "Boolean value to specify the rendering of the component, when set to false component will not be rendered.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "binding",
                "description": "An el expression referring to a server side UIComponent instance in a backing bean.",
                "type": "javax.faces.component.UIComponent"
            },
            {
                "name": "widgetVar",
                "description": "Name of the client side widget.",
                "type": "java.lang.String"
            },
            {
                "name": "model",
                "description": "MenuModel instance to create menus programmatically.",
                "type": "org.primefaces.model.menu.MenuModel"
            },
            {
                "name": "position",
                "description": "Position of the dock, bottom or top. Default is bottom.",
                "type": "java.lang.String"
            },
            {
                "name": "halign",
                "description": "Horizontal alignment. Default is center.",
                "type": "java.lang.String"
            },
            {
                "name": "blockScroll",
                "description": "Whether to block scrolling of the document. Default is false.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "animate",
                "description": "Whether to animate the OSX bounce effect when clicking an item. Default is true.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "animationDuration",
                "description": "How long in milliseconds to animate the bounce effect. Default is 1600ms.",
                "type": "java.lang.Integer"
            },
            {
                "name": "dir",
                "description": "Defines direction of dock. Valid values are \"ltr\" (default) and \"rtl\".",
                "type": "java.lang.String"
            }
        ]
    },
    "p:draggable": {
        "name": "p:draggable",
        "description": "Draggable allows any component to be enhanced with draggable behavior.",
        "attributes": [
            {
                "name": "id",
                "description": "Unique identifier of the component in a namingContainer.",
                "type": "java.lang.String"
            },
            {
                "name": "rendered",
                "description": "Boolean value to specify the rendering of the component, when set to false component will not be rendered.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "binding",
                "description": "An el expression referring to a server side UIComponent instance in a backing bean.",
                "type": "javax.faces.component.UIComponent"
            },
            {
                "name": "widgetVar",
                "description": "Name of the client side widget.",
                "type": "java.lang.String"
            },
            {
                "name": "proxy",
                "description": "Displays proxy element instead of actual element. Default is false.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "dragOnly",
                "description": "",
                "type": "java.lang.Boolean"
            },
            {
                "name": "for",
                "description": "Id of the component to add draggable behavior.",
                "type": "java.lang.String"
            },
            {
                "name": "disabled",
                "description": "Disables or enables dragging.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "axis",
                "description": "Specifies drag axis, valid values are 'x' and 'y'.",
                "type": "java.lang.String"
            },
            {
                "name": "containment",
                "description": "Constraints dragging within the boundaries of containment element.",
                "type": "java.lang.String"
            },
            {
                "name": "helper",
                "description": "Helper element to display when dragging.",
                "type": "java.lang.String"
            },
            {
                "name": "revert",
                "description": "Reverts draggable to it's original position when not dropped onto a valid droppable. Default is false.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "snap",
                "description": "Draggable will snap to edge of near elements. Default is false.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "snapMode",
                "description": "Specifies the snap mode. Valid values are 'both', 'inner' and 'outer'.",
                "type": "java.lang.String"
            },
            {
                "name": "snapTolerance",
                "description": "Distance from the snap element in pixels to trigger snap. Default is 20.",
                "type": "java.lang.Integer"
            },
            {
                "name": "zindex",
                "description": "ZIndex to apply during dragging. Default is -1.",
                "type": "java.lang.Integer"
            },
            {
                "name": "handle",
                "description": "Specifies a handle for dragging.",
                "type": "java.lang.String"
            },
            {
                "name": "opacity",
                "description": "Defines the opacity of the helper during dragging. Default is 1.0",
                "type": "java.lang.Double"
            },
            {
                "name": "stack",
                "description": "In stack mode, draggable overlap is controlled automatically using the provided selector, dragged item always overlays other draggables.",
                "type": "java.lang.String"
            },
            {
                "name": "grid",
                "description": "Dragging happens in every x and y pixels.",
                "type": "java.lang.String"
            },
            {
                "name": "scope",
                "description": "Scope key to match draggables and droppables.",
                "type": "java.lang.String"
            },
            {
                "name": "cursor",
                "description": "CSS cursor to display in dragging. Default is crosshair.",
                "type": "java.lang.String"
            },
            {
                "name": "dashboard",
                "description": "Id of the dashboard to connect with.",
                "type": "java.lang.String"
            },
            {
                "name": "appendTo",
                "description": "A search expression to define which element to append the draggable helper to.",
                "type": "java.lang.String"
            },
            {
                "name": "onStart",
                "description": "Client side callback to execute when dragging starts.",
                "type": "java.lang.String"
            },
            {
                "name": "onStop",
                "description": "Client side callback to execute when dragging stops.",
                "type": "java.lang.String"
            },
            {
                "name": "onDrag",
                "description": "Client side callback to execute while dragging.",
                "type": "java.lang.String"
            },
            {
                "name": "cancel",
                "description": "Prevents dragging from starting on specified elements.",
                "type": "java.lang.String"
            }
        ]
    },
    "p:droppable": {
        "name": "p:droppable",
        "description": "Droppable allows any component to be enhanced with droppable behavior.",
        "attributes": [
            {
                "name": "id",
                "description": "Unique identifier of the component in a namingContainer.",
                "type": "java.lang.String"
            },
            {
                "name": "rendered",
                "description": "Boolean value to specify the rendering of the component, when set to false component will not be rendered.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "binding",
                "description": "An el expression referring to a server side UIComponent instance in a backing bean.",
                "type": "javax.faces.component.UIComponent"
            },
            {
                "name": "widgetVar",
                "description": "Name of the client side widget.",
                "type": "java.lang.String"
            },
            {
                "name": "for",
                "description": "Id of the component to add droppable behavior.",
                "type": "java.lang.String"
            },
            {
                "name": "disabled",
                "description": "Disables of enables droppable behavior.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "hoverStyleClass",
                "description": "Style class to apply when an acceptable draggable is dragged over.",
                "type": "java.lang.String"
            },
            {
                "name": "activeStyleClass",
                "description": "Style class to apply when an acceptable draggable is being dragged.",
                "type": "java.lang.String"
            },
            {
                "name": "onDrop",
                "description": "Client side callback to execute when a draggable is dropped.",
                "type": "java.lang.String"
            },
            {
                "name": "accept",
                "description": "Selector to define the accepted draggables.",
                "type": "java.lang.String"
            },
            {
                "name": "scope",
                "description": "Scope key to match draggables and droppables.",
                "type": "java.lang.String"
            },
            {
                "name": "tolerance",
                "description": "Specifies the intersection mode to accept a draggable. Values are 'fit', 'pointer', 'touch' or 'intersect'. Default is 'intersect'.",
                "type": "java.lang.String"
            },
            {
                "name": "datasource",
                "description": "Id of a UIData component to connect with.",
                "type": "java.lang.String"
            },
            {
                "name": "greedy",
                "description": "Avoids parent droppable elements receiving the drop event. Default value is false",
                "type": "java.lang.Boolean"
            }
        ]
    },
    "p:effect": {
        "name": "p:effect",
        "description": "Effect component is based on the jQuery UI effects library.",
        "attributes": [
            {
                "name": "id",
                "description": "Unique identifier of the component in a namingContainer.",
                "type": "java.lang.String"
            },
            {
                "name": "rendered",
                "description": "Boolean value to specify the rendering of the component, when set to false component will not be rendered.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "binding",
                "description": "An el expression referring to a server side UIComponent instance in a backing bean.",
                "type": "javax.faces.component.UIComponent"
            },
            {
                "name": "widgetVar",
                "description": "Name of the client side widget.",
                "type": "java.lang.String"
            },
            {
                "name": "event",
                "description": "Dom event to attach the event that executes the animation. Required.",
                "type": "java.lang.String"
            },
            {
                "name": "type",
                "description": "Specifies the name of the animation. Required.",
                "type": "java.lang.String"
            },
            {
                "name": "for",
                "description": "Component that is animated.",
                "type": "java.lang.String"
            },
            {
                "name": "speed",
                "description": "Speed of the animation in ms. Default is 1000.",
                "type": "java.lang.Integer"
            },
            {
                "name": "delay",
                "description": "Startup delay on firing animation.",
                "type": "java.lang.Integer"
            },
            {
                "name": "queue",
                "description": "Specifies if effects should be queued. Default is true.",
                "type": "java.lang.Boolean"
            }
        ]
    },
    "p:feedReader": {
        "name": "p:feedReader",
        "description": "FeedReader retrieves and displays content from an RSS, Atom, or Itunes Podcast feed.",
        "attributes": [
            {
                "name": "id",
                "description": "Unique identifier of the component in a namingContainer.",
                "type": "java.lang.String"
            },
            {
                "name": "rendered",
                "description": "Boolean value to specify the rendering of the component, when set to false component will not be rendered.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "binding",
                "description": "An el expression referring to a server side UIComponent instance in a backing bean.",
                "type": "javax.faces.component.UIComponent"
            },
            {
                "name": "value",
                "description": "URL of the feed.",
                "type": "java.lang.String"
            },
            {
                "name": "var",
                "description": "Name of the iterator variable that references each element in the data set.",
                "type": "String"
            },
            {
                "name": "size",
                "description": "Number of items to display.",
                "type": "java.lang.Integer"
            },
            {
                "name": "podcast",
                "description": "Flag to control if this is a podcast feed which will include extra podcast metadata. Default false.",
                "type": "java.lang.Boolean"
            }
        ]
    },
    "p:fieldset": {
        "name": "p:fieldset",
        "description": "Fieldset is a grouping component with a title and content.",
        "attributes": [
            {
                "name": "id",
                "description": "Unique identifier of the component in a namingContainer.",
                "type": "java.lang.String"
            },
            {
                "name": "rendered",
                "description": "Boolean value to specify the rendering of the component, when set to false component will not be rendered.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "binding",
                "description": "An el expression referring to a server side UIComponent instance in a backing bean.",
                "type": "javax.faces.component.UIComponent"
            },
            {
                "name": "widgetVar",
                "description": "Name of the client side widget.",
                "type": "java.lang.String"
            },
            {
                "name": "legend",
                "description": "Title text.",
                "type": "java.lang.String"
            },
            {
                "name": "style",
                "description": "Inline style of the fieldset.",
                "type": "java.lang.String"
            },
            {
                "name": "styleClass",
                "description": "Style class of the fieldset.",
                "type": "java.lang.String"
            },
            {
                "name": "toggleable",
                "description": "Makes content toggleable with animation. Default is false.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "toggleSpeed",
                "description": "Sets toggle animation speed in milliseconds. Default is 500.",
                "type": "java.lang.Integer"
            },
            {
                "name": "collapsed",
                "description": "Defines initial visibility state of content. Default is false.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "tabindex",
                "description": "Position of the element in the tabbing order.",
                "type": "java.lang.String"
            },
            {
                "name": "escape",
                "description": "Defines whether value would be escaped or not, defaults to true.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "title",
                "description": "Advisory tooltip information.",
                "type": "java.lang.String"
            },
            {
                "name": "dynamic",
                "description": "Defines if dynamic loading is enabled for the element's panel.\n                If the value is \"true\", the fieldset is not rendered on page load to improve performance. Default is false.",
                "type": "java.lang.Boolean"
            }
        ]
    },
    "p:fileUpload": {
        "name": "p:fileUpload",
        "description": "FileUpload goes beyond the browser input type=\"file\" functionality and features a javascript solution for uploading files.\n        File filtering, multiple uploads, partial page rendering and progress tracking are the significant features compared to legacy fileUploads.",
        "attributes": [
            {
                "name": "id",
                "description": "Unique identifier of the component in a namingContainer.",
                "type": "java.lang.String"
            },
            {
                "name": "rendered",
                "description": "Boolean value to specify the rendering of the component, when set to false component will not be rendered.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "binding",
                "description": "An el expression referring to a server side UIComponent instance in a backing bean.",
                "type": "javax.faces.component.UIComponent"
            },
            {
                "name": "value",
                "description": "Value of the component.",
                "type": "java.lang.Object"
            },
            {
                "name": "converter",
                "description": "An el expression or a literal text that defines a converter for the component. When it's an EL expression, it's resolved to a converter instance.\n    In case it's a static text, it must refer to a converter id.",
                "type": "javax.faces.convert.Converter"
            },
            {
                "name": "immediate",
                "description": "When set true, process validations logic is executed at apply request values phase for this component. Default is false.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "required",
                "description": "Marks component as required.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "validator",
                "description": "A method expression referring to a method validating the input.",
                "type": "javax.faces.validator.Validator"
            },
            {
                "name": "valueChangeListener",
                "description": "A method binding expression referring to a method for handling a valuchangeevent.",
                "type": "javax.faces.event.ValueChangeListener"
            },
            {
                "name": "requiredMessage",
                "description": "Message to display when required field validation fails.",
                "type": "java.lang.String"
            },
            {
                "name": "converterMessage",
                "description": "Message to display when conversion fails.",
                "type": "java.lang.String"
            },
            {
                "name": "validatorMessage",
                "description": "Message to display when validation fails.",
                "type": "java.lang.String"
            },
            {
                "name": "widgetVar",
                "description": "Name of the client side widget.",
                "type": "java.lang.String"
            },
            {
                "name": "style",
                "description": "Inline style of the main component.",
                "type": "java.lang.String"
            },
            {
                "name": "styleClass",
                "description": "Style class of the component.",
                "type": "java.lang.String"
            },
            {
                "name": "update",
                "description": "Component(s) to be updated after fileupload completes.",
                "type": "java.lang.String"
            },
            {
                "name": "process",
                "description": "Component(s) to be processed during fileupload request.",
                "type": "java.lang.String"
            },
            {
                "name": "global",
                "description": "Global AJAX requests are listened by ajaxStatus component, setting global to false will not trigger ajaxStatus.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "listener",
                "description": "Method expression to invoke when a file is uploaded.",
                "type": "javax.el.MethodExpression"
            },
            {
                "name": "multiple",
                "description": "Allows choosing of multi file uploads from native file browse dialog, turned off by default.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "auto",
                "description": "When set to true, selecting a file starts the upload process implicitly. Default is false.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "label",
                "description": "Label of the browse button, default is 'Choose'.",
                "type": "java.lang.String"
            },
            {
                "name": "maxChunkSize",
                "description": "To upload large files in smaller chunks, set this option to a preferred maximum chunk size. If set to 0 (default), null or undefined, or the browser does not support the required Blob API, files will be uploaded as a whole. Only works in \"advanced\" mode.",
                "type": "java.lang.Long"
            },
            {
                "name": "maxRetries",
                "description": "Only for chunked file upload: Amount of retries when upload get´s interrupted due to e.g. unstable network connection.",
                "type": "java.lang.Integer"
            },
            {
                "name": "retryTimeout",
                "description": "Only for chunked file upload: (Base-)Timeout in milliseconds to wait until the next retry. It is multiplied with the retry count. (first retry: retryTimeout * 1, second retry: retryTimeout *2, ...)",
                "type": "java.lang.Integer"
            },
            {
                "name": "mode",
                "description": "Mode of the uploader, valid values are \"simple\" and \"advanced\".",
                "type": "java.lang.String"
            },
            {
                "name": "uploadLabel",
                "description": "Label of the upload button, default is 'Upload'.",
                "type": "java.lang.String"
            },
            {
                "name": "cancelLabel",
                "description": "Label of the cancel button, default is 'Cancel'.",
                "type": "java.lang.String"
            },
            {
                "name": "dragDrop",
                "description": "Specifies dragdrop based file selection from filesystem, default is true and works only on supported browsers.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "onupload",
                "description": "Callback to execute before the files are sent. If this callback returns false, the file upload request is not started.",
                "type": "java.lang.String"
            },
            {
                "name": "onstart",
                "description": "Callback to execute at the beginning of fileupload.",
                "type": "java.lang.String"
            },
            {
                "name": "oncomplete",
                "description": "Callback to execute after fileupload request completes.",
                "type": "java.lang.String"
            },
            {
                "name": "onerror",
                "description": "Callback to execute after fileupload request fails.",
                "type": "java.lang.String"
            },
            {
                "name": "onvalidationfailure",
                "description": "Callback to execute after a fileupload client validation error.",
                "type": "java.lang.String"
            },
            {
                "name": "oncancel",
                "description": "Callback to execute after fileupload request is cancelled.",
                "type": "java.lang.String"
            },
            {
                "name": "disabled",
                "description": "Disables fileupload user interface interaction.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "messageTemplate",
                "description": "Message template to use when displaying file in simple upload mode and some client side validation messages in advanced mode. Default is \"{name} {size}\".",
                "type": "java.lang.String"
            },
            {
                "name": "previewWidth",
                "description": "Width for image previews in pixels. Default value is 80.",
                "type": "java.lang.Integer"
            },
            {
                "name": "skinSimple",
                "description": "Applies theming to simple uploader, default is false.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "accept",
                "description": "To filter files in native file browser dialog.",
                "type": "java.lang.String"
            },
            {
                "name": "sequential",
                "description": "Uploads are concurrent by default set this option to true for sequential uploads.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "chooseIcon",
                "description": "",
                "type": "java.lang.String"
            },
            {
                "name": "uploadIcon",
                "description": "",
                "type": "java.lang.String"
            },
            {
                "name": "cancelIcon",
                "description": "",
                "type": "java.lang.String"
            },
            {
                "name": "onAdd",
                "description": "Callback to execute before adding a file.",
                "type": "java.lang.String"
            },
            {
                "name": "validateContentType",
                "description": "Whether content type validation should be performed, based on the types defined in the accept attribute. Default is false.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "virusScan",
                "description": "Whether virus scan should be performed. Default is false.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "title",
                "description": "Native title tooltip for simple mode.",
                "type": "java.lang.String"
            },
            {
                "name": "chooseButtonTitle",
                "description": "Native title tooltip for choose button.",
                "type": "java.lang.String"
            },
            {
                "name": "uploadButtonTitle",
                "description": "Native title tooltip for upload button.",
                "type": "java.lang.String"
            },
            {
                "name": "cancelButtonTitle",
                "description": "Native title tooltip for cancel button.",
                "type": "java.lang.String"
            },
            {
                "name": "chooseButtonStyleClass",
                "description": "Style class for choose button.",
                "type": "java.lang.String"
            },
            {
                "name": "uploadButtonStyleClass",
                "description": "Style class for upload button.",
                "type": "java.lang.String"
            },
            {
                "name": "cancelButtonStyleClass",
                "description": "Style class for cancel button.",
                "type": "java.lang.String"
            },
            {
                "name": "dropZone",
                "description": "Component that should be used as the drop zone.",
                "type": "java.lang.String"
            },
            {
                "name": "displayFilename",
                "description": "Simple Mode: if the filename should be displayed.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "ignoreAutoUpdate",
                "description": "If true, components which use p:autoUpdate will not be updated for this request. If not specified, or the value is false, no such indication is made.",
                "type": "java.lang.Boolean"
            }
        ]
    },
    "p:focus": {
        "name": "p:focus",
        "description": "Focus is a handy component that makes it easy to manage the element focus on a Faces page.",
        "attributes": [
            {
                "name": "id",
                "description": "Unique identifier of the component in a namingContainer.",
                "type": "java.lang.String"
            },
            {
                "name": "rendered",
                "description": "Boolean value to specify the rendering of the component, when set to false component will not be rendered.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "binding",
                "description": "An el expression referring to a server side UIComponent instance in a backing bean.",
                "type": "javax.faces.component.UIComponent"
            },
            {
                "name": "for",
                "description": "Specifies the exact component to set focus.",
                "type": "java.lang.String"
            },
            {
                "name": "context",
                "description": "The root component to start first input search.",
                "type": "java.lang.String"
            },
            {
                "name": "minSeverity",
                "description": "Minimum severity level to be used when finding the first invalid component.",
                "type": "java.lang.String"
            }
        ]
    },
    "p:fragment": {
        "name": "p:fragment",
        "description": "Fragment component is used to define automatically partially processed and updated sections.",
        "attributes": [
            {
                "name": "id",
                "description": "Unique identifier of the component in a namingContainer.",
                "type": "java.lang.String"
            },
            {
                "name": "rendered",
                "description": "Boolean value to specify the rendering of the component, when set to false component will not be rendered.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "binding",
                "description": "An el expression referring to a server side UIComponent instance in a backing bean.",
                "type": "javax.faces.component.UIComponent"
            },
            {
                "name": "update",
                "description": "Updates the fragment automatically.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "process",
                "description": "Process the fragment automatically.",
                "type": "java.lang.Boolean"
            }
        ]
    },
    "p:galleria": {
        "name": "p:galleria",
        "description": "Galleria is a content gallery component.",
        "attributes": [
            {
                "name": "id",
                "description": "Unique identifier of the component in a namingContainer.",
                "type": "java.lang.String"
            },
            {
                "name": "rendered",
                "description": "Boolean value to specify the rendering of the component, when set to false component will not be rendered.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "binding",
                "description": "An el expression referring to a server side UIComponent instance in a backing bean.",
                "type": "javax.faces.component.UIComponent"
            },
            {
                "name": "widgetVar",
                "description": "Name of the client side widget.",
                "type": "java.lang.String"
            },
            {
                "name": "value",
                "description": "Collection of images.",
                "type": "java.lang.Object"
            },
            {
                "name": "var",
                "description": "Name of the iterator to display a collection of images.",
                "type": "String"
            },
            {
                "name": "varStatus",
                "description": "Name of the exported request scoped variable for the status of the iteration.",
                "type": "java.lang.String"
            },
            {
                "name": "style",
                "description": "Inline style of the container element.",
                "type": "java.lang.String"
            },
            {
                "name": "styleClass",
                "description": "Style class of the container element.",
                "type": "java.lang.String"
            },
            {
                "name": "activeIndex",
                "description": "Index of the first item.",
                "type": "java.lang.Integer"
            },
            {
                "name": "fullScreen",
                "description": "Whether to display the component on fullscreen.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "closeIcon",
                "description": "Close icon on fullscreen mode.",
                "type": "java.lang.String"
            },
            {
                "name": "numVisible",
                "description": "Number of items per page.",
                "type": "java.lang.Integer"
            },
            {
                "name": "responsiveOptions",
                "description": "A model of options for responsive design.",
                "type": "java.lang.Object"
            },
            {
                "name": "showThumbnails",
                "description": "Whether to display thumbnail container.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "showIndicators",
                "description": "Whether to display indicator container.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "showIndicatorsOnItem",
                "description": "When enabled, indicator container is displayed on item container.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "showCaption",
                "description": "Whether to display caption container.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "showItemNavigators",
                "description": "Whether to display navigation buttons in item container.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "showThumbnailNavigators",
                "description": "Whether to display navigation buttons in thumbnail container.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "showItemNavigatorsOnHover",
                "description": "Whether to display navigation buttons on item container's hover.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "changeItemOnIndicatorHover",
                "description": "When enabled, item is changed on indicator item's hover.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "circular",
                "description": "Defines if scrolling would be infinite.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "autoPlay",
                "description": "Items are displayed with a slideshow in autoPlay mode.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "transitionInterval",
                "description": "Time in milliseconds to scroll items.",
                "type": "java.lang.Integer"
            },
            {
                "name": "thumbnailsPosition",
                "description": "Position of thumbnails. Valid values are \"bottom\", \"top\", \"left\" and \"right\".",
                "type": "java.lang.String"
            },
            {
                "name": "verticalViewPortHeight",
                "description": "Height of the viewport in vertical layout. Default is 450px.",
                "type": "java.lang.String"
            },
            {
                "name": "indicatorsPosition",
                "description": "Position of indicators. Valid values are \"bottom\", \"top\", \"left\" and \"right\".",
                "type": "java.lang.String"
            },
            {
                "name": "tabindex",
                "description": "Position of the output in the tabbing order. Default: \"0\".",
                "type": "java.lang.Integer"
            }
        ]
    },
    "p:gmap": {
        "name": "p:gmap",
        "description": "GMap component is built on Google Maps API Version 3. Gmap is highly integrated with Faces development model and enhanced with AJAX capabilities.",
        "attributes": [
            {
                "name": "id",
                "description": "Unique identifier of the component in a namingContainer.",
                "type": "java.lang.String"
            },
            {
                "name": "rendered",
                "description": "Boolean value to specify the rendering of the component, when set to false component will not be rendered.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "binding",
                "description": "An el expression referring to a server side UIComponent instance in a backing bean.",
                "type": "javax.faces.component.UIComponent"
            },
            {
                "name": "widgetVar",
                "description": "Name of the client side widget.",
                "type": "java.lang.String"
            },
            {
                "name": "model",
                "description": "An org.primefaces.model.MapModel instance.",
                "type": "org.primefaces.model.map.MapModel"
            },
            {
                "name": "style",
                "description": "Inline style of the map container.",
                "type": "java.lang.String"
            },
            {
                "name": "styleClass",
                "description": "Style class of the map container.",
                "type": "java.lang.String"
            },
            {
                "name": "type",
                "description": "There are four types of maps available: roadmap, satellite, hybrid, and terrain. Required.",
                "type": "java.lang.String"
            },
            {
                "name": "center",
                "description": "Center point of the map. Required.",
                "type": "java.lang.String"
            },
            {
                "name": "zoom",
                "description": "Defines the initial zoom level. Default is 8.",
                "type": "java.lang.Integer"
            },
            {
                "name": "streetView",
                "description": "Controls street view support. Default is false.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "disableDefaultUI",
                "description": "Disables default UI controls. Default is false.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "navigationControl",
                "description": "Defines visibility of navigation control. Default is true.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "mapTypeControl",
                "description": "Defines visibility of map type control. Default is true.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "draggable",
                "description": "Defines draggability of map. Default is true.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "disableDoubleClickZoom",
                "description": "Disables zooming on mouse double click. Default is false.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "onPointClick",
                "description": "Javascript callback to execute when a point on map is clicked.",
                "type": "java.lang.String"
            },
            {
                "name": "fitBounds",
                "description": "Defines setting center and zoom values auto by included overlays on startup. Default value is false",
                "type": "java.lang.Boolean"
            },
            {
                "name": "scrollWheel",
                "description": "Controls scrollwheel zooming on the map. Default is true.",
                "type": "java.lang.Boolean"
            }
        ]
    },
    "p:gmapInfoWindow": {
        "name": "p:gmapInfoWindow",
        "description": "GMapInfoWindow is used with GMap component to open a window on map when an overlay is selected.",
        "attributes": [
            {
                "name": "id",
                "description": "Unique identifier of the component in a namingContainer.",
                "type": "java.lang.String"
            },
            {
                "name": "rendered",
                "description": "Boolean value to specify the rendering of the component, when set to false component will not be rendered.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "binding",
                "description": "An el expression referring to a server side UIComponent instance in a backing bean.",
                "type": "javax.faces.component.UIComponent"
            },
            {
                "name": "maxWidth",
                "description": "Maximum width of the info window. Default is min integer value.",
                "type": "java.lang.Integer"
            }
        ]
    },
    "p:graphicImage": {
        "name": "p:graphicImage",
        "description": "GraphicImage extends standard Faces graphic image component with the ability of displaying binary data like an inputstream.\n        Main use cases of GraphicImage is to make displaying images stored in database or on-the-fly images easier.\n        Legacy way to do this is to come up with a Servlet that does the streaming, GraphicImage does all the hard work without the need of a Servlet.",
        "attributes": [
            {
                "name": "id",
                "description": "Unique identifier of the component in a namingContainer.",
                "type": "java.lang.String"
            },
            {
                "name": "rendered",
                "description": "Boolean value to specify the rendering of the component, when set to false component will not be rendered.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "binding",
                "description": "An el expression referring to a server side UIComponent instance in a backing bean.",
                "type": "javax.faces.component.UIComponent"
            },
            {
                "name": "value",
                "description": "Binary data to stream or context relative path.",
                "type": "java.lang.Object"
            },
            {
                "name": "alt",
                "description": "Alternate text for the image.",
                "type": "java.lang.String"
            },
            {
                "name": "url",
                "description": "Alias to value attribute.",
                "type": "java.lang.String"
            },
            {
                "name": "width",
                "description": "Width of the image.",
                "type": "java.lang.String"
            },
            {
                "name": "height",
                "description": "Height of the image.",
                "type": "java.lang.String"
            },
            {
                "name": "title",
                "description": "Title of the image.",
                "type": "java.lang.String"
            },
            {
                "name": "dir",
                "description": "Direction of the text displayed.",
                "type": "java.lang.String"
            },
            {
                "name": "lang",
                "description": "Language code.",
                "type": "java.lang.String"
            },
            {
                "name": "ismap",
                "description": "Specifies to use a server-side image map.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "usemap",
                "description": "Name of the client side map.",
                "type": "java.lang.String"
            },
            {
                "name": "srcset",
                "description": "One or more strings separated by commas, indicating possible image sources for the user agent to use.",
                "type": "java.lang.String"
            },
            {
                "name": "sizes",
                "description": "One or more strings separated by commas, indicating a set of source sizes.",
                "type": "java.lang.String"
            },
            {
                "name": "style",
                "description": "Style of the image.",
                "type": "java.lang.String"
            },
            {
                "name": "styleClass",
                "description": "Style class of the image.",
                "type": "java.lang.String"
            },
            {
                "name": "onclick",
                "description": "onclick dom event handler.",
                "type": "java.lang.String"
            },
            {
                "name": "ondblclick",
                "description": "ondblclick dom event handler.",
                "type": "java.lang.String"
            },
            {
                "name": "onkeydown",
                "description": "onkeydown dom event handler.",
                "type": "java.lang.String"
            },
            {
                "name": "onkeypress",
                "description": "onkeypress dom event handler.",
                "type": "java.lang.String"
            },
            {
                "name": "onkeyup",
                "description": "onkeyup dom event handler.",
                "type": "java.lang.String"
            },
            {
                "name": "onmousedown",
                "description": "onmousedown dom event handler.",
                "type": "java.lang.String"
            },
            {
                "name": "onmousemove",
                "description": "onmousemove dom event handler.",
                "type": "java.lang.String"
            },
            {
                "name": "onmouseout",
                "description": "onmouseout dom event handler.",
                "type": "java.lang.String"
            },
            {
                "name": "onmouseover",
                "description": "onmouseover dom event handler.",
                "type": "java.lang.String"
            },
            {
                "name": "onmouseup",
                "description": "onmouseup dom event handler.",
                "type": "java.lang.String"
            },
            {
                "name": "cache",
                "description": "Controls browser caching mode of the resource. Default is true",
                "type": "java.lang.Boolean"
            },
            {
                "name": "name",
                "description": "Name of the image",
                "type": "java.lang.String"
            },
            {
                "name": "library",
                "description": "Library name of the image",
                "type": "java.lang.String"
            },
            {
                "name": "stream",
                "description": "Defines if the image is streamed or rendered directly as data uri / base64 with ViewScoped support.",
                "type": "java.lang.Boolean"
            }
        ]
    },
    "p:growl": {
        "name": "p:growl",
        "description": "Growl is based on the Mac's growl notification widget and used to display FacesMessages similar to h:messages.",
        "attributes": [
            {
                "name": "id",
                "description": "Unique identifier of the component in a namingContainer.",
                "type": "java.lang.String"
            },
            {
                "name": "rendered",
                "description": "Boolean value to specify the rendering of the component, when set to false component will not be rendered.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "binding",
                "description": "An el expression referring to a server side UIComponent instance in a backing bean.",
                "type": "javax.faces.component.UIComponent"
            },
            {
                "name": "widgetVar",
                "description": "Name of the client side widget.",
                "type": "java.lang.String"
            },
            {
                "name": "sticky",
                "description": "Specifies if the message should stay instead of hidden automatically. Default is false.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "showSummary",
                "description": "Specifies if the summary of message should be displayed. Default is true.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "showDetail",
                "description": "Specifies if the detail of message should be displayed. Default is false.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "globalOnly",
                "description": "When true, only facesmessages without client-ids are displayed. Default is false.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "life",
                "description": "Duration in milliseconds to display non-sticky messages. Default is 800.",
                "type": "java.lang.Integer"
            },
            {
                "name": "redisplay",
                "description": "Defines if already rendered messages should be displayed. Default is true.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "for",
                "description": "Identifier of the component whose messages to display only, takes precendence when used with globalOnly.",
                "type": "java.lang.String"
            },
            {
                "name": "escape",
                "description": "Defines whether html would be escaped or not, defaults to true.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "severity",
                "description": "Comma seperated list of severities to display only.",
                "type": "java.lang.String"
            },
            {
                "name": "keepAlive",
                "description": "Defines if previous messages should be kept on a new message is shown. Default is false.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "skipDetailIfEqualsSummary",
                "description": "Defines if rendering of the detail text should be skipped, if the detail and summaray are equals. Default is false.",
                "type": "java.lang.Boolean"
            }
        ]
    },
    "p:headerRow": {
        "name": "p:headerRow",
        "description": "HeaderRow is a helper component for row grouping.",
        "attributes": [
            {
                "name": "id",
                "description": "Unique identifier of the component in a namingContainer.",
                "type": "java.lang.String"
            },
            {
                "name": "rendered",
                "description": "Boolean value to specify the rendering of the component, when set to false component will not be rendered.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "binding",
                "description": "An el expression referring to a server side UIComponent instance in a backing bean.",
                "type": "javax.faces.component.UIComponent"
            },
            {
                "name": "field",
                "description": "Name of the field associated to bean \"var\".",
                "type": "java.lang.String"
            },
            {
                "name": "groupBy",
                "description": "Property to be used for grouping.",
                "type": "java.lang.Object"
            },
            {
                "name": "sortOrder",
                "description": "Sets default sorting order. Possible values \"asc\", \"desc\" or null",
                "type": "java.lang.String"
            },
            {
                "name": "style",
                "description": "Inline style of the column.",
                "type": "java.lang.String"
            },
            {
                "name": "styleClass",
                "description": "Style class of the column.",
                "type": "java.lang.String"
            },
            {
                "name": "sortFunction",
                "description": "Custom pluggable sortFunction.",
                "type": "javax.el.MethodExpression"
            },
            {
                "name": "expandable",
                "description": "Makes row groups toggleable, default is false.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "expanded",
                "description": "Boolean value to specify whether the row group will be rendered expanded or closed. Default true.",
                "type": "java.lang.Boolean"
            }
        ]
    },
    "p:hotkey": {
        "name": "p:hotkey",
        "description": "HotKey is a generic key binding component that can bind any formation of keys to javascript event handlers or ajax calls.",
        "attributes": [
            {
                "name": "id",
                "description": "Unique identifier of the component in a namingContainer.",
                "type": "java.lang.String"
            },
            {
                "name": "rendered",
                "description": "Boolean value to specify the rendering of the component, when set to false component will not be rendered.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "binding",
                "description": "An el expression referring to a server side UIComponent instance in a backing bean.",
                "type": "javax.faces.component.UIComponent"
            },
            {
                "name": "actionListener",
                "description": "An actionlistener that'd be processed in the partial request caused by uiajax.",
                "type": "javax.faces.event.ActionListener"
            },
            {
                "name": "action",
                "description": "A method expression that'd be processed in the partial request caused by uiajax.",
                "type": "javax.el.MethodExpression"
            },
            {
                "name": "immediate",
                "description": "Boolean value that determines the phaseId, when true actions are processed at apply_request_values, when false at invoke_application phase.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "bind",
                "description": "The key binding. Required.",
                "type": "java.lang.String"
            },
            {
                "name": "bindMac",
                "description": "An alternative key binding for macOS.",
                "type": "java.lang.String"
            },
            {
                "name": "update",
                "description": "Client side id of the component(s) to be updated after async partial submit request.",
                "type": "java.lang.String"
            },
            {
                "name": "process",
                "description": "Component id(s) to process partially instead of whole view.",
                "type": "java.lang.String"
            },
            {
                "name": "handler",
                "description": "Javascript event handler to be executed when the key binding is pressed.",
                "type": "java.lang.String"
            },
            {
                "name": "onstart",
                "description": "Javascript handler to execute before ajax request begins.",
                "type": "java.lang.String"
            },
            {
                "name": "oncomplete",
                "description": "Javascript handler to execute when ajax request is completed.",
                "type": "java.lang.String"
            },
            {
                "name": "onerror",
                "description": "Javascript handler to execute when ajax request fails.",
                "type": "java.lang.String"
            },
            {
                "name": "onsuccess",
                "description": "Javascript handler to execute when ajax request succeeds.",
                "type": "java.lang.String"
            },
            {
                "name": "global",
                "description": "Global ajax requests are listened by ajaxStatus component, setting global to false will not trigger ajaxStatus. Default is true.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "delay",
                "description": "If less than delay milliseconds elapses between calls to request() only the most recent one is sent and all other requests are discarded. The default value of this option is null. If the value of delay is the literal string 'none' without the quotes or the default, no delay is used.",
                "type": "java.lang.String"
            },
            {
                "name": "timeout",
                "description": "Defines the timeout for the ajax request.",
                "type": "java.lang.Integer"
            },
            {
                "name": "async",
                "description": "When set to true, ajax requests are not queued. Default is false.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "partialSubmit",
                "description": "When enabled, only values related to partially processed components would be serialized for ajax\n                instead of whole form.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "resetValues",
                "description": "If true, indicate that this particular Ajax transaction is a value reset transaction. This will cause resetValue() to be called on any EditableValueHolder instances encountered as a result of this ajax transaction. If not specified, or the value is false, no such indication is made.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "ignoreAutoUpdate",
                "description": "If true, components which use p:autoUpdate will not be updated for this request. If not specified, or the value is false, no such indication is made.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "partialSubmitFilter",
                "description": "Selector to use when partial submit is on, default is \":input\" to select all descendant inputs of a partially processed components.",
                "type": "java.lang.String"
            },
            {
                "name": "form",
                "description": "Form to serialize for an ajax request. Default is the enclosing form.",
                "type": "java.lang.String"
            },
            {
                "name": "ignoreComponentNotFound",
                "description": "If true, unresolvable components referenced in the update/process attribute are ignored. Default is 'false' and therefore a ComponentNotFoundException will be thrown.",
                "type": "java.lang.Boolean"
            }
        ]
    },
    "p:idleMonitor": {
        "name": "p:idleMonitor",
        "description": "IdleMonitor watches user actions on a page and notify several callbacks in case they go idle or active again.",
        "attributes": [
            {
                "name": "id",
                "description": "Unique identifier of the component in a namingContainer.",
                "type": "java.lang.String"
            },
            {
                "name": "rendered",
                "description": "Boolean value to specify the rendering of the component, when set to false component will not be rendered.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "binding",
                "description": "An el expression referring to a server side UIComponent instance in a backing bean.",
                "type": "javax.faces.component.UIComponent"
            },
            {
                "name": "widgetVar",
                "description": "Name of the client side widget.",
                "type": "java.lang.String"
            },
            {
                "name": "timeout",
                "description": "Time to wait in milliseconds until deciding if the user is idle. Default is 5 minutes.",
                "type": "java.lang.Integer"
            },
            {
                "name": "onidle",
                "description": "Client side callback to execute when user goes idle.",
                "type": "java.lang.String"
            },
            {
                "name": "onactive",
                "description": "Client side callback to execute when user is active again.",
                "type": "java.lang.String"
            },
            {
                "name": "multiWindowSupport",
                "description": "When set to true, the lastAccessed state will be shared between all browser windows for the same servlet context.",
                "type": "java.lang.Boolean"
            }
        ]
    },
    "p:imageCompare": {
        "name": "p:imageCompare",
        "description": "ImageCompare provides a rich user interface to compare two images.",
        "attributes": [
            {
                "name": "id",
                "description": "Unique identifier of the component in a namingContainer.",
                "type": "java.lang.String"
            },
            {
                "name": "rendered",
                "description": "Boolean value to specify the rendering of the component, when set to false component will not be rendered.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "binding",
                "description": "An el expression referring to a server side UIComponent instance in a backing bean.",
                "type": "javax.faces.component.UIComponent"
            },
            {
                "name": "widgetVar",
                "description": "Name of the client side widget.",
                "type": "java.lang.String"
            },
            {
                "name": "leftImage",
                "description": "Source of the image placed on the left side.",
                "type": "java.lang.String"
            },
            {
                "name": "rightImage",
                "description": "Source of the image placed on the right side",
                "type": "java.lang.String"
            },
            {
                "name": "width",
                "description": "Width of the images.",
                "type": "java.lang.String"
            },
            {
                "name": "height",
                "description": "Height of the images.",
                "type": "java.lang.String"
            },
            {
                "name": "style",
                "description": "Style of the image container element.",
                "type": "java.lang.String"
            },
            {
                "name": "styleClass",
                "description": "Style class of the image container element.",
                "type": "java.lang.String"
            }
        ]
    },
    "p:imageCropper": {
        "name": "p:imageCropper",
        "description": "ImageCropper allows cropping a certain region of an image. A new image is created containing the cropped area and assigned to a CroppedImage instanced on the server side.",
        "attributes": [
            {
                "name": "id",
                "description": "Unique identifier of the component in a namingContainer.",
                "type": "java.lang.String"
            },
            {
                "name": "rendered",
                "description": "Boolean value to specify the rendering of the component, when set to false component will not be rendered.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "binding",
                "description": "An el expression referring to a server side UIComponent instance in a backing bean.",
                "type": "javax.faces.component.UIComponent"
            },
            {
                "name": "value",
                "description": "Value of the component.",
                "type": "java.lang.Object"
            },
            {
                "name": "converter",
                "description": "An el expression or a literal text that defines a converter for the component. When it's an EL expression, it's resolved to a converter instance.\n    In case it's a static text, it must refer to a converter id.",
                "type": "javax.faces.convert.Converter"
            },
            {
                "name": "immediate",
                "description": "When set true, process validations logic is executed at apply request values phase for this component. Default is false.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "required",
                "description": "Marks component as required.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "validator",
                "description": "A method expression referring to a method validating the input.",
                "type": "javax.faces.validator.Validator"
            },
            {
                "name": "valueChangeListener",
                "description": "A method binding expression referring to a method for handling a valuchangeevent.",
                "type": "javax.faces.event.ValueChangeListener"
            },
            {
                "name": "requiredMessage",
                "description": "Message to display when required field validation fails.",
                "type": "java.lang.String"
            },
            {
                "name": "converterMessage",
                "description": "Message to display when conversion fails.",
                "type": "java.lang.String"
            },
            {
                "name": "validatorMessage",
                "description": "Message to display when validation fails.",
                "type": "java.lang.String"
            },
            {
                "name": "widgetVar",
                "description": "Name of the client side widget.",
                "type": "java.lang.String"
            },
            {
                "name": "image",
                "description": "Binary data to stream or context relative path",
                "type": "java.lang.Object"
            },
            {
                "name": "alt",
                "description": "Alternate text of the image.",
                "type": "java.lang.String"
            },
            {
                "name": "aspectRatio",
                "description": "Aspect ratio of the cropper area.",
                "type": "java.lang.Double"
            },
            {
                "name": "minSize",
                "description": "Minimum size of the cropper area.",
                "type": "java.lang.String"
            },
            {
                "name": "maxSize",
                "description": "Maximum size of the cropper area.",
                "type": "java.lang.String"
            },
            {
                "name": "initialCoords",
                "description": "Initial coordinates of the cropper area.",
                "type": "java.lang.String"
            },
            {
                "name": "boxWidth",
                "description": "Maximum box width of the cropping area.",
                "type": "java.lang.Integer"
            },
            {
                "name": "boxHeight",
                "description": "Maximum box height of the cropping area.",
                "type": "java.lang.Integer"
            },
            {
                "name": "sizeLimit",
                "description": "Maximum number of bytes the image may consist of. Default is 10MB.",
                "type": "java.lang.Long"
            },
            {
                "name": "responsive",
                "description": "Re-render the cropper when resizing the window. Default is true.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "guides",
                "description": "Show the dashed lines in the crop box. Default is true.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "viewMode",
                "description": "Define the view mode of the cropper. If you set viewMode to 0, the crop box can extend outside the canvas, while a value of 1, 2 or 3 will restrict the crop box to the size of the canvas. A viewMode of 2 or 3 will additionally restrict the canvas to the container. Note that if the proportions of the canvas and the container are the same, there is no difference between 2 and 3. Default is 1.",
                "type": "java.lang.Integer"
            },
            {
                "name": "cache",
                "description": "Controls browser caching mode of the resource. Default is true",
                "type": "java.lang.Boolean"
            },
            {
                "name": "zoomOnTouch",
                "description": "Enable to zoom the image by dragging touch. Default is true.",
                "type": "boolean"
            },
            {
                "name": "zoomOnWheel",
                "description": "Enable to zoom the image by wheeling mouse. Default is true.",
                "type": "boolean"
            }
        ]
    },
    "p:imageSwitch": {
        "name": "p:imageSwitch",
        "description": "Imageswitch component is used to enable switching between a set of images with nice effects. ImageSwitch also provides a simple client side api for flexibility.",
        "attributes": [
            {
                "name": "id",
                "description": "Unique identifier of the component in a namingContainer.",
                "type": "java.lang.String"
            },
            {
                "name": "rendered",
                "description": "Boolean value to specify the rendering of the component, when set to false component will not be rendered.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "binding",
                "description": "An el expression referring to a server side UIComponent instance in a backing bean.",
                "type": "javax.faces.component.UIComponent"
            },
            {
                "name": "widgetVar",
                "description": "Name of the client side widget.",
                "type": "java.lang.String"
            },
            {
                "name": "style",
                "description": "Style of the main container.",
                "type": "java.lang.String"
            },
            {
                "name": "styleClass",
                "description": "Style class of the main container.",
                "type": "java.lang.String"
            },
            {
                "name": "effect",
                "description": "Name of the effect for transition. Required.",
                "type": "java.lang.String"
            },
            {
                "name": "speed",
                "description": "Speed of the effect in milliseconds. Default is 500.",
                "type": "java.lang.Integer"
            },
            {
                "name": "slideshowSpeed",
                "description": "Slideshow speed in milliseconds. Default is 3000.",
                "type": "java.lang.Integer"
            },
            {
                "name": "slideshowAuto",
                "description": "Starts slideshow automatically on page load. Default is true.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "activeIndex",
                "description": "Index of the first image, default is 0.",
                "type": "java.lang.Integer"
            }
        ]
    },
    "p:inplace": {
        "name": "p:inplace",
        "description": "Inplace provides easy inplace editing and inline content display.\n        Inplace consists of two members, display element is the inital clickable label and inline element is the hidden content\n        that'll be displayed when display element is toggled.",
        "attributes": [
            {
                "name": "id",
                "description": "Unique identifier of the component in a namingContainer.",
                "type": "java.lang.String"
            },
            {
                "name": "rendered",
                "description": "Boolean value to specify the rendering of the component, when set to false component will not be rendered.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "binding",
                "description": "An el expression referring to a server side UIComponent instance in a backing bean.",
                "type": "javax.faces.component.UIComponent"
            },
            {
                "name": "widgetVar",
                "description": "Name of the client side widget.",
                "type": "java.lang.String"
            },
            {
                "name": "label",
                "description": "Label to be shown in display mode.",
                "type": "java.lang.String"
            },
            {
                "name": "emptyLabel",
                "description": "Label to be shown in display mode when value is empty.",
                "type": "java.lang.String"
            },
            {
                "name": "effect",
                "description": "Effect to be used when toggling. Default fade.",
                "type": "java.lang.String"
            },
            {
                "name": "effectSpeed",
                "description": "Speed of the effect. Default normal.",
                "type": "java.lang.String"
            },
            {
                "name": "disabled",
                "description": "Prevents hidden content to be shown.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "style",
                "description": "Inline style of the main container element.",
                "type": "java.lang.String"
            },
            {
                "name": "styleClass",
                "description": "Style class of the main container element.",
                "type": "java.lang.String"
            },
            {
                "name": "editor",
                "description": "Displays \"Save\" and \"Cancel\" buttons when content is displayed. Default is \"false\".",
                "type": "java.lang.Boolean"
            },
            {
                "name": "saveLabel",
                "description": "Tooltip text of save button in editor mode. Default is \"Save\"",
                "type": "java.lang.String"
            },
            {
                "name": "cancelLabel",
                "description": "Tooltip text of cancel button in editor mode. Default is \"Cancel\"",
                "type": "java.lang.String"
            },
            {
                "name": "event",
                "description": "Name of the client side event to display inline content. Default is click.",
                "type": "java.lang.String"
            },
            {
                "name": "toggleable",
                "description": "Defines if inplace is toggleable or not.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "mode",
                "description": "Defines the default mode to display (input or output). Default: output.",
                "type": "java.lang.String"
            },
            {
                "name": "tabindex",
                "description": "Position of the output in the tabbing order. Default: \"0\".",
                "type": "java.lang.String"
            }
        ]
    },
    "p:inputMask": {
        "name": "p:inputMask",
        "description": "InputMask forces an input to fit in a defined mask template.",
        "attributes": [
            {
                "name": "id",
                "description": "Unique identifier of the component in a namingContainer.",
                "type": "java.lang.String"
            },
            {
                "name": "rendered",
                "description": "Boolean value to specify the rendering of the component, when set to false component will not be rendered.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "binding",
                "description": "An el expression referring to a server side UIComponent instance in a backing bean.",
                "type": "javax.faces.component.UIComponent"
            },
            {
                "name": "value",
                "description": "Value of the component.",
                "type": "java.lang.Object"
            },
            {
                "name": "converter",
                "description": "An el expression or a literal text that defines a converter for the component. When it's an EL expression, it's resolved to a converter instance.\n    In case it's a static text, it must refer to a converter id.",
                "type": "javax.faces.convert.Converter"
            },
            {
                "name": "immediate",
                "description": "When set true, process validations logic is executed at apply request values phase for this component. Default is false.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "required",
                "description": "Marks component as required.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "validator",
                "description": "A method expression referring to a method validating the input.",
                "type": "javax.faces.validator.Validator"
            },
            {
                "name": "valueChangeListener",
                "description": "A method binding expression referring to a method for handling a valuchangeevent.",
                "type": "javax.faces.event.ValueChangeListener"
            },
            {
                "name": "requiredMessage",
                "description": "Message to display when required field validation fails.",
                "type": "java.lang.String"
            },
            {
                "name": "converterMessage",
                "description": "Message to display when conversion fails.",
                "type": "java.lang.String"
            },
            {
                "name": "validatorMessage",
                "description": "Message to display when validation fails.",
                "type": "java.lang.String"
            },
            {
                "name": "accesskey",
                "description": "Access key to transfer focus to the input element.",
                "type": "java.lang.String"
            },
            {
                "name": "alt",
                "description": "Alternate textual description of the input element.",
                "type": "java.lang.String"
            },
            {
                "name": "autocomplete",
                "description": "Controls browser autocomplete behavior.",
                "type": "java.lang.String"
            },
            {
                "name": "dir",
                "description": "Direction indication for text that does not inherit directionality.",
                "type": "java.lang.String"
            },
            {
                "name": "disabled",
                "description": "Disables the input element, default is false.",
                "type": "boolean"
            },
            {
                "name": "label",
                "description": "A localized user presentable name.",
                "type": "java.lang.String"
            },
            {
                "name": "lang",
                "description": "Code describing the language used in the generated markup.",
                "type": "java.lang.String"
            },
            {
                "name": "maxlength",
                "description": "Maximum number of characters that may be entered in this field.",
                "type": "int"
            },
            {
                "name": "onblur",
                "description": "Client side callback to execute when input element loses focus.",
                "type": "java.lang.String"
            },
            {
                "name": "onchange",
                "description": "Client side callback to execute when input element loses focus and its value has been modified since gaining focus.",
                "type": "java.lang.String"
            },
            {
                "name": "onclick",
                "description": "Client side callback to execute when input element is clicked.",
                "type": "java.lang.String"
            },
            {
                "name": "ondblclick",
                "description": "Client side callback to execute when input element is double clicked.",
                "type": "java.lang.String"
            },
            {
                "name": "onfocus",
                "description": "Client side callback to execute when input element receives focus.",
                "type": "java.lang.String"
            },
            {
                "name": "onkeydown",
                "description": "Client side callback to execute when a key is pressed down over input element.",
                "type": "java.lang.String"
            },
            {
                "name": "onkeypress",
                "description": "Client side callback to execute when a key is pressed and released over input element.",
                "type": "java.lang.String"
            },
            {
                "name": "onkeyup",
                "description": "Client side callback to execute when a key is released over input element.",
                "type": "java.lang.String"
            },
            {
                "name": "onmousedown",
                "description": "Client side callback to execute when a pointer input element is pressed down over input element.",
                "type": "java.lang.String"
            },
            {
                "name": "onmousemove",
                "description": "Client side callback to execute when a pointer input element is moved within input element.",
                "type": "java.lang.String"
            },
            {
                "name": "onmouseout",
                "description": "Client side callback to execute when a pointer input element is moved away from input element.",
                "type": "java.lang.String"
            },
            {
                "name": "onmouseover",
                "description": "Client side callback to execute when a pointer input element is moved onto input element.",
                "type": "java.lang.String"
            },
            {
                "name": "onmouseup",
                "description": "Client side callback to execute when a pointer input element is released over input element.",
                "type": "java.lang.String"
            },
            {
                "name": "onwheel",
                "description": "Client side callback to execute when the mouse wheel rolls up or down over an element.",
                "type": "java.lang.String"
            },
            {
                "name": "onselect",
                "description": "Client side callback to execute when text within input element is selected by user.",
                "type": "java.lang.String"
            },
            {
                "name": "oncut",
                "description": "Client side callback to execute when the user copies the content of an element.",
                "type": "java.lang.String"
            },
            {
                "name": "oncopy",
                "description": "Client side callback to execute when the user cuts the content of an element.",
                "type": "java.lang.String"
            },
            {
                "name": "onpaste",
                "description": "Client side callback to execute when the user pastes some content in an element.",
                "type": "java.lang.String"
            },
            {
                "name": "oninput",
                "description": "Client side callback to execute when an element gets user input.",
                "type": "java.lang.String"
            },
            {
                "name": "oncontextmenu",
                "description": "Client side callback to execute when a context menu is triggered.",
                "type": "java.lang.String"
            },
            {
                "name": "oninvalid",
                "description": "Client side callback to execute when an element is invalid.",
                "type": "java.lang.String"
            },
            {
                "name": "onreset",
                "description": "Client side callback to execute when the Reset button in a form is clicked.",
                "type": "java.lang.String"
            },
            {
                "name": "onsearch",
                "description": "Client side callback to execute when the user writes something in a search field.",
                "type": "java.lang.String"
            },
            {
                "name": "ondrag",
                "description": "Client side callback to execute when an element is dragged.",
                "type": "java.lang.String"
            },
            {
                "name": "ondragend",
                "description": "Client side callback to execute at the end of a drag operation.",
                "type": "java.lang.String"
            },
            {
                "name": "ondragenter",
                "description": "Client side callback to execute when an element has been dragged to a valid drop target.",
                "type": "java.lang.String"
            },
            {
                "name": "ondragleave",
                "description": "Client side callback to execute when an element leaves a valid drop target.",
                "type": "java.lang.String"
            },
            {
                "name": "ondragover",
                "description": "Client side callback to execute when an element is being dragged over a valid drop target.",
                "type": "java.lang.String"
            },
            {
                "name": "ondragstart",
                "description": "Client side callback to execute at the start of a drag operation.",
                "type": "java.lang.String"
            },
            {
                "name": "ondrop",
                "description": "Client side callback to execute when dragged element is being dropped.",
                "type": "java.lang.String"
            },
            {
                "name": "onscroll",
                "description": "Client side callback to execute when an element's scrollbar is being scrolled.",
                "type": "java.lang.String"
            },
            {
                "name": "readonly",
                "description": "Flag indicating that this component will prevent changes by the user.",
                "type": "boolean"
            },
            {
                "name": "size",
                "description": "Number of characters used to determine the width of the input element.",
                "type": "int"
            },
            {
                "name": "style",
                "description": "Inline style of the component.",
                "type": "java.lang.String"
            },
            {
                "name": "styleClass",
                "description": "Style class of the component.",
                "type": "java.lang.String"
            },
            {
                "name": "tabindex",
                "description": "Position of the element in the tabbing order.",
                "type": "java.lang.String"
            },
            {
                "name": "title",
                "description": "Advisory tooltip information.",
                "type": "java.lang.String"
            },
            {
                "name": "placeholder",
                "description": "The placeholder attribute specifies a short hint that describes the expected value of an input field.",
                "type": "java.lang.String"
            },
            {
                "name": "widgetVar",
                "description": "Name of the client side widget.",
                "type": "java.lang.String"
            },
            {
                "name": "mask",
                "description": "Mask template.",
                "type": "java.lang.String"
            },
            {
                "name": "slotChar",
                "description": "PlaceHolder in mask template.",
                "type": "java.lang.String"
            },
            {
                "name": "autoClear",
                "description": "Clears the field on blur when incomplete input is entered.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "type",
                "description": "Input field type. Default is text.",
                "type": "java.lang.String"
            },
            {
                "name": "validateMask",
                "description": "Defines whether mask pattern would be validated or not on the server side.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "showMaskOnFocus",
                "description": "Shows the mask when the input gets focus. Default is true.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "showMaskOnHover",
                "description": "Shows the mask when hovering the mouse. Default is true.",
                "type": "java.lang.Boolean"
            }
        ]
    },
    "p:inputNumber": {
        "name": "p:inputNumber",
        "description": "InputNumber is an extension to the InputText with optimized handling for numbers.",
        "attributes": [
            {
                "name": "id",
                "description": "Unique identifier of the component in a namingContainer.",
                "type": "java.lang.String"
            },
            {
                "name": "rendered",
                "description": "Boolean value to specify the rendering of the component, when set to false component will not be rendered.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "binding",
                "description": "An el expression referring to a server side UIComponent instance in a backing bean.",
                "type": "javax.faces.component.UIComponent"
            },
            {
                "name": "value",
                "description": "Value of the component.",
                "type": "java.lang.Object"
            },
            {
                "name": "converter",
                "description": "An el expression or a literal text that defines a converter for the component. When it's an EL expression, it's resolved to a converter instance.\n    In case it's a static text, it must refer to a converter id.",
                "type": "javax.faces.convert.Converter"
            },
            {
                "name": "immediate",
                "description": "When set true, process validations logic is executed at apply request values phase for this component. Default is false.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "required",
                "description": "Marks component as required.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "validator",
                "description": "A method expression referring to a method validating the input.",
                "type": "javax.faces.validator.Validator"
            },
            {
                "name": "valueChangeListener",
                "description": "A method binding expression referring to a method for handling a valuchangeevent.",
                "type": "javax.faces.event.ValueChangeListener"
            },
            {
                "name": "requiredMessage",
                "description": "Message to display when required field validation fails.",
                "type": "java.lang.String"
            },
            {
                "name": "converterMessage",
                "description": "Message to display when conversion fails.",
                "type": "java.lang.String"
            },
            {
                "name": "validatorMessage",
                "description": "Message to display when validation fails.",
                "type": "java.lang.String"
            },
            {
                "name": "accesskey",
                "description": "Access key to transfer focus to the input element.",
                "type": "java.lang.String"
            },
            {
                "name": "alt",
                "description": "Alternate textual description of the input element.",
                "type": "java.lang.String"
            },
            {
                "name": "autocomplete",
                "description": "Controls browser autocomplete behavior.",
                "type": "java.lang.String"
            },
            {
                "name": "dir",
                "description": "Direction indication for text that does not inherit directionality.",
                "type": "java.lang.String"
            },
            {
                "name": "disabled",
                "description": "Disables the input element, default is false.",
                "type": "boolean"
            },
            {
                "name": "label",
                "description": "A localized user presentable name.",
                "type": "java.lang.String"
            },
            {
                "name": "lang",
                "description": "Code describing the language used in the generated markup.",
                "type": "java.lang.String"
            },
            {
                "name": "maxlength",
                "description": "DO NOT USE! To limit the number of digits...set minValue, maxValue and/or decimalPlaces accordingly.",
                "type": "int"
            },
            {
                "name": "onblur",
                "description": "Client side callback to execute when input element loses focus.",
                "type": "java.lang.String"
            },
            {
                "name": "onchange",
                "description": "Client side callback to execute when input element loses focus and its value has been modified since gaining focus.",
                "type": "java.lang.String"
            },
            {
                "name": "onclick",
                "description": "Client side callback to execute when input element is clicked.",
                "type": "java.lang.String"
            },
            {
                "name": "ondblclick",
                "description": "Client side callback to execute when input element is double clicked.",
                "type": "java.lang.String"
            },
            {
                "name": "onfocus",
                "description": "Client side callback to execute when input element receives focus.",
                "type": "java.lang.String"
            },
            {
                "name": "onkeydown",
                "description": "Client side callback to execute when a key is pressed down over input element.",
                "type": "java.lang.String"
            },
            {
                "name": "onkeypress",
                "description": "Client side callback to execute when a key is pressed and released over input element.",
                "type": "java.lang.String"
            },
            {
                "name": "onkeyup",
                "description": "Client side callback to execute when a key is released over input element.",
                "type": "java.lang.String"
            },
            {
                "name": "onmousedown",
                "description": "Client side callback to execute when a pointer input element is pressed down over input element.",
                "type": "java.lang.String"
            },
            {
                "name": "onmousemove",
                "description": "Client side callback to execute when a pointer input element is moved within input element.",
                "type": "java.lang.String"
            },
            {
                "name": "onmouseout",
                "description": "Client side callback to execute when a pointer input element is moved away from input element.",
                "type": "java.lang.String"
            },
            {
                "name": "onmouseover",
                "description": "Client side callback to execute when a pointer input element is moved onto input element.",
                "type": "java.lang.String"
            },
            {
                "name": "onmouseup",
                "description": "Client side callback to execute when a pointer input element is released over input element.",
                "type": "java.lang.String"
            },
            {
                "name": "onwheel",
                "description": "Client side callback to execute when the mouse wheel rolls up or down over an element.",
                "type": "java.lang.String"
            },
            {
                "name": "onselect",
                "description": "Client side callback to execute when text within input element is selected by user.",
                "type": "java.lang.String"
            },
            {
                "name": "oncut",
                "description": "Client side callback to execute when the user copies the content of an element.",
                "type": "java.lang.String"
            },
            {
                "name": "oncopy",
                "description": "Client side callback to execute when the user cuts the content of an element.",
                "type": "java.lang.String"
            },
            {
                "name": "onpaste",
                "description": "Client side callback to execute when the user pastes some content in an element.",
                "type": "java.lang.String"
            },
            {
                "name": "oninput",
                "description": "Client side callback to execute when an element gets user input.",
                "type": "java.lang.String"
            },
            {
                "name": "oncontextmenu",
                "description": "Client side callback to execute when a context menu is triggered.",
                "type": "java.lang.String"
            },
            {
                "name": "oninvalid",
                "description": "Client side callback to execute when an element is invalid.",
                "type": "java.lang.String"
            },
            {
                "name": "onreset",
                "description": "Client side callback to execute when the Reset button in a form is clicked.",
                "type": "java.lang.String"
            },
            {
                "name": "onsearch",
                "description": "Client side callback to execute when the user writes something in a search field.",
                "type": "java.lang.String"
            },
            {
                "name": "ondrag",
                "description": "Client side callback to execute when an element is dragged.",
                "type": "java.lang.String"
            },
            {
                "name": "ondragend",
                "description": "Client side callback to execute at the end of a drag operation.",
                "type": "java.lang.String"
            },
            {
                "name": "ondragenter",
                "description": "Client side callback to execute when an element has been dragged to a valid drop target.",
                "type": "java.lang.String"
            },
            {
                "name": "ondragleave",
                "description": "Client side callback to execute when an element leaves a valid drop target.",
                "type": "java.lang.String"
            },
            {
                "name": "ondragover",
                "description": "Client side callback to execute when an element is being dragged over a valid drop target.",
                "type": "java.lang.String"
            },
            {
                "name": "ondragstart",
                "description": "Client side callback to execute at the start of a drag operation.",
                "type": "java.lang.String"
            },
            {
                "name": "ondrop",
                "description": "Client side callback to execute when dragged element is being dropped.",
                "type": "java.lang.String"
            },
            {
                "name": "onscroll",
                "description": "Client side callback to execute when an element's scrollbar is being scrolled.",
                "type": "java.lang.String"
            },
            {
                "name": "readonly",
                "description": "Flag indicating that this component will prevent changes by the user.",
                "type": "boolean"
            },
            {
                "name": "size",
                "description": "Number of characters used to determine the width of the input element.",
                "type": "int"
            },
            {
                "name": "style",
                "description": "Inline style of the component.",
                "type": "java.lang.String"
            },
            {
                "name": "styleClass",
                "description": "Style class of the component.",
                "type": "java.lang.String"
            },
            {
                "name": "tabindex",
                "description": "Position of the element in the tabbing order.",
                "type": "java.lang.String"
            },
            {
                "name": "title",
                "description": "Advisory tooltip information.",
                "type": "java.lang.String"
            },
            {
                "name": "placeholder",
                "description": "The placeholder attribute specifies a short hint that describes the expected value of an input field.",
                "type": "java.lang.String"
            },
            {
                "name": "widgetVar",
                "description": "Name of the client side widget.",
                "type": "java.lang.String"
            },
            {
                "name": "type",
                "description": "Input field type. Valid values are \"text\"(default), \"tel\" and \"hidden\".",
                "type": "java.lang.String"
            },
            {
                "name": "decimalSeparator",
                "description": "Decimal separator char. Default is taken from the view's locale.",
                "type": "java.lang.String"
            },
            {
                "name": "thousandSeparator",
                "description": "Thousand separator char. Default is taken from the view's locale.",
                "type": "java.lang.String"
            },
            {
                "name": "symbol",
                "description": "Desired symbol or unit. Default is none.",
                "type": "java.lang.String"
            },
            {
                "name": "symbolPosition",
                "description": "Position of the symbol. 'p' for prefix 's' for suffix",
                "type": "java.lang.String"
            },
            {
                "name": "signPosition",
                "description": "Placement of the negative/positive sign relative to the symbolPosition option The sign is placed on either side of the symbolPosition, which can be placed on either side of the numbers. 'p' for prefix 's' for suffix 'l' for left 'r' for right",
                "type": "java.lang.String"
            },
            {
                "name": "minValue",
                "description": "Minimum value. Warning: If minValue is greater than 0, then you will effectively prevent your users to entirely delete the content of their input. Default is -10000000000000.",
                "type": "java.lang.String"
            },
            {
                "name": "maxValue",
                "description": "Maximum values. Default is 10000000000000.",
                "type": "java.lang.String"
            },
            {
                "name": "roundMethod",
                "description": "Controls the rounding method. Default is Round-Half-Up Symmetric.",
                "type": "java.lang.String"
            },
            {
                "name": "decimalPlaces",
                "description": "Number of decimal places. If value is Integer/Long/Short number defaults to 0 else defaults to 2.",
                "type": "java.lang.String"
            },
            {
                "name": "decimalPlacesRawValue",
                "description": "Specifies the number of decimal places to retain for the raw value and `decimalPlaces` will be used for display values. If this option is left as `null` (the default), the `decimalPlaces` value will be used. Note: Setting this to fewer decimal places than those displayed may cause user confusion.",
                "type": "java.lang.Integer"
            },
            {
                "name": "emptyValue",
                "description": "Defines what to display when the input value is empty (possible options are null, focus, press, always, min, max, zero, number, or a string representing a number). Default is focus.",
                "type": "java.lang.String"
            },
            {
                "name": "inputmode",
                "description": "HTML5 inputmode attribute for hinting at the type of data this control has for touch devices to display appropriate virtual keyboard. Default is 'numeric' if decimalPlaces==0, 'decimal' if decimalPlaces&gt;0.",
                "type": "java.lang.String"
            },
            {
                "name": "inputStyle",
                "description": "Inline style of the input element.",
                "type": "java.lang.String"
            },
            {
                "name": "inputStyleClass",
                "description": "Style class of the input element.",
                "type": "java.lang.String"
            },
            {
                "name": "padControl",
                "description": "Allow padding the decimal places with zeros. If set to 'floats', padding is only done when there are some decimals (up to the number of decimal places from the decimalPlaces variable). If set to an integer, padding will use that number for adding the zeros. If set to \"true\" it will always pad the decimal places with zeroes, and never if set to \"false\". Default is \"true\"",
                "type": "java.lang.String"
            },
            {
                "name": "leadingZero",
                "description": "Controls leading zero behavior. Valid values are \"allow\"(default), \"deny\" and \"keep\".",
                "type": "java.lang.String"
            },
            {
                "name": "decimalSeparatorAlternative",
                "description": "Allow to declare an alternative decimal separator which is automatically replaced by `decimalCharacter` when typed.",
                "type": "java.lang.String"
            },
            {
                "name": "modifyValueOnWheel",
                "description": "Allows the user to increment or decrement the element value with the mouse wheel, default is true.",
                "type": "boolean"
            },
            {
                "name": "modifyValueOnUpDownArrow",
                "description": "Allows the user to increment or decrement the element value with the up and down arrow keys, default is true.",
                "type": "boolean"
            },
            {
                "name": "selectOnFocus",
                "description": "Defines if the element value should be selected on focus, default is true.",
                "type": "boolean"
            },
            {
                "name": "caretPositionOnFocus",
                "description": "Defines where should be positioned the caret on focus such as 'start', 'end', 'decimalLeft', 'decimalRight', default is null.",
                "type": "java.lang.String"
            }
        ]
    },
    "p:inputText": {
        "name": "p:inputText",
        "description": "InputText is an extension to standard inputText with skinning capabilities.",
        "attributes": [
            {
                "name": "id",
                "description": "Unique identifier of the component in a namingContainer.",
                "type": "java.lang.String"
            },
            {
                "name": "rendered",
                "description": "Boolean value to specify the rendering of the component, when set to false component will not be rendered.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "binding",
                "description": "An el expression referring to a server side UIComponent instance in a backing bean.",
                "type": "javax.faces.component.UIComponent"
            },
            {
                "name": "value",
                "description": "Value of the component.",
                "type": "java.lang.Object"
            },
            {
                "name": "converter",
                "description": "An el expression or a literal text that defines a converter for the component. When it's an EL expression, it's resolved to a converter instance.\n    In case it's a static text, it must refer to a converter id.",
                "type": "javax.faces.convert.Converter"
            },
            {
                "name": "immediate",
                "description": "When set true, process validations logic is executed at apply request values phase for this component. Default is false.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "required",
                "description": "Marks component as required.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "validator",
                "description": "A method expression referring to a method validating the input.",
                "type": "javax.faces.validator.Validator"
            },
            {
                "name": "valueChangeListener",
                "description": "A method binding expression referring to a method for handling a valuchangeevent.",
                "type": "javax.faces.event.ValueChangeListener"
            },
            {
                "name": "requiredMessage",
                "description": "Message to display when required field validation fails.",
                "type": "java.lang.String"
            },
            {
                "name": "converterMessage",
                "description": "Message to display when conversion fails.",
                "type": "java.lang.String"
            },
            {
                "name": "validatorMessage",
                "description": "Message to display when validation fails.",
                "type": "java.lang.String"
            },
            {
                "name": "accesskey",
                "description": "Access key to transfer focus to the input element.",
                "type": "java.lang.String"
            },
            {
                "name": "alt",
                "description": "Alternate textual description of the input element.",
                "type": "java.lang.String"
            },
            {
                "name": "autocomplete",
                "description": "Controls browser autocomplete behavior.",
                "type": "java.lang.String"
            },
            {
                "name": "dir",
                "description": "Direction indication for text that does not inherit directionality.",
                "type": "java.lang.String"
            },
            {
                "name": "disabled",
                "description": "Disables the input element, default is false.",
                "type": "boolean"
            },
            {
                "name": "label",
                "description": "A localized user presentable name.",
                "type": "java.lang.String"
            },
            {
                "name": "lang",
                "description": "Code describing the language used in the generated markup.",
                "type": "java.lang.String"
            },
            {
                "name": "maxlength",
                "description": "Maximum number of characters that may be entered in this field.",
                "type": "int"
            },
            {
                "name": "onblur",
                "description": "Client side callback to execute when input element loses focus.",
                "type": "java.lang.String"
            },
            {
                "name": "onchange",
                "description": "Client side callback to execute when input element loses focus and its value has been modified since gaining focus.",
                "type": "java.lang.String"
            },
            {
                "name": "onclick",
                "description": "Client side callback to execute when input element is clicked.",
                "type": "java.lang.String"
            },
            {
                "name": "ondblclick",
                "description": "Client side callback to execute when input element is double clicked.",
                "type": "java.lang.String"
            },
            {
                "name": "onfocus",
                "description": "Client side callback to execute when input element receives focus.",
                "type": "java.lang.String"
            },
            {
                "name": "onkeydown",
                "description": "Client side callback to execute when a key is pressed down over input element.",
                "type": "java.lang.String"
            },
            {
                "name": "onkeypress",
                "description": "Client side callback to execute when a key is pressed and released over input element.",
                "type": "java.lang.String"
            },
            {
                "name": "onkeyup",
                "description": "Client side callback to execute when a key is released over input element.",
                "type": "java.lang.String"
            },
            {
                "name": "onmousedown",
                "description": "Client side callback to execute when a pointer input element is pressed down over input element.",
                "type": "java.lang.String"
            },
            {
                "name": "onmousemove",
                "description": "Client side callback to execute when a pointer input element is moved within input element.",
                "type": "java.lang.String"
            },
            {
                "name": "onmouseout",
                "description": "Client side callback to execute when a pointer input element is moved away from input element.",
                "type": "java.lang.String"
            },
            {
                "name": "onmouseover",
                "description": "Client side callback to execute when a pointer input element is moved onto input element.",
                "type": "java.lang.String"
            },
            {
                "name": "onmouseup",
                "description": "Client side callback to execute when a pointer input element is released over input element.",
                "type": "java.lang.String"
            },
            {
                "name": "onwheel",
                "description": "Client side callback to execute when the mouse wheel rolls up or down over an element.",
                "type": "java.lang.String"
            },
            {
                "name": "onselect",
                "description": "Client side callback to execute when text within input element is selected by user.",
                "type": "java.lang.String"
            },
            {
                "name": "oncut",
                "description": "Client side callback to execute when the user copies the content of an element.",
                "type": "java.lang.String"
            },
            {
                "name": "oncopy",
                "description": "Client side callback to execute when the user cuts the content of an element.",
                "type": "java.lang.String"
            },
            {
                "name": "onpaste",
                "description": "Client side callback to execute when the user pastes some content in an element.",
                "type": "java.lang.String"
            },
            {
                "name": "oninput",
                "description": "Client side callback to execute when an element gets user input.",
                "type": "java.lang.String"
            },
            {
                "name": "oncontextmenu",
                "description": "Client side callback to execute when a context menu is triggered.",
                "type": "java.lang.String"
            },
            {
                "name": "oninvalid",
                "description": "Client side callback to execute when an element is invalid.",
                "type": "java.lang.String"
            },
            {
                "name": "onreset",
                "description": "Client side callback to execute when the Reset button in a form is clicked.",
                "type": "java.lang.String"
            },
            {
                "name": "onsearch",
                "description": "Client side callback to execute when the user writes something in a search field.",
                "type": "java.lang.String"
            },
            {
                "name": "ondrag",
                "description": "Client side callback to execute when an element is dragged.",
                "type": "java.lang.String"
            },
            {
                "name": "ondragend",
                "description": "Client side callback to execute at the end of a drag operation.",
                "type": "java.lang.String"
            },
            {
                "name": "ondragenter",
                "description": "Client side callback to execute when an element has been dragged to a valid drop target.",
                "type": "java.lang.String"
            },
            {
                "name": "ondragleave",
                "description": "Client side callback to execute when an element leaves a valid drop target.",
                "type": "java.lang.String"
            },
            {
                "name": "ondragover",
                "description": "Client side callback to execute when an element is being dragged over a valid drop target.",
                "type": "java.lang.String"
            },
            {
                "name": "ondragstart",
                "description": "Client side callback to execute at the start of a drag operation.",
                "type": "java.lang.String"
            },
            {
                "name": "ondrop",
                "description": "Client side callback to execute when dragged element is being dropped.",
                "type": "java.lang.String"
            },
            {
                "name": "onscroll",
                "description": "Client side callback to execute when an element's scrollbar is being scrolled.",
                "type": "java.lang.String"
            },
            {
                "name": "readonly",
                "description": "Flag indicating that this component will prevent changes by the user.",
                "type": "boolean"
            },
            {
                "name": "size",
                "description": "Number of characters used to determine the width of the input element.",
                "type": "int"
            },
            {
                "name": "style",
                "description": "Inline style of the component.",
                "type": "java.lang.String"
            },
            {
                "name": "styleClass",
                "description": "Style class of the component.",
                "type": "java.lang.String"
            },
            {
                "name": "tabindex",
                "description": "Position of the element in the tabbing order.",
                "type": "java.lang.String"
            },
            {
                "name": "title",
                "description": "Advisory tooltip information.",
                "type": "java.lang.String"
            },
            {
                "name": "placeholder",
                "description": "The placeholder attribute specifies a short hint that describes the expected value of an input field.",
                "type": "java.lang.String"
            },
            {
                "name": "inputmode",
                "description": "HTML5 inputmode attribute for hinting at the type of data this control has for touch devices to display appropriate virtual keyboard.",
                "type": "java.lang.String"
            },
            {
                "name": "widgetVar",
                "description": "Name of the client side widget.",
                "type": "java.lang.String"
            },
            {
                "name": "type",
                "description": "Input field type. Default is text.",
                "type": "java.lang.String"
            },
            {
                "name": "counter",
                "description": "Id of the label component to display remaining and entered characters.",
                "type": "java.lang.String"
            },
            {
                "name": "counterTemplate",
                "description": "Template text to display in counter, default value is \"{0}\".",
                "type": "java.lang.String"
            },
            {
                "name": "countBytesAsChars",
                "description": "Should bytes instead of characters be counted, default value is false.",
                "type": "java.lang.Boolean"
            }
        ]
    },
    "p:inputTextarea": {
        "name": "p:inputTextarea",
        "description": "InputTextarea is an extension to standard inputTextara with skinning capabilities and auto growing.",
        "attributes": [
            {
                "name": "id",
                "description": "Unique identifier of the component in a namingContainer.",
                "type": "java.lang.String"
            },
            {
                "name": "rendered",
                "description": "Boolean value to specify the rendering of the component, when set to false component will not be rendered.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "binding",
                "description": "An el expression referring to a server side UIComponent instance in a backing bean.",
                "type": "javax.faces.component.UIComponent"
            },
            {
                "name": "value",
                "description": "Value of the component.",
                "type": "java.lang.Object"
            },
            {
                "name": "converter",
                "description": "An el expression or a literal text that defines a converter for the component. When it's an EL expression, it's resolved to a converter instance.\n    In case it's a static text, it must refer to a converter id.",
                "type": "javax.faces.convert.Converter"
            },
            {
                "name": "immediate",
                "description": "When set true, process validations logic is executed at apply request values phase for this component. Default is false.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "required",
                "description": "Marks component as required.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "validator",
                "description": "A method expression referring to a method validating the input.",
                "type": "javax.faces.validator.Validator"
            },
            {
                "name": "valueChangeListener",
                "description": "A method binding expression referring to a method for handling a valuchangeevent.",
                "type": "javax.faces.event.ValueChangeListener"
            },
            {
                "name": "requiredMessage",
                "description": "Message to display when required field validation fails.",
                "type": "java.lang.String"
            },
            {
                "name": "converterMessage",
                "description": "Message to display when conversion fails.",
                "type": "java.lang.String"
            },
            {
                "name": "validatorMessage",
                "description": "Message to display when validation fails.",
                "type": "java.lang.String"
            },
            {
                "name": "accesskey",
                "description": "Access key to transfer focus to the input element.",
                "type": "java.lang.String"
            },
            {
                "name": "cols",
                "description": "Specifies the visible width of input element.",
                "type": "int"
            },
            {
                "name": "dir",
                "description": "Direction indication for text that does not inherit directionality.",
                "type": "java.lang.String"
            },
            {
                "name": "disabled",
                "description": "Disables the input element, default is false.",
                "type": "boolean"
            },
            {
                "name": "label",
                "description": "A localized user presentable name.",
                "type": "java.lang.String"
            },
            {
                "name": "lang",
                "description": "Code describing the language used in the generated markup.",
                "type": "java.lang.String"
            },
            {
                "name": "onblur",
                "description": "Client side callback to execute when input element loses focus.",
                "type": "java.lang.String"
            },
            {
                "name": "onchange",
                "description": "Client side callback to execute when input element loses focus and its value has been modified since gaining focus.",
                "type": "java.lang.String"
            },
            {
                "name": "onclick",
                "description": "Client side callback to execute when input element is clicked.",
                "type": "java.lang.String"
            },
            {
                "name": "ondblclick",
                "description": "Client side callback to execute when input element is double clicked.",
                "type": "java.lang.String"
            },
            {
                "name": "onfocus",
                "description": "Client side callback to execute when input element receives focus.",
                "type": "java.lang.String"
            },
            {
                "name": "onkeydown",
                "description": "Client side callback to execute when a key is pressed down over input element.",
                "type": "java.lang.String"
            },
            {
                "name": "onkeypress",
                "description": "Client side callback to execute when a key is pressed and released over input element.",
                "type": "java.lang.String"
            },
            {
                "name": "onkeyup",
                "description": "Client side callback to execute when a key is released over input element.",
                "type": "java.lang.String"
            },
            {
                "name": "onmousedown",
                "description": "Client side callback to execute when a pointer input element is pressed down over input element.",
                "type": "java.lang.String"
            },
            {
                "name": "onmousemove",
                "description": "Client side callback to execute when a pointer input element is moved within input element.",
                "type": "java.lang.String"
            },
            {
                "name": "onmouseout",
                "description": "Client side callback to execute when a pointer input element is moved away from input element.",
                "type": "java.lang.String"
            },
            {
                "name": "onmouseover",
                "description": "Client side callback to execute when a pointer input element is moved onto input element.",
                "type": "java.lang.String"
            },
            {
                "name": "onmouseup",
                "description": "Client side callback to execute when a pointer input element is released over input element.",
                "type": "java.lang.String"
            },
            {
                "name": "onwheel",
                "description": "Client side callback to execute when the mouse wheel rolls up or down over an element.",
                "type": "java.lang.String"
            },
            {
                "name": "onselect",
                "description": "Client side callback to execute when text within input element is selected by user.",
                "type": "java.lang.String"
            },
            {
                "name": "oncut",
                "description": "Client side callback to execute when the user copies the content of an element.",
                "type": "java.lang.String"
            },
            {
                "name": "oncopy",
                "description": "Client side callback to execute when the user cuts the content of an element.",
                "type": "java.lang.String"
            },
            {
                "name": "onpaste",
                "description": "Client side callback to execute when the user pastes some content in an element.",
                "type": "java.lang.String"
            },
            {
                "name": "oninput",
                "description": "Client side callback to execute when an element gets user input.",
                "type": "java.lang.String"
            },
            {
                "name": "oncontextmenu",
                "description": "Client side callback to execute when a context menu is triggered.",
                "type": "java.lang.String"
            },
            {
                "name": "oninvalid",
                "description": "Client side callback to execute when an element is invalid.",
                "type": "java.lang.String"
            },
            {
                "name": "onreset",
                "description": "Client side callback to execute when the Reset button in a form is clicked.",
                "type": "java.lang.String"
            },
            {
                "name": "onsearch",
                "description": "Client side callback to execute when the user writes something in a search field.",
                "type": "java.lang.String"
            },
            {
                "name": "ondrag",
                "description": "Client side callback to execute when an element is dragged.",
                "type": "java.lang.String"
            },
            {
                "name": "ondragend",
                "description": "Client side callback to execute at the end of a drag operation.",
                "type": "java.lang.String"
            },
            {
                "name": "ondragenter",
                "description": "Client side callback to execute when an element has been dragged to a valid drop target.",
                "type": "java.lang.String"
            },
            {
                "name": "ondragleave",
                "description": "Client side callback to execute when an element leaves a valid drop target.",
                "type": "java.lang.String"
            },
            {
                "name": "ondragover",
                "description": "Client side callback to execute when an element is being dragged over a valid drop target.",
                "type": "java.lang.String"
            },
            {
                "name": "ondragstart",
                "description": "Client side callback to execute at the start of a drag operation.",
                "type": "java.lang.String"
            },
            {
                "name": "ondrop",
                "description": "Client side callback to execute when dragged element is being dropped.",
                "type": "java.lang.String"
            },
            {
                "name": "onscroll",
                "description": "Client side callback to execute when an element's scrollbar is being scrolled.",
                "type": "java.lang.String"
            },
            {
                "name": "readonly",
                "description": "Flag indicating that this component will prevent changes by the user.",
                "type": "boolean"
            },
            {
                "name": "rows",
                "description": "Specifies the visible height of input element.",
                "type": "int"
            },
            {
                "name": "style",
                "description": "Inline style of the input element.",
                "type": "java.lang.String"
            },
            {
                "name": "styleClass",
                "description": "Style class of the input element.",
                "type": "java.lang.String"
            },
            {
                "name": "tabindex",
                "description": "Position of the element in the tabbing order.",
                "type": "java.lang.String"
            },
            {
                "name": "title",
                "description": "Advisory tooltip information.",
                "type": "java.lang.String"
            },
            {
                "name": "placeholder",
                "description": "The placeholder attribute specifies a short hint that describes the expected value of an input field.",
                "type": "java.lang.String"
            },
            {
                "name": "inputmode",
                "description": "HTML5 inputmode attribute for hinting at the type of data this control has for touch devices to display appropriate virtual keyboard.",
                "type": "java.lang.String"
            },
            {
                "name": "widgetVar",
                "description": "Name of the client side widget.",
                "type": "java.lang.String"
            },
            {
                "name": "autoResize",
                "description": "Allows to expand height automatically when text input overflows.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "maxlength",
                "description": "Sets maximum character number of text area container. Default is 0, means no limit.",
                "type": "java.lang.Integer"
            },
            {
                "name": "counter",
                "description": "Id of the label component to display remaining characters.",
                "type": "java.lang.String"
            },
            {
                "name": "counterTemplate",
                "description": "Template text to display in counter, default value is \"{0}\".",
                "type": "java.lang.String"
            },
            {
                "name": "countBytesAsChars",
                "description": "Should bytes instead of characters be counted, default value is false.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "completeMethod",
                "description": "Method providing suggestions.",
                "type": "javax.el.MethodExpression"
            },
            {
                "name": "minQueryLength",
                "description": "Number of characters of a word to be typed before starting to query. Default is 3.",
                "type": "java.lang.Integer"
            },
            {
                "name": "queryDelay",
                "description": "Delay to wait in milliseconds before sending each query to the server. Default is 700",
                "type": "java.lang.Integer"
            },
            {
                "name": "scrollHeight",
                "description": "Defines the height of the viewport for autocomplete suggestions.",
                "type": "java.lang.Integer"
            },
            {
                "name": "addLine",
                "description": "Adds a new line at start as a workaround to SGML specification B.3.1.",
                "type": "java.lang.Boolean"
            }
        ]
    },
    "p:keyboard": {
        "name": "p:keyboard",
        "description": "Keyboard is an input component that uses a virtual keyboard to provide the input. Notable features are the customizable layouts and skinning capabilities.",
        "attributes": [
            {
                "name": "id",
                "description": "Unique identifier of the component in a namingContainer.",
                "type": "java.lang.String"
            },
            {
                "name": "rendered",
                "description": "Boolean value to specify the rendering of the component, when set to false component will not be rendered.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "binding",
                "description": "An el expression referring to a server side UIComponent instance in a backing bean.",
                "type": "javax.faces.component.UIComponent"
            },
            {
                "name": "value",
                "description": "Value of the component.",
                "type": "java.lang.Object"
            },
            {
                "name": "converter",
                "description": "An el expression or a literal text that defines a converter for the component. When it's an EL expression, it's resolved to a converter instance.\n    In case it's a static text, it must refer to a converter id.",
                "type": "javax.faces.convert.Converter"
            },
            {
                "name": "immediate",
                "description": "When set true, process validations logic is executed at apply request values phase for this component. Default is false.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "required",
                "description": "Marks component as required.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "validator",
                "description": "A method expression referring to a method validating the input.",
                "type": "javax.faces.validator.Validator"
            },
            {
                "name": "valueChangeListener",
                "description": "A method binding expression referring to a method for handling a valuchangeevent.",
                "type": "javax.faces.event.ValueChangeListener"
            },
            {
                "name": "requiredMessage",
                "description": "Message to display when required field validation fails.",
                "type": "java.lang.String"
            },
            {
                "name": "converterMessage",
                "description": "Message to display when conversion fails.",
                "type": "java.lang.String"
            },
            {
                "name": "validatorMessage",
                "description": "Message to display when validation fails.",
                "type": "java.lang.String"
            },
            {
                "name": "accesskey",
                "description": "Access key to transfer focus to the input element.",
                "type": "java.lang.String"
            },
            {
                "name": "alt",
                "description": "Alternate textual description of the input element.",
                "type": "java.lang.String"
            },
            {
                "name": "autocomplete",
                "description": "Controls browser autocomplete behavior.",
                "type": "java.lang.String"
            },
            {
                "name": "dir",
                "description": "Direction indication for text that does not inherit directionality.",
                "type": "java.lang.String"
            },
            {
                "name": "disabled",
                "description": "Disables the input element, default is false.",
                "type": "boolean"
            },
            {
                "name": "label",
                "description": "A localized user presentable name.",
                "type": "java.lang.String"
            },
            {
                "name": "lang",
                "description": "Code describing the language used in the generated markup.",
                "type": "java.lang.String"
            },
            {
                "name": "maxlength",
                "description": "Maximum number of characters that may be entered in this field.",
                "type": "int"
            },
            {
                "name": "onblur",
                "description": "Client side callback to execute when input element loses focus.",
                "type": "java.lang.String"
            },
            {
                "name": "onchange",
                "description": "Client side callback to execute when input element loses focus and its value has been modified since gaining focus.",
                "type": "java.lang.String"
            },
            {
                "name": "onclick",
                "description": "Client side callback to execute when input element is clicked.",
                "type": "java.lang.String"
            },
            {
                "name": "ondblclick",
                "description": "Client side callback to execute when input element is double clicked.",
                "type": "java.lang.String"
            },
            {
                "name": "onfocus",
                "description": "Client side callback to execute when input element receives focus.",
                "type": "java.lang.String"
            },
            {
                "name": "onkeydown",
                "description": "Client side callback to execute when a key is pressed down over input element.",
                "type": "java.lang.String"
            },
            {
                "name": "onkeypress",
                "description": "Client side callback to execute when a key is pressed and released over input element.",
                "type": "java.lang.String"
            },
            {
                "name": "onkeyup",
                "description": "Client side callback to execute when a key is released over input element.",
                "type": "java.lang.String"
            },
            {
                "name": "onmousedown",
                "description": "Client side callback to execute when a pointer input element is pressed down over input element.",
                "type": "java.lang.String"
            },
            {
                "name": "onmousemove",
                "description": "Client side callback to execute when a pointer input element is moved within input element.",
                "type": "java.lang.String"
            },
            {
                "name": "onmouseout",
                "description": "Client side callback to execute when a pointer input element is moved away from input element.",
                "type": "java.lang.String"
            },
            {
                "name": "onmouseover",
                "description": "Client side callback to execute when a pointer input element is moved onto input element.",
                "type": "java.lang.String"
            },
            {
                "name": "onmouseup",
                "description": "Client side callback to execute when a pointer input element is released over input element.",
                "type": "java.lang.String"
            },
            {
                "name": "onwheel",
                "description": "Client side callback to execute when the mouse wheel rolls up or down over an element.",
                "type": "java.lang.String"
            },
            {
                "name": "onselect",
                "description": "Client side callback to execute when text within input element is selected by user.",
                "type": "java.lang.String"
            },
            {
                "name": "oncut",
                "description": "Client side callback to execute when the user copies the content of an element.",
                "type": "java.lang.String"
            },
            {
                "name": "oncopy",
                "description": "Client side callback to execute when the user cuts the content of an element.",
                "type": "java.lang.String"
            },
            {
                "name": "onpaste",
                "description": "Client side callback to execute when the user pastes some content in an element.",
                "type": "java.lang.String"
            },
            {
                "name": "oninput",
                "description": "Client side callback to execute when an element gets user input.",
                "type": "java.lang.String"
            },
            {
                "name": "oncontextmenu",
                "description": "Client side callback to execute when a context menu is triggered.",
                "type": "java.lang.String"
            },
            {
                "name": "oninvalid",
                "description": "Client side callback to execute when an element is invalid.",
                "type": "java.lang.String"
            },
            {
                "name": "onreset",
                "description": "Client side callback to execute when the Reset button in a form is clicked.",
                "type": "java.lang.String"
            },
            {
                "name": "onsearch",
                "description": "Client side callback to execute when the user writes something in a search field.",
                "type": "java.lang.String"
            },
            {
                "name": "ondrag",
                "description": "Client side callback to execute when an element is dragged.",
                "type": "java.lang.String"
            },
            {
                "name": "ondragend",
                "description": "Client side callback to execute at the end of a drag operation.",
                "type": "java.lang.String"
            },
            {
                "name": "ondragenter",
                "description": "Client side callback to execute when an element has been dragged to a valid drop target.",
                "type": "java.lang.String"
            },
            {
                "name": "ondragleave",
                "description": "Client side callback to execute when an element leaves a valid drop target.",
                "type": "java.lang.String"
            },
            {
                "name": "ondragover",
                "description": "Client side callback to execute when an element is being dragged over a valid drop target.",
                "type": "java.lang.String"
            },
            {
                "name": "ondragstart",
                "description": "Client side callback to execute at the start of a drag operation.",
                "type": "java.lang.String"
            },
            {
                "name": "ondrop",
                "description": "Client side callback to execute when dragged element is being dropped.",
                "type": "java.lang.String"
            },
            {
                "name": "onscroll",
                "description": "Client side callback to execute when an element's scrollbar is being scrolled.",
                "type": "java.lang.String"
            },
            {
                "name": "readonly",
                "description": "Flag indicating that this component will prevent changes by the user.",
                "type": "boolean"
            },
            {
                "name": "size",
                "description": "Number of characters used to determine the width of the input element.",
                "type": "int"
            },
            {
                "name": "style",
                "description": "Inline style of the component.",
                "type": "java.lang.String"
            },
            {
                "name": "styleClass",
                "description": "Style class of the component.",
                "type": "java.lang.String"
            },
            {
                "name": "tabindex",
                "description": "Position of the element in the tabbing order.",
                "type": "java.lang.String"
            },
            {
                "name": "title",
                "description": "Advisory tooltip information.",
                "type": "java.lang.String"
            },
            {
                "name": "placeholder",
                "description": "The placeholder attribute specifies a short hint that describes the expected value of an input field.",
                "type": "java.lang.String"
            },
            {
                "name": "inputmode",
                "description": "HTML5 inputmode attribute for hinting at the type of data this control has for touch devices to display appropriate virtual keyboard.",
                "type": "java.lang.String"
            },
            {
                "name": "widgetVar",
                "description": "Name of the client side widget.",
                "type": "java.lang.String"
            },
            {
                "name": "password",
                "description": "Makes the input a password field. Default is false.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "showMode",
                "description": "Specifies the showMode, 'focus', 'button', 'both'",
                "type": "java.lang.String"
            },
            {
                "name": "buttonImage",
                "description": "Image for the button.",
                "type": "java.lang.String"
            },
            {
                "name": "buttonImageOnly",
                "description": "When set to true only image of the button would be displayed. Default is false.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "effect",
                "description": "Effect of the display animation. Default is fadeIn",
                "type": "java.lang.String"
            },
            {
                "name": "effectDuration",
                "description": "Length of the display animation.",
                "type": "java.lang.String"
            },
            {
                "name": "layout",
                "description": "Built-in layout of the keyboard. Default is qwerty.",
                "type": "java.lang.String"
            },
            {
                "name": "layoutTemplate",
                "description": "Template of the custom layout.",
                "type": "java.lang.String"
            },
            {
                "name": "keypadOnly",
                "description": "Specifies displaying a keypad instead of a keyboard. Default is false.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "promptLabel",
                "description": "Label of the prompt text.",
                "type": "java.lang.String"
            },
            {
                "name": "closeLabel",
                "description": "Label of the close key.",
                "type": "java.lang.String"
            },
            {
                "name": "clearLabel",
                "description": "Label of the clear key.",
                "type": "java.lang.String"
            },
            {
                "name": "backspaceLabel",
                "description": "Label of the backspace key.",
                "type": "java.lang.String"
            }
        ]
    },
    "p:keyFilter": {
        "name": "p:keyFilter",
        "description": "KeyFilter filters keyboard input for a given input field.",
        "attributes": [
            {
                "name": "id",
                "description": "Unique identifier of the component in a namingContainer.",
                "type": "java.lang.String"
            },
            {
                "name": "rendered",
                "description": "Boolean value to specify the rendering of the component, when set to false component will not be rendered.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "binding",
                "description": "An el expression referring to a server side UIComponent instance in a backing bean.",
                "type": "javax.faces.component.UIComponent"
            },
            {
                "name": "widgetVar",
                "description": "Name of the client side widget.",
                "type": "java.lang.String"
            },
            {
                "name": "for",
                "description": "The target input.",
                "type": "java.lang.String"
            },
            {
                "name": "regEx",
                "description": "Defines the regular expression which should be used for filtering the input.",
                "type": "java.lang.String"
            },
            {
                "name": "inputRegEx",
                "description": "Defines the regular expression which should be used to test the complete input text content.",
                "type": "java.lang.String"
            },
            {
                "name": "mask",
                "description": "Defines the predefined mask which should be used (pint, int, pnum, num, hex, email, alpha, alphanum).",
                "type": "java.lang.String"
            },
            {
                "name": "testFunction",
                "description": "Defines a javascript code or function which should be used for filtering.",
                "type": "java.lang.String"
            },
            {
                "name": "preventPaste",
                "description": "Boolean value to specify if the component also should prevent paste. Default value is true.",
                "type": "java.lang.Boolean"
            }
        ]
    },
    "p:knob": {
        "name": "p:knob",
        "description": "Knob is an input component to insert numeric values in a range.",
        "attributes": [
            {
                "name": "id",
                "description": "Unique identifier of the component in a namingContainer.",
                "type": "java.lang.String"
            },
            {
                "name": "rendered",
                "description": "Boolean value to specify the rendering of the component, when set to false component will not be rendered.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "binding",
                "description": "An el expression referring to a server side UIComponent instance in a backing bean.",
                "type": "javax.faces.component.UIComponent"
            },
            {
                "name": "value",
                "description": "Value of the component.",
                "type": "java.lang.Object"
            },
            {
                "name": "converter",
                "description": "An el expression or a literal text that defines a converter for the component. When it's an EL expression, it's resolved to a converter instance.\n    In case it's a static text, it must refer to a converter id.",
                "type": "javax.faces.convert.Converter"
            },
            {
                "name": "immediate",
                "description": "When set true, process validations logic is executed at apply request values phase for this component. Default is false.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "required",
                "description": "Marks component as required.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "validator",
                "description": "A method expression referring to a method validating the input.",
                "type": "javax.faces.validator.Validator"
            },
            {
                "name": "valueChangeListener",
                "description": "A method binding expression referring to a method for handling a valuchangeevent.",
                "type": "javax.faces.event.ValueChangeListener"
            },
            {
                "name": "requiredMessage",
                "description": "Message to display when required field validation fails.",
                "type": "java.lang.String"
            },
            {
                "name": "converterMessage",
                "description": "Message to display when conversion fails.",
                "type": "java.lang.String"
            },
            {
                "name": "validatorMessage",
                "description": "Message to display when validation fails.",
                "type": "java.lang.String"
            },
            {
                "name": "widgetVar",
                "description": "Name of the client side widget.",
                "type": "java.lang.String"
            },
            {
                "name": "min",
                "description": "min valid value of the component.",
                "type": "java.lang.Integer"
            },
            {
                "name": "max",
                "description": "Max valid value of the component.",
                "type": "java.lang.Integer"
            },
            {
                "name": "step",
                "description": "Increment/decrement step of the component.",
                "type": "java.lang.Integer"
            },
            {
                "name": "thickness",
                "description": "Thickness of the bar.",
                "type": "java.lang.Float"
            },
            {
                "name": "width",
                "description": "Width of the component",
                "type": "java.lang.Object"
            },
            {
                "name": "height",
                "description": "Height of the component",
                "type": "java.lang.Object"
            },
            {
                "name": "foregroundColor",
                "description": "Foreground color of the component, you can use an hex value, a css constant or a java.awt.Color object",
                "type": "java.lang.Object"
            },
            {
                "name": "backgroundColor",
                "description": "Background color of the component, you can use an hex value, a css constant or a java.awt.Color object",
                "type": "java.lang.Object"
            },
            {
                "name": "colorTheme",
                "description": "Theme of the knob.",
                "type": "java.lang.String"
            },
            {
                "name": "disabled",
                "description": "Disables the input element, default is false.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "showLabel",
                "description": "Set false to hide the label, default is true.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "cursor",
                "description": "Set true to show only a cursor instead of the full bar, default is false.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "labelTemplate",
                "description": "Template of the progress value e.g. \"{value}%\"",
                "type": "java.lang.String"
            },
            {
                "name": "onchange",
                "description": "",
                "type": "java.lang.String"
            },
            {
                "name": "lineCap",
                "description": "Gauge stroke endings. Valid values are \"butt\" (default) and \"round\".",
                "type": "java.lang.String"
            },
            {
                "name": "styleClass",
                "description": "Style class of the component.",
                "type": "java.lang.String"
            }
        ]
    },
    "p:lifecycle": {
        "name": "p:lifecycle",
        "description": "Lifecycle is a utility component which displays the execution time of each Faces phase. It also\n            synchronizes automatically after each AJAX request.",
        "attributes": [
            {
                "name": "id",
                "description": "Unique identifier of the component in a namingContainer.",
                "type": "java.lang.String"
            },
            {
                "name": "rendered",
                "description": "Boolean value to specify the rendering of the component, when set to false component will not be rendered.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "binding",
                "description": "An el expression referring to a server side UIComponent instance in a backing bean.",
                "type": "javax.faces.component.UIComponent"
            },
            {
                "name": "widgetVar",
                "description": "Name of the client side widget.",
                "type": "java.lang.String"
            }
        ]
    },
    "p:link": {
        "name": "p:link",
        "description": "Link is an extension to the standard h:link component with skinning capabilities.",
        "attributes": [
            {
                "name": "id",
                "description": "Unique identifier of the component in a namingContainer.",
                "type": "java.lang.String"
            },
            {
                "name": "rendered",
                "description": "Boolean value to specify the rendering of the component, when set to false component will not be rendered.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "binding",
                "description": "An el expression referring to a server side UIComponent instance in a backing bean.",
                "type": "javax.faces.component.UIComponent"
            },
            {
                "name": "value",
                "description": "Value of the component than can be either an EL expression of a literal text.",
                "type": "java.lang.String"
            },
            {
                "name": "outcome",
                "description": "Used to resolve a navigation case.",
                "type": "java.lang.String"
            },
            {
                "name": "includeViewParams",
                "description": "Whether to include page parameters in target URI. Default is false.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "fragment",
                "description": "Identifier of the target page which should be scrolled to.",
                "type": "java.lang.String"
            },
            {
                "name": "disabled",
                "description": "Disables the element.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "disableClientWindow",
                "description": "Disable appending the\n             on the rendering of this element.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "accesskey",
                "description": "Access key that when pressed transfers focus to the link.",
                "type": "java.lang.String"
            },
            {
                "name": "charset",
                "description": "Character encoding of the resource designated by this hyperlink.",
                "type": "java.lang.String"
            },
            {
                "name": "coords",
                "description": "Position and shape of the hot spot on the screen for client use in image maps.",
                "type": "java.lang.String"
            },
            {
                "name": "dir",
                "description": "Direction indication for text that does not inherit directionality. Valid values are LTR and RTL.",
                "type": "java.lang.String"
            },
            {
                "name": "hreflang",
                "description": "Language code of the resource designated by the link.",
                "type": "java.lang.String"
            },
            {
                "name": "rel",
                "description": "Relationship from the current document to the anchor specified by the link, values are provided by a space-separated list of link types.",
                "type": "java.lang.String"
            },
            {
                "name": "rev",
                "description": "A reverse link from the anchor specified by this link to the current document, values are provided by a space-separated list of link types.",
                "type": "java.lang.String"
            },
            {
                "name": "shape",
                "description": "Shape of hot spot on the screen, valid values are default, rect, circle and poly.",
                "type": "java.lang.String"
            },
            {
                "name": "tabindex",
                "description": "Position of the button element in the tabbing order.",
                "type": "java.lang.String"
            },
            {
                "name": "target",
                "description": "Name of a frame where the resource targeted by this link will be displayed.",
                "type": "java.lang.String"
            },
            {
                "name": "title",
                "description": "Advisory tooltip information.",
                "type": "java.lang.String"
            },
            {
                "name": "type",
                "description": "Type of resource referenced by the link.",
                "type": "java.lang.String"
            },
            {
                "name": "style",
                "description": "Style to be applied on the anchor element.",
                "type": "java.lang.String"
            },
            {
                "name": "styleClass",
                "description": "StyleClass to be applied on the anchor element",
                "type": "java.lang.String"
            },
            {
                "name": "onblur",
                "description": "Client side callback to execute when link loses focus.",
                "type": "java.lang.String"
            },
            {
                "name": "onclick",
                "description": "Client side callback to execute when link is clicked.",
                "type": "java.lang.String"
            },
            {
                "name": "ondblclick",
                "description": "Client side callback to execute when link is double clicked.",
                "type": "java.lang.String"
            },
            {
                "name": "onfocus",
                "description": "Client side callback to execute when link receives focus.",
                "type": "java.lang.String"
            },
            {
                "name": "onkeydown",
                "description": "Client side callback to execute when a key is pressed down over link.",
                "type": "java.lang.String"
            },
            {
                "name": "onkeypress",
                "description": "Client side callback to execute when a key is pressed and released over link.",
                "type": "java.lang.String"
            },
            {
                "name": "onkeyup",
                "description": "Client side callback to execute when a key is released over link.",
                "type": "java.lang.String"
            },
            {
                "name": "onmousedown",
                "description": "Client side callback to execute when a pointer button is pressed down over link.",
                "type": "java.lang.String"
            },
            {
                "name": "onmousemove",
                "description": "Client side callback to execute when a pointer button is moved within link.",
                "type": "java.lang.String"
            },
            {
                "name": "onmouseout",
                "description": "Client side callback to execute when a pointer button is moved away from link.",
                "type": "java.lang.String"
            },
            {
                "name": "onmouseover",
                "description": "Client side callback to execute when a pointer button is moved onto link.",
                "type": "java.lang.String"
            },
            {
                "name": "onmouseup",
                "description": "Client side callback to execute when a pointer button is released over link.",
                "type": "java.lang.String"
            },
            {
                "name": "href",
                "description": "Resource to link to.",
                "type": "java.lang.String"
            },
            {
                "name": "escape",
                "description": "Defines if label of the component is escaped or not.",
                "type": "java.lang.Boolean"
            }
        ]
    },
    "p:linkButton": {
        "name": "p:linkButton",
        "description": "Link is an extension to the standard h:link component with skinning as a button.",
        "attributes": [
            {
                "name": "id",
                "description": "Unique identifier of the component in a namingContainer.",
                "type": "java.lang.String"
            },
            {
                "name": "rendered",
                "description": "Boolean value to specify the rendering of the component, when set to false component will not be rendered.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "binding",
                "description": "An el expression referring to a server side UIComponent instance in a backing bean.",
                "type": "javax.faces.component.UIComponent"
            },
            {
                "name": "widgetVar",
                "description": "Name of the client side widget.",
                "type": "java.lang.String"
            },
            {
                "name": "value",
                "description": "Value of the component than can be either an EL expression of a literal text.",
                "type": "java.lang.String"
            },
            {
                "name": "outcome",
                "description": "Used to resolve a navigation case.",
                "type": "java.lang.String"
            },
            {
                "name": "includeViewParams",
                "description": "Whether to include page parameters in target URI. Default is false.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "fragment",
                "description": "Identifier of the target page which should be scrolled to.",
                "type": "java.lang.String"
            },
            {
                "name": "disabled",
                "description": "Disables the element.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "disableClientWindow",
                "description": "Disable appending the\n             on the rendering of this element.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "accesskey",
                "description": "Access key that when pressed transfers focus to the link.",
                "type": "java.lang.String"
            },
            {
                "name": "charset",
                "description": "Character encoding of the resource designated by this hyperlink.",
                "type": "java.lang.String"
            },
            {
                "name": "coords",
                "description": "Position and shape of the hot spot on the screen for client use in image maps.",
                "type": "java.lang.String"
            },
            {
                "name": "dir",
                "description": "Direction indication for text that does not inherit directionality. Valid values are LTR and RTL.",
                "type": "java.lang.String"
            },
            {
                "name": "hreflang",
                "description": "Language code of the resource designated by the link.",
                "type": "java.lang.String"
            },
            {
                "name": "rel",
                "description": "Relationship from the current document to the anchor specified by the link, values are provided by a space-separated list of link types.",
                "type": "java.lang.String"
            },
            {
                "name": "rev",
                "description": "A reverse link from the anchor specified by this link to the current document, values are provided by a space-separated list of link types.",
                "type": "java.lang.String"
            },
            {
                "name": "shape",
                "description": "Shape of hot spot on the screen, valid values are default, rect, circle and poly.",
                "type": "java.lang.String"
            },
            {
                "name": "tabindex",
                "description": "Position of the button element in the tabbing order.",
                "type": "java.lang.String"
            },
            {
                "name": "target",
                "description": "Name of a frame where the resource targeted by this link will be displayed.",
                "type": "java.lang.String"
            },
            {
                "name": "title",
                "description": "Advisory tooltip information.",
                "type": "java.lang.String"
            },
            {
                "name": "type",
                "description": "Type of resource referenced by the link.",
                "type": "java.lang.String"
            },
            {
                "name": "style",
                "description": "Style to be applied on the anchor element.",
                "type": "java.lang.String"
            },
            {
                "name": "styleClass",
                "description": "StyleClass to be applied on the anchor element",
                "type": "java.lang.String"
            },
            {
                "name": "onblur",
                "description": "Client side callback to execute when link loses focus.",
                "type": "java.lang.String"
            },
            {
                "name": "onclick",
                "description": "Client side callback to execute when link is clicked.",
                "type": "java.lang.String"
            },
            {
                "name": "ondblclick",
                "description": "Client side callback to execute when link is double clicked.",
                "type": "java.lang.String"
            },
            {
                "name": "onfocus",
                "description": "Client side callback to execute when link receives focus.",
                "type": "java.lang.String"
            },
            {
                "name": "onkeydown",
                "description": "Client side callback to execute when a key is pressed down over link.",
                "type": "java.lang.String"
            },
            {
                "name": "onkeypress",
                "description": "Client side callback to execute when a key is pressed and released over link.",
                "type": "java.lang.String"
            },
            {
                "name": "onkeyup",
                "description": "Client side callback to execute when a key is released over link.",
                "type": "java.lang.String"
            },
            {
                "name": "onmousedown",
                "description": "Client side callback to execute when a pointer button is pressed down over link.",
                "type": "java.lang.String"
            },
            {
                "name": "onmousemove",
                "description": "Client side callback to execute when a pointer button is moved within link.",
                "type": "java.lang.String"
            },
            {
                "name": "onmouseout",
                "description": "Client side callback to execute when a pointer button is moved away from link.",
                "type": "java.lang.String"
            },
            {
                "name": "onmouseover",
                "description": "Client side callback to execute when a pointer button is moved onto link.",
                "type": "java.lang.String"
            },
            {
                "name": "onmouseup",
                "description": "Client side callback to execute when a pointer button is released over link.",
                "type": "java.lang.String"
            },
            {
                "name": "href",
                "description": "Resource to link to.",
                "type": "java.lang.String"
            },
            {
                "name": "escape",
                "description": "Defines if label of the component is escaped or not.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "icon",
                "description": "Icon of the button.",
                "type": "java.lang.String"
            },
            {
                "name": "iconPos",
                "description": "Position of the icon, default value is left.",
                "type": "java.lang.String"
            },
            {
                "name": "ariaLabel",
                "description": "The aria-label attribute is used to define a string that labels the current element for accessibility. Only used when the button is icon only.",
                "type": "java.lang.String"
            }
        ]
    },
    "p:log": {
        "name": "p:log",
        "description": "Log component is a visual console to display logs of PrimeFaces. Using log client side API, you can also use the component.",
        "attributes": [
            {
                "name": "id",
                "description": "Unique identifier of the component in a namingContainer.",
                "type": "java.lang.String"
            },
            {
                "name": "rendered",
                "description": "Boolean value to specify the rendering of the component, when set to false component will not be rendered.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "binding",
                "description": "An el expression referring to a server side UIComponent instance in a backing bean.",
                "type": "javax.faces.component.UIComponent"
            },
            {
                "name": "widgetVar",
                "description": "Name of the client side widget.",
                "type": "java.lang.String"
            }
        ]
    },
    "p:media": {
        "name": "p:media",
        "description": "Media component is used for embedding multimedia content such as videos and music to Faces views. Media renders object or embed html tags depending on the user client.",
        "attributes": [
            {
                "name": "id",
                "description": "Unique identifier of the component in a namingContainer.",
                "type": "java.lang.String"
            },
            {
                "name": "rendered",
                "description": "Boolean value to specify the rendering of the component, when set to false component will not be rendered.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "binding",
                "description": "An el expression referring to a server side UIComponent instance in a backing bean.",
                "type": "javax.faces.component.UIComponent"
            },
            {
                "name": "value",
                "description": "Media source to play.",
                "type": "java.lang.Object"
            },
            {
                "name": "player",
                "description": "Type of the player, possible values are \"quicktime\",\"windows\",\"real\" and \"pdf\".",
                "type": "java.lang.String"
            },
            {
                "name": "width",
                "description": "Width of the player.",
                "type": "java.lang.String"
            },
            {
                "name": "height",
                "description": "Height of the player.",
                "type": "java.lang.String"
            },
            {
                "name": "style",
                "description": "Style of the player.",
                "type": "java.lang.String"
            },
            {
                "name": "styleClass",
                "description": "Style class of the player.",
                "type": "java.lang.String"
            },
            {
                "name": "cache",
                "description": "Controls browser caching mode of the resource. Default is true",
                "type": "java.lang.Boolean"
            },
            {
                "name": "zoom",
                "description": "Sets default zoom value for Pdf Reader.",
                "type": "java.lang.String"
            },
            {
                "name": "view",
                "description": "Sets the view of the displayed page on Pdf Reader.",
                "type": "java.lang.String"
            }
        ]
    },
    "p:megaMenu": {
        "name": "p:megaMenu",
        "description": "MegaMenu is a navigation component that displays submenus together.",
        "attributes": [
            {
                "name": "id",
                "description": "Unique identifier of the component in a namingContainer.",
                "type": "java.lang.String"
            },
            {
                "name": "rendered",
                "description": "Boolean value to specify the rendering of the component, when set to false component will not be rendered.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "binding",
                "description": "An el expression referring to a server side UIComponent instance in a backing bean.",
                "type": "javax.faces.component.UIComponent"
            },
            {
                "name": "widgetVar",
                "description": "Name of the client side widget.",
                "type": "java.lang.String"
            },
            {
                "name": "model",
                "description": "MenuModel instance to create menus programmatically.",
                "type": "org.primefaces.model.menu.MenuModel"
            },
            {
                "name": "style",
                "description": "Inline style of the component.",
                "type": "java.lang.String"
            },
            {
                "name": "styleClass",
                "description": "Style class of the component.",
                "type": "java.lang.String"
            },
            {
                "name": "autoDisplay",
                "description": "Defines whether submenus will be displayed on mouseover or not. When\n                set to false, click event is required to display.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "delay",
                "description": "Delay in milliseconds before displaying the submenu. Default is 0 meaning immediate.",
                "type": "int"
            },
            {
                "name": "activeIndex",
                "description": "Index of the active root menu to display as highlighted. By default no root is highlighted.",
                "type": "java.lang.Integer"
            },
            {
                "name": "orientation",
                "description": "Defines the orientation of the root menuitems, valid values are \"horizontal\" (default) and \"vertical\".",
                "type": "java.lang.String"
            },
            {
                "name": "dir",
                "description": "Defines text direction, valid values are \"ltr\" (default) and \"rtl\".",
                "type": "java.lang.String"
            }
        ]
    },
    "p:menu": {
        "name": "p:menu",
        "description": "Menu is a navigation component with various customized modes like multi tiers, ipod style sliding and overlays.",
        "attributes": [
            {
                "name": "id",
                "description": "Unique identifier of the component in a namingContainer.",
                "type": "java.lang.String"
            },
            {
                "name": "rendered",
                "description": "Boolean value to specify the rendering of the component, when set to false component will not be rendered.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "binding",
                "description": "An el expression referring to a server side UIComponent instance in a backing bean.",
                "type": "javax.faces.component.UIComponent"
            },
            {
                "name": "widgetVar",
                "description": "Name of the client side widget.",
                "type": "java.lang.String"
            },
            {
                "name": "model",
                "description": "A menu model instance to create menu programmatically.",
                "type": "org.primefaces.model.menu.MenuModel"
            },
            {
                "name": "trigger",
                "description": "Id of component whose click event will show the dynamic positioned menu.",
                "type": "java.lang.String"
            },
            {
                "name": "my",
                "description": "Corner of menu to align with trigger element.",
                "type": "java.lang.String"
            },
            {
                "name": "at",
                "description": "Corner of trigger to align with menu element.",
                "type": "java.lang.String"
            },
            {
                "name": "overlay",
                "description": "Defines positioning, when enabled menu is displayed with absolute positioning relative to the trigger.\n                Default is false, meaning static positioning.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "appendTo",
                "description": "Appends the overlay to the element defined by search expression. Defaults to document body.",
                "type": "java.lang.String"
            },
            {
                "name": "style",
                "description": "Inline style of the main container element.",
                "type": "java.lang.String"
            },
            {
                "name": "styleClass",
                "description": "Style class of the main container element.",
                "type": "java.lang.String"
            },
            {
                "name": "triggerEvent",
                "description": "Event name of component that will show the dynamic positioned menu. Default is click.",
                "type": "java.lang.String"
            },
            {
                "name": "tabindex",
                "description": "Position of the element in the tabbing order. Default is 0.",
                "type": "java.lang.Integer"
            },
            {
                "name": "toggleable",
                "description": "Defines whether clicking the header of a submenu toggles the visibility of children menuitems.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "statefulGlobal",
                "description": "When enabled, menu toggle state is saved globally across pages. If disabled then state is stored per view/page. Default is false.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "collision",
                "description": "Applied only when overlay is set to true. When the overlay menu overflows the window in some direction, move it to an alternative position. Supported values are flip, fit, flipfit and none. See https://api.jqueryui.com/position/ for more details. Defaults to flip. When you the body of your layout does not scroll, you may also want to set the option maxHeight.",
                "type": "java.lang.String"
            },
            {
                "name": "maxHeight",
                "description": "The maximum height of the menu. May be either a number (such as 200), which is interpreted as a height in pixels. Alternatively, may also be a CSS length such as 90vh or 10em. Often used when overlay is set to true, but also works when it is set to false. Useful in case the body of your layout does not scroll, especially in combination with the collision property.",
                "type": "java.lang.String"
            }
        ]
    },
    "p:menubar": {
        "name": "p:menubar",
        "description": "Menubar is a horizontal navigation component.",
        "attributes": [
            {
                "name": "id",
                "description": "Unique identifier of the component in a namingContainer.",
                "type": "java.lang.String"
            },
            {
                "name": "rendered",
                "description": "Boolean value to specify the rendering of the component, when set to false component will not be rendered.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "binding",
                "description": "An el expression referring to a server side UIComponent instance in a backing bean.",
                "type": "javax.faces.component.UIComponent"
            },
            {
                "name": "widgetVar",
                "description": "Name of the client side widget.",
                "type": "java.lang.String"
            },
            {
                "name": "model",
                "description": "MenuModel instance to create menus programmatically.",
                "type": "org.primefaces.model.menu.MenuModel"
            },
            {
                "name": "style",
                "description": "Inline style of menubar.",
                "type": "java.lang.String"
            },
            {
                "name": "styleClass",
                "description": "Style class of menubar.",
                "type": "java.lang.String"
            },
            {
                "name": "autoDisplay",
                "description": "Defines whether the first level of submenus will be displayed on mouseover or not. When\n                set to false, click event is required to display.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "tabindex",
                "description": "Position of the element in the tabbing order. Default is 0.",
                "type": "java.lang.Integer"
            },
            {
                "name": "toggleEvent",
                "description": "Event to toggle the submenus, default is hover. Valid values are \"hover\" and \"click\".",
                "type": "java.lang.String"
            },
            {
                "name": "showDelay",
                "description": "Delay in milliseconds before displaying the submenu. Default is 0 meaning immediate.",
                "type": "java.lang.Integer"
            },
            {
                "name": "hideDelay",
                "description": "Delay in milliseconds before hiding the submenu., if 0 not hidden until document.click(). Default is 0.",
                "type": "java.lang.Integer"
            },
            {
                "name": "dir",
                "description": "Defines text direction, valid values are \"ltr\" (default) and \"rtl\".",
                "type": "java.lang.String"
            }
        ]
    },
    "p:menuButton": {
        "name": "p:menuButton",
        "description": "MenuButton displays different commands in a popup menu.",
        "attributes": [
            {
                "name": "id",
                "description": "Unique identifier of the component in a namingContainer.",
                "type": "java.lang.String"
            },
            {
                "name": "rendered",
                "description": "Boolean value to specify the rendering of the component, when set to false component will not be rendered.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "binding",
                "description": "An el expression referring to a server side UIComponent instance in a backing bean.",
                "type": "javax.faces.component.UIComponent"
            },
            {
                "name": "widgetVar",
                "description": "Name of the client side widget.",
                "type": "java.lang.String"
            },
            {
                "name": "model",
                "description": "MenuModel instance to create menus programmatically.",
                "type": "org.primefaces.model.menu.MenuModel"
            },
            {
                "name": "value",
                "description": "Label of the button.",
                "type": "java.lang.String"
            },
            {
                "name": "style",
                "description": "Style of the main container element.",
                "type": "java.lang.String"
            },
            {
                "name": "styleClass",
                "description": "Style class of the main container element.",
                "type": "java.lang.String"
            },
            {
                "name": "disabled",
                "description": "Disables or enables the button.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "icon",
                "description": "Icon of the menu button.",
                "type": "java.lang.String"
            },
            {
                "name": "iconPos",
                "description": "Position of the icon, default value is left.",
                "type": "java.lang.String"
            },
            {
                "name": "appendTo",
                "description": "Appends the overlay to the element defined by search expression. Defaults to the document body.",
                "type": "java.lang.String"
            },
            {
                "name": "menuStyleClass",
                "description": "Style class of the overlay menu element.",
                "type": "java.lang.String"
            },
            {
                "name": "title",
                "description": "Advisory tooltip information.",
                "type": "java.lang.String"
            },
            {
                "name": "ariaLabel",
                "description": "The aria-label attribute is used to define a string that labels the current element for accessibility.",
                "type": "java.lang.String"
            },
            {
                "name": "collision",
                "description": "For the overlay menu that shows up when the menu button is clicked. When the overlay menu overflows the window in some direction, move it to an alternative position. Supported values are flip, fit, flipfit and none. See https://api.jqueryui.com/position/ for more details. Defaults to flip. When you the body of your layout does not scroll, you may also want to set the option maxHeight.",
                "type": "java.lang.String"
            },
            {
                "name": "maxHeight",
                "description": "The maximum height of the overlay menu that shows up when the menu button is clicked. May be either a number (such as 200), which is interpreted as a height in pixels. Alternatively, may also be a CSS length such as 90vh or 10em. Useful in case the body of your layout does not scroll, especially in combination with the collision property.",
                "type": "java.lang.String"
            },
            {
                "name": "buttonStyle",
                "description": "Style of the button.",
                "type": "java.lang.String"
            },
            {
                "name": "buttonStyleClass",
                "description": "Style class for the button.",
                "type": "java.lang.String"
            },
            {
                "name": "disableOnAjax",
                "description": "If true, the button will be disabled during Ajax requests triggered by its menu items. Default is 'true'.",
                "type": "java.lang.Boolean"
            }
        ]
    },
    "p:menuitem": {
        "name": "p:menuitem",
        "description": "Menuitem is used by various menu components of PrimeFaces.",
        "attributes": [
            {
                "name": "id",
                "description": "Unique identifier of the component in a namingContainer.",
                "type": "java.lang.String"
            },
            {
                "name": "rendered",
                "description": "Boolean value to specify the rendering of the component, when set to false component will not be rendered.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "binding",
                "description": "An el expression referring to a server side UIComponent instance in a backing bean.",
                "type": "javax.faces.component.UIComponent"
            },
            {
                "name": "value",
                "description": "Label of the component.",
                "type": "java.lang.Object"
            },
            {
                "name": "actionListener",
                "description": "An actionlistener to process when command is executed.",
                "type": "javax.faces.event.ActionListener"
            },
            {
                "name": "action",
                "description": "A method expression or a string outcome to process when command is executed.",
                "type": "javax.el.MethodExpression"
            },
            {
                "name": "immediate",
                "description": "Boolean value that determines the phaseId of the action event,\n    when true actions are processed at \"Apply Request Values\", when false at \"Invoke Application\" phase.",
                "type": "boolean"
            },
            {
                "name": "url",
                "description": "Url to be navigated when menuitem is clicked.",
                "type": "java.lang.String"
            },
            {
                "name": "target",
                "description": "Target type of url navigation.",
                "type": "java.lang.String"
            },
            {
                "name": "style",
                "description": "Style of the menuitem label.",
                "type": "java.lang.String"
            },
            {
                "name": "styleClass",
                "description": "StyleClass of the menuitem label.",
                "type": "java.lang.String"
            },
            {
                "name": "onclick",
                "description": "Javascript event handler for click event.",
                "type": "java.lang.String"
            },
            {
                "name": "update",
                "description": "Client side id of the component(s) to be updated after async partial submit request.",
                "type": "java.lang.String"
            },
            {
                "name": "process",
                "description": "Component id(s) to process partially instead of whole view.",
                "type": "java.lang.String"
            },
            {
                "name": "onstart",
                "description": "Javascript handler to execute before ajax request begins.",
                "type": "java.lang.String"
            },
            {
                "name": "disabled",
                "description": "Disables or enables the menu item.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "oncomplete",
                "description": "Javascript handler to execute when ajax request is completed.",
                "type": "java.lang.String"
            },
            {
                "name": "onerror",
                "description": "Javascript handler to execute when ajax request fails.",
                "type": "java.lang.String"
            },
            {
                "name": "onsuccess",
                "description": "Javascript handler to execute when ajax request succeeds.",
                "type": "java.lang.String"
            },
            {
                "name": "global",
                "description": "Global ajax requests are listened by ajaxStatus component, setting global to false will not trigger ajaxStatus.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "delay",
                "description": "If less than delay milliseconds elapses between calls to request() only the most recent one is sent and all other requests are discarded. The default value of this option is null. If the value of delay is the literal string 'none' without the quotes or the default, no delay is used.",
                "type": "java.lang.String"
            },
            {
                "name": "timeout",
                "description": "Defines the timeout for the ajax request.",
                "type": "java.lang.Integer"
            },
            {
                "name": "async",
                "description": "When set to true, ajax requests are not queued.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "ajax",
                "description": "Specifies submit mode.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "icon",
                "description": "Path of the menuitem image.",
                "type": "java.lang.String"
            },
            {
                "name": "iconPos",
                "description": "Position of the icon, default value is left.",
                "type": "java.lang.String"
            },
            {
                "name": "partialSubmit",
                "description": "When enabled, only values related to partially processed components would be serialized for ajax\n                instead of whole form.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "resetValues",
                "description": "If true, indicate that this particular Ajax transaction is a value reset transaction. This will cause resetValue() to be called on any EditableValueHolder instances encountered as a result of this ajax transaction. If not specified, or the value is false, no such indication is made.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "ignoreAutoUpdate",
                "description": "If true, components which use p:autoUpdate will not be updated for this request. If not specified, or the value is false, no such indication is made.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "title",
                "description": "Title text of the menuitem.",
                "type": "java.lang.String"
            },
            {
                "name": "outcome",
                "description": "Used to resolve a navigation case.",
                "type": "java.lang.String"
            },
            {
                "name": "includeViewParams",
                "description": "Whether to include page parameters in target URI. Default is false.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "fragment",
                "description": "Identifier of the target page which should be scrolled to.",
                "type": "java.lang.String"
            },
            {
                "name": "disableClientWindow",
                "description": "Disable appending the\n             on the rendering of this element.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "containerStyle",
                "description": "Style of the menuitem container.",
                "type": "java.lang.String"
            },
            {
                "name": "containerStyleClass",
                "description": "StyleClass of the menuitem container.",
                "type": "java.lang.String"
            },
            {
                "name": "partialSubmitFilter",
                "description": "Selector to use when partial submit is on, default is \":input\" to select all descendant inputs of a partially processed components.",
                "type": "java.lang.String"
            },
            {
                "name": "form",
                "description": "Form to serialize for an ajax request. Default is the enclosing form.",
                "type": "java.lang.String"
            },
            {
                "name": "escape",
                "description": "Defines whether value would be escaped or not, defaults to true.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "rel",
                "description": "Defines the relationship between the current document and the linked document.",
                "type": "java.lang.String"
            },
            {
                "name": "ignoreComponentNotFound",
                "description": "If true, unresolvable components referenced in the update/process attribute are ignored. Default is 'false' and therefore a ComponentNotFoundException will be thrown.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "ariaLabel",
                "description": "The aria-label attribute is used to define a string that labels the current element for accessibility.",
                "type": "java.lang.String"
            },
            {
                "name": "badge",
                "description": "Badge value (String) or BadgeModel instance of the badge to render for this menuitem. Default value is null.",
                "type": "java.lang.Object"
            }
        ]
    },
    "p:message": {
        "name": "p:message",
        "description": "Message is a pre-skinned extended version of the standard Faces message component with extensions.",
        "attributes": [
            {
                "name": "id",
                "description": "Unique identifier of the component in a namingContainer.",
                "type": "java.lang.String"
            },
            {
                "name": "rendered",
                "description": "Boolean value to specify the rendering of the component, when set to false component will not be rendered.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "binding",
                "description": "An el expression referring to a server side UIComponent instance in a backing bean.",
                "type": "javax.faces.component.UIComponent"
            },
            {
                "name": "widgetVar",
                "description": "Name of the client side widget.",
                "type": "java.lang.String"
            },
            {
                "name": "showSummary",
                "description": "Specifies if the summary of the FacesMessage should be displayed. Default is false.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "showDetail",
                "description": "Specifies if the summary of the FacesMessage should be displayed. Default is true.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "for",
                "description": "Identifier of the component whose messages to display only, takes precendence when used with globalOnly.",
                "type": "java.lang.String"
            },
            {
                "name": "redisplay",
                "description": "Defines if already rendered messages should be displayed. Default is true.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "display",
                "description": "Defines display mode, valid values are text, icon and both(default).",
                "type": "java.lang.String"
            },
            {
                "name": "escape",
                "description": "Defines whether html would be escaped or not, defaults to true.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "severity",
                "description": "Comma separated list of severities to display only.",
                "type": "java.lang.String"
            },
            {
                "name": "style",
                "description": "Inline style of the component.",
                "type": "java.lang.String"
            },
            {
                "name": "styleClass",
                "description": "Style class of the component.",
                "type": "java.lang.String"
            },
            {
                "name": "skipDetailIfEqualsSummary",
                "description": "Defines if rendering of the detail text should be skipped, if the detail and summaray are equals. Default is false.",
                "type": "java.lang.Boolean"
            }
        ]
    },
    "p:messages": {
        "name": "p:messages",
        "description": "Messages is a pre-skinned extended version of the standard Faces messages component with extensions.",
        "attributes": [
            {
                "name": "id",
                "description": "Unique identifier of the component in a namingContainer.",
                "type": "java.lang.String"
            },
            {
                "name": "rendered",
                "description": "Boolean value to specify the rendering of the component, when set to false component will not be rendered.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "binding",
                "description": "An el expression referring to a server side UIComponent instance in a backing bean.",
                "type": "javax.faces.component.UIComponent"
            },
            {
                "name": "widgetVar",
                "description": "Name of the client side widget.",
                "type": "java.lang.String"
            },
            {
                "name": "showSummary",
                "description": "Specifies if the summary of the FacesMessage should be displayed. Default is true.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "showDetail",
                "description": "Specifies if the detail of the FacesMessage should be displayed. Default is false.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "globalOnly",
                "description": "When true, only facesmessages with no clientIds are displayed. Default is false.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "redisplay",
                "description": "Defines if already rendered messages should be displayed. Default is true.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "for",
                "description": "Identifier of the component whose messages to display only, takes precendence when used\n                with globalOnly.",
                "type": "java.lang.String"
            },
            {
                "name": "escape",
                "description": "Defines whether html would be escaped or not, defaults to true.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "severity",
                "description": "Comma seperated list of severities to display only.",
                "type": "java.lang.String"
            },
            {
                "name": "closable",
                "description": "Adds a close icon to hide the messages.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "style",
                "description": "Inline style of the component.",
                "type": "java.lang.String"
            },
            {
                "name": "styleClass",
                "description": "Style class of the component.",
                "type": "java.lang.String"
            },
            {
                "name": "showIcon",
                "description": "Defines if severity icons would be displayed. Default is true.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "forType",
                "description": "Type of the \"for\" attribute. Valid values are \"key\" and \"expression\".",
                "type": "java.lang.String"
            },
            {
                "name": "forIgnores",
                "description": "Defines a list of keys and clientIds, which should NOT be rendered by this component. Seperated by space or comma.",
                "type": "java.lang.String"
            },
            {
                "name": "skipDetailIfEqualsSummary",
                "description": "Defines if rendering of the detail text should be skipped, if the detail and summaray are equals. Default is false.",
                "type": "java.lang.Boolean"
            }
        ]
    },
    "p:mindmap": {
        "name": "p:mindmap",
        "description": "MindMap is an interactive mindmapping component.",
        "attributes": [
            {
                "name": "id",
                "description": "Unique identifier of the component in a namingContainer.",
                "type": "java.lang.String"
            },
            {
                "name": "rendered",
                "description": "Boolean value to specify the rendering of the component, when set to false component will not be rendered.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "binding",
                "description": "An el expression referring to a server side UIComponent instance in a backing bean.",
                "type": "javax.faces.component.UIComponent"
            },
            {
                "name": "widgetVar",
                "description": "Name of the client side widget.",
                "type": "java.lang.String"
            },
            {
                "name": "value",
                "description": "An org.primefaces.model.MindmapNode instance as the root node.",
                "type": "org.primefaces.model.mindmap.MindmapNode"
            },
            {
                "name": "style",
                "description": "Inline style of the component",
                "type": "java.lang.String"
            },
            {
                "name": "styleClass",
                "description": "Style class of the component.",
                "type": "java.lang.String"
            },
            {
                "name": "effectSpeed",
                "description": "Speed of the animations in ms.",
                "type": "java.lang.Integer"
            }
        ]
    },
    "p:multiSelectListbox": {
        "name": "p:multiSelectListbox",
        "description": "MultiSelectListbox is used to select an item from a collection of listboxes that are in parent-child relationship.",
        "attributes": [
            {
                "name": "id",
                "description": "Unique identifier of the component in a namingContainer.",
                "type": "java.lang.String"
            },
            {
                "name": "rendered",
                "description": "Boolean value to specify the rendering of the component, when set to false component will not be rendered.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "binding",
                "description": "An el expression referring to a server side UIComponent instance in a backing bean.",
                "type": "javax.faces.component.UIComponent"
            },
            {
                "name": "value",
                "description": "Value of the component.",
                "type": "java.lang.Object"
            },
            {
                "name": "converter",
                "description": "An el expression or a literal text that defines a converter for the component. When it's an EL expression, it's resolved to a converter instance.\n    In case it's a static text, it must refer to a converter id.",
                "type": "javax.faces.convert.Converter"
            },
            {
                "name": "immediate",
                "description": "When set true, process validations logic is executed at apply request values phase for this component. Default is false.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "required",
                "description": "Marks component as required.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "validator",
                "description": "A method expression referring to a method validating the input.",
                "type": "javax.faces.validator.Validator"
            },
            {
                "name": "valueChangeListener",
                "description": "A method binding expression referring to a method for handling a valuchangeevent.",
                "type": "javax.faces.event.ValueChangeListener"
            },
            {
                "name": "requiredMessage",
                "description": "Message to display when required field validation fails.",
                "type": "java.lang.String"
            },
            {
                "name": "converterMessage",
                "description": "Message to display when conversion fails.",
                "type": "java.lang.String"
            },
            {
                "name": "validatorMessage",
                "description": "Message to display when validation fails.",
                "type": "java.lang.String"
            },
            {
                "name": "widgetVar",
                "description": "Name of the client side widget.",
                "type": "java.lang.String"
            },
            {
                "name": "style",
                "description": "Style of the main container.",
                "type": "java.lang.String"
            },
            {
                "name": "styleClass",
                "description": "Style class of the main container.",
                "type": "java.lang.String"
            },
            {
                "name": "disabled",
                "description": "Disables or enables the component.",
                "type": "boolean"
            },
            {
                "name": "readonly",
                "description": "Flag indicating that this component will prevent changes by the user.",
                "type": "boolean"
            },
            {
                "name": "effect",
                "description": "Effect to use when showing a group of items.",
                "type": "java.lang.String"
            },
            {
                "name": "showHeaders",
                "description": "Displays label of a group at header section of the children items. Defaults to false.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "header",
                "description": "Label of the root group items.",
                "type": "java.lang.String"
            },
            {
                "name": "hideNoSelectionOption",
                "description": "Flag indicating that, if this component is activated by the user, The \"no selection option\", if any, must be hidden.",
                "type": "boolean"
            }
        ]
    },
    "p:notificationBar": {
        "name": "p:notificationBar",
        "description": "NotificationBar displayes a multipurpose fixed positioned panel for notification. Any group of Faces content can be placed inside notificationbar.",
        "attributes": [
            {
                "name": "id",
                "description": "Unique identifier of the component in a namingContainer.",
                "type": "java.lang.String"
            },
            {
                "name": "rendered",
                "description": "Boolean value to specify the rendering of the component, when set to false component will not be rendered.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "binding",
                "description": "An el expression referring to a server side UIComponent instance in a backing bean.",
                "type": "javax.faces.component.UIComponent"
            },
            {
                "name": "widgetVar",
                "description": "Name of the client side widget.",
                "type": "java.lang.String"
            },
            {
                "name": "style",
                "description": "Style of the container element.",
                "type": "java.lang.String"
            },
            {
                "name": "styleClass",
                "description": "StyleClass of the container element.",
                "type": "java.lang.String"
            },
            {
                "name": "position",
                "description": "Position of the bar, \"top\" or \"bottom\". Default is top.",
                "type": "java.lang.String"
            },
            {
                "name": "effect",
                "description": "Name of the effect, \"fade\", \"slide\" or \"none\". Default is fade.",
                "type": "java.lang.String"
            },
            {
                "name": "effectSpeed",
                "description": "Speed of the effect, \"slow\", \"normal\" or \"fast\". Default is normal.",
                "type": "java.lang.String"
            },
            {
                "name": "autoDisplay",
                "description": "",
                "type": "java.lang.Boolean"
            }
        ]
    },
    "p:orderList": {
        "name": "p:orderList",
        "description": "OrderList is used to sort a collection.",
        "attributes": [
            {
                "name": "id",
                "description": "Unique identifier of the component in a namingContainer.",
                "type": "java.lang.String"
            },
            {
                "name": "rendered",
                "description": "Boolean value to specify the rendering of the component, when set to false component will not be rendered.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "binding",
                "description": "An el expression referring to a server side UIComponent instance in a backing bean.",
                "type": "javax.faces.component.UIComponent"
            },
            {
                "name": "value",
                "description": "Value of the component.",
                "type": "java.lang.Object"
            },
            {
                "name": "converter",
                "description": "An el expression or a literal text that defines a converter for the component. When it's an EL expression, it's resolved to a converter instance.\n    In case it's a static text, it must refer to a converter id.",
                "type": "javax.faces.convert.Converter"
            },
            {
                "name": "immediate",
                "description": "When set true, process validations logic is executed at apply request values phase for this component. Default is false.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "required",
                "description": "Marks component as required.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "validator",
                "description": "A method expression referring to a method validating the input.",
                "type": "javax.faces.validator.Validator"
            },
            {
                "name": "valueChangeListener",
                "description": "A method binding expression referring to a method for handling a valuchangeevent.",
                "type": "javax.faces.event.ValueChangeListener"
            },
            {
                "name": "requiredMessage",
                "description": "Message to display when required field validation fails.",
                "type": "java.lang.String"
            },
            {
                "name": "converterMessage",
                "description": "Message to display when conversion fails.",
                "type": "java.lang.String"
            },
            {
                "name": "validatorMessage",
                "description": "Message to display when validation fails.",
                "type": "java.lang.String"
            },
            {
                "name": "widgetVar",
                "description": "Name of the client side widget.",
                "type": "java.lang.String"
            },
            {
                "name": "var",
                "description": "Name of the iterator variable that references each element in the data set.",
                "type": "String"
            },
            {
                "name": "itemLabel",
                "description": "Label of an item.",
                "type": "java.lang.String"
            },
            {
                "name": "itemValue",
                "description": "Value of an item.",
                "type": "java.lang.Object"
            },
            {
                "name": "style",
                "description": "Style of the main container.",
                "type": "java.lang.String"
            },
            {
                "name": "styleClass",
                "description": "Style class of the main container.",
                "type": "java.lang.String"
            },
            {
                "name": "disabled",
                "description": "Disables the component.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "effect",
                "description": "Name of the animation to display. Default is fade.",
                "type": "java.lang.String"
            },
            {
                "name": "moveUpLabel",
                "description": "Text of move up button. Default is \"Move Up\".",
                "type": "java.lang.String"
            },
            {
                "name": "moveTopLabel",
                "description": "Text of move top button. Default is \"Move Top\".",
                "type": "java.lang.String"
            },
            {
                "name": "moveDownLabel",
                "description": "Text of move down button. Default is \"Move Down\".",
                "type": "java.lang.String"
            },
            {
                "name": "moveBottomLabel",
                "description": "Text of move bottom button. Default is \"Move Bottom\".",
                "type": "java.lang.String"
            },
            {
                "name": "controlsLocation",
                "description": "Location of the order controls, valid values are \"left\" (default), \"right\" and none.",
                "type": "java.lang.String"
            },
            {
                "name": "responsive",
                "description": "In responsive mode, orderList adjusts itself based on screen width.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "flex",
                "description": "Use modern PrimeFlex-Grid instead of classic Grid CSS.",
                "type": "java.lang.Boolean"
            }
        ]
    },
    "p:organigram": {
        "name": "p:organigram",
        "description": "Organigram is a data component to display an organizational hierarchy.",
        "attributes": [
            {
                "name": "id",
                "description": "Unique identifier of the component in a namingContainer.",
                "type": "java.lang.String"
            },
            {
                "name": "rendered",
                "description": "Boolean value to specify the rendering of the component, when set to false component will not be rendered.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "binding",
                "description": "An el expression referring to a server side UIComponent instance in a backing bean.",
                "type": "javax.faces.component.UIComponent"
            },
            {
                "name": "widgetVar",
                "description": "Name of the client side widget.",
                "type": "java.lang.String"
            },
            {
                "name": "value",
                "description": "The model.",
                "type": "org.primefaces.model.OrganigramNode"
            },
            {
                "name": "var",
                "description": "Name of the request-scoped variable that'll be used to refer each treenode data during rendering.",
                "type": "String"
            },
            {
                "name": "selection",
                "description": "OrganigramNode to reference the selections.",
                "type": "org.primefaces.model.OrganigramNode"
            },
            {
                "name": "style",
                "description": "Style of the main container element of organigram.",
                "type": "java.lang.String"
            },
            {
                "name": "styleClass",
                "description": "Style class of the main container element of organigram.",
                "type": "java.lang.String"
            },
            {
                "name": "leafNodeConnectorHeight",
                "description": "The height of the connector line for leaf nodes.",
                "type": "java.lang.Integer"
            },
            {
                "name": "zoom",
                "description": "Defines if zoom controls are rendered.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "autoScrollToSelection",
                "description": "Auto scroll to the selected node on rendering if enabled.",
                "type": "java.lang.Boolean"
            }
        ]
    },
    "p:organigramNode": {
        "name": "p:organigramNode",
        "description": "Organigram requires an instance of OrganigramNode interface as its value to define the root, a\n            default implementation DefaultOrganigramNode is provided. Each node has a type where each\n            node at the backend needs to match the p:organigramNode helper component.",
        "attributes": [
            {
                "name": "id",
                "description": "Unique identifier of the component in a namingContainer.",
                "type": "java.lang.String"
            },
            {
                "name": "rendered",
                "description": "Boolean value to specify the rendering of the component, when set to false component will not be rendered.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "binding",
                "description": "An el expression referring to a server side UIComponent instance in a backing bean.",
                "type": "javax.faces.component.UIComponent"
            },
            {
                "name": "type",
                "description": "Type of the node. Default is \"default\"",
                "type": "java.lang.String"
            },
            {
                "name": "style",
                "description": "style to apply to a node type.",
                "type": "java.lang.String"
            },
            {
                "name": "styleClass",
                "description": "Style class to apply to a node type.",
                "type": "java.lang.String"
            },
            {
                "name": "icon",
                "description": "The icon to be displayed",
                "type": "java.lang.String"
            },
            {
                "name": "iconPos",
                "description": "The icon position. Empty, \"right\" or \"left\".",
                "type": "java.lang.String"
            },
            {
                "name": "expandedIcon",
                "description": "The expanded icon.",
                "type": "java.lang.String"
            },
            {
                "name": "collapsedIcon",
                "description": "The collapsed icon.",
                "type": "java.lang.String"
            },
            {
                "name": "skipLeafHandling",
                "description": "If the leaf handling should be skipped.",
                "type": "java.lang.Boolean"
            }
        ]
    },
    "p:outputLabel": {
        "name": "p:outputLabel",
        "description": "OutputLabel is an extension to the standard outputLabel.",
        "attributes": [
            {
                "name": "id",
                "description": "Unique identifier of the component in a namingContainer.",
                "type": "java.lang.String"
            },
            {
                "name": "rendered",
                "description": "Boolean value to specify the rendering of the component, when set to false component will not be rendered.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "binding",
                "description": "An el expression referring to a server side UIComponent instance in a backing bean.",
                "type": "javax.faces.component.UIComponent"
            },
            {
                "name": "value",
                "description": "Label to display.",
                "type": "java.lang.String"
            },
            {
                "name": "accesskey",
                "description": "The accesskey attribute is a standard HTML attribute that sets the access key that transfers focus to this element when pressed.",
                "type": "java.lang.String"
            },
            {
                "name": "dir",
                "description": "Direction indication for text that does not inherit directionality. Valid values are LTR and RTL.",
                "type": "java.lang.String"
            },
            {
                "name": "escape",
                "description": "Defines if value should be escaped or not.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "for",
                "description": "Id of the associated input component.",
                "type": "java.lang.String"
            },
            {
                "name": "lang",
                "description": "The lang attribute is a standard HTML attribute that sets the code describing the language to be used in the markup generated by this component..",
                "type": "java.lang.String"
            },
            {
                "name": "tabindex",
                "description": "Position in the tabbing order.",
                "type": "java.lang.String"
            },
            {
                "name": "title",
                "description": "Advisory tooltip information.",
                "type": "java.lang.String"
            },
            {
                "name": "style",
                "description": "Inline style of the component.",
                "type": "java.lang.String"
            },
            {
                "name": "styleClass",
                "description": "Style class of the component.",
                "type": "java.lang.String"
            },
            {
                "name": "onblur",
                "description": "Client side callback to execute when component loses focus.",
                "type": "java.lang.String"
            },
            {
                "name": "onclick",
                "description": "Client side callback to execute when component is clicked.",
                "type": "java.lang.String"
            },
            {
                "name": "ondblclick",
                "description": "Client side callback to execute when component is double clicked.",
                "type": "java.lang.String"
            },
            {
                "name": "onfocus",
                "description": "Client side callback to execute when component receives focus.",
                "type": "java.lang.String"
            },
            {
                "name": "onkeydown",
                "description": "Client side callback to execute when a key is pressed down over component.",
                "type": "java.lang.String"
            },
            {
                "name": "onkeypress",
                "description": "Client side callback to execute when a key is pressed and released over component.",
                "type": "java.lang.String"
            },
            {
                "name": "onkeyup",
                "description": "Client side callback to execute when a key is released over component.",
                "type": "java.lang.String"
            },
            {
                "name": "onmousedown",
                "description": "Client side callback to execute when a pointer button is pressed down over component.",
                "type": "java.lang.String"
            },
            {
                "name": "onmousemove",
                "description": "Client side callback to execute when a pointer button is moved within component.",
                "type": "java.lang.String"
            },
            {
                "name": "onmouseout",
                "description": "Client side callback to execute when a pointer button is moved away from component.",
                "type": "java.lang.String"
            },
            {
                "name": "onmouseover",
                "description": "Client side callback to execute when a pointer button is moved onto component.",
                "type": "java.lang.String"
            },
            {
                "name": "onmouseup",
                "description": "Client side callback to execute when a pointer button is released over component.",
                "type": "java.lang.String"
            },
            {
                "name": "indicateRequired",
                "description": "Controls the required (*) indicator. Auto = displayed based on the required attribute OR if @NotNull is present. AutoSkipDisabled = Auto but checks input for disabled/readonly. false = never displayed. true = always displayed.",
                "type": "java.lang.String"
            },
            {
                "name": "converter",
                "description": "An el expression or a literal text that defines a converter for the component. When it's an EL expression, it's resolved to a converter instance.\n                In case it's a static text, it must refer to a converter id.",
                "type": "javax.faces.convert.Converter"
            }
        ]
    },
    "p:outputPanel": {
        "name": "p:outputPanel",
        "description": "OutputPanel is a panel component with the ability to deferred loading, which is also the key feature of this component.",
        "attributes": [
            {
                "name": "id",
                "description": "Unique identifier of the component in a namingContainer.",
                "type": "java.lang.String"
            },
            {
                "name": "rendered",
                "description": "Boolean value to specify the rendering of the component, when set to false component will not be rendered.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "binding",
                "description": "An el expression referring to a server side UIComponent instance in a backing bean.",
                "type": "javax.faces.component.UIComponent"
            },
            {
                "name": "widgetVar",
                "description": "Name of the client side widget.",
                "type": "java.lang.String"
            },
            {
                "name": "style",
                "description": "Style of the html container element.",
                "type": "java.lang.String"
            },
            {
                "name": "styleClass",
                "description": "StyleClass of the html container element.",
                "type": "java.lang.String"
            },
            {
                "name": "deferred",
                "description": "Deferred mode loads the contents after page load to speed up page load.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "deferredMode",
                "description": "Defines deferred loading mode, valid values are \"load\" (after page load) and \"visible\" (once the panel is visible on scroll). Default value is \"load\".",
                "type": "java.lang.String"
            },
            {
                "name": "layout",
                "description": "Shortcut for the css display property, valid values are block (default) and inline.",
                "type": "java.lang.String"
            },
            {
                "name": "loaded",
                "description": "Indicates that deferred loading is not needed. Default is null.",
                "type": "java.lang.Boolean"
            }
        ]
    },
    "p:overlayPanel": {
        "name": "p:overlayPanel",
        "description": "OverlayPanel is a generic container component that is displayed as a popup.",
        "attributes": [
            {
                "name": "id",
                "description": "Unique identifier of the component in a namingContainer.",
                "type": "java.lang.String"
            },
            {
                "name": "rendered",
                "description": "Boolean value to specify the rendering of the component, when set to false component will not be rendered.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "binding",
                "description": "An el expression referring to a server side UIComponent instance in a backing bean.",
                "type": "javax.faces.component.UIComponent"
            },
            {
                "name": "widgetVar",
                "description": "Name of the client side widget.",
                "type": "java.lang.String"
            },
            {
                "name": "style",
                "description": "Inline style of the component.",
                "type": "java.lang.String"
            },
            {
                "name": "styleClass",
                "description": "Style class of the component.",
                "type": "java.lang.String"
            },
            {
                "name": "for",
                "description": "Identifier of the target component to show the panel.",
                "type": "java.lang.String"
            },
            {
                "name": "blockScroll",
                "description": "Whether to block scrolling of the document when panel is modal.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "autoHide",
                "description": "Whether to hide overlay when hovering over overlay content when using custom show/hide events, default is true.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "showEvent",
                "description": "Event to show the overlay panel if 'none', the overlay panel will only be displayed by `show()` or `toggle()`. default is \"click\".",
                "type": "java.lang.String"
            },
            {
                "name": "hideEvent",
                "description": "Event to hide the overlay panel, default is \"click\".",
                "type": "java.lang.String"
            },
            {
                "name": "appendTo",
                "description": "Appends the overlayPanel to the given search expression.",
                "type": "java.lang.String"
            },
            {
                "name": "onShow",
                "description": "Client side callback to execute when panel is displayed.",
                "type": "java.lang.String"
            },
            {
                "name": "onHide",
                "description": "Client side callback to execute when panel is hidden.",
                "type": "java.lang.String"
            },
            {
                "name": "my",
                "description": "Position of the panel relative to the target.",
                "type": "java.lang.String"
            },
            {
                "name": "at",
                "description": "Position of the target relative to the panel.",
                "type": "java.lang.String"
            },
            {
                "name": "collision",
                "description": "When the positioned element overflows the window in some direction, move it to an alternative position. Similar to my and at, this accepts a single value or a pair for horizontal/vertical, e.g., \"flip\", \"fit\", \"fit flip\", \"fit none\".",
                "type": "java.lang.String"
            },
            {
                "name": "dynamic",
                "description": "Dynamic mode allows overlay panel to fetch it's contents before it's shown rather than on page load\n                which is useful to reduce initial page load times. Default is false.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "cache",
                "description": "Only relevant for dynamic=\"true\": Defines if activating the panel should load the contents from server again. For cache=\"true\" (default) the panel content is only loaded once.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "dismissable",
                "description": "When set true, clicking outside of the panel hides the overlay.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "showCloseIcon",
                "description": "Displays a close icon to hide the overlay, default is false.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "modal",
                "description": "Boolean value that specifies whether the document should be shielded with a partially transparent mask to require the user to close the Panel before being able to activate any elements in the document. Default is false.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "showDelay",
                "description": "Delay time to show overlay panel in milliseconds. Default is 0.",
                "type": "java.lang.Integer"
            }
        ]
    },
    "p:panel": {
        "name": "p:panel",
        "description": "Panel is a grouping component for other components, notable features are toggling, closing, built-in popup menu and ajax event listeners.",
        "attributes": [
            {
                "name": "id",
                "description": "Unique identifier of the component in a namingContainer.",
                "type": "java.lang.String"
            },
            {
                "name": "rendered",
                "description": "Boolean value to specify the rendering of the component, when set to false component will not be rendered.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "binding",
                "description": "An el expression referring to a server side UIComponent instance in a backing bean.",
                "type": "javax.faces.component.UIComponent"
            },
            {
                "name": "widgetVar",
                "description": "Name of the client side widget.",
                "type": "java.lang.String"
            },
            {
                "name": "header",
                "description": "Header text.",
                "type": "java.lang.String"
            },
            {
                "name": "footer",
                "description": "Footer text.",
                "type": "java.lang.String"
            },
            {
                "name": "toggleable",
                "description": "Makes panel toggleable. Default is false.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "toggleSpeed",
                "description": "Speed of toggling in milliseconds. Default is 500",
                "type": "java.lang.Integer"
            },
            {
                "name": "style",
                "description": "Style of the panel.",
                "type": "java.lang.String"
            },
            {
                "name": "styleClass",
                "description": "Style class of the panel.",
                "type": "java.lang.String"
            },
            {
                "name": "collapsed",
                "description": "Renders a toggleable panel as collapsed. Default is false.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "closable",
                "description": "Make panel closable. Default is false.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "closeSpeed",
                "description": "Speed of closing effect in milliseconds. Default is 500.",
                "type": "java.lang.Integer"
            },
            {
                "name": "visible",
                "description": "Renders panel as hidden. Default is true.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "closeTitle",
                "description": "Title label for closer element of closable panel.",
                "type": "java.lang.String"
            },
            {
                "name": "toggleTitle",
                "description": "Title attribute for toggler element of toggleable panel.",
                "type": "java.lang.String"
            },
            {
                "name": "menuTitle",
                "description": "Title attribute for menu element on panel header.",
                "type": "java.lang.String"
            },
            {
                "name": "renderEmptyFacets",
                "description": "Render facets even if their children are not rendered. Default is false.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "toggleOrientation",
                "description": "Defines the orientation of the toggle animation, valid values are \"vertical\" and \"horizontal\".",
                "type": "java.lang.String"
            },
            {
                "name": "toggleableHeader",
                "description": "Defines if the panel is toggleable by clicking on the whole panel header. Default is false.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "multiViewState",
                "description": "Whether to keep Panel state across views, defaults to false.",
                "type": "java.lang.Boolean"
            }
        ]
    },
    "p:panelGrid": {
        "name": "p:panelGrid",
        "description": "PanelGrid is an extension to the standard Faces PanelGrid with responsive CSS and skinning.",
        "attributes": [
            {
                "name": "id",
                "description": "Unique identifier of the component in a namingContainer.",
                "type": "java.lang.String"
            },
            {
                "name": "rendered",
                "description": "Boolean value to specify the rendering of the component, when set to false component will not be rendered.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "binding",
                "description": "An el expression referring to a server side UIComponent instance in a backing bean.",
                "type": "javax.faces.component.UIComponent"
            },
            {
                "name": "columns",
                "description": "Number of columns of the table.",
                "type": "java.lang.Integer"
            },
            {
                "name": "style",
                "description": "Inline style of the panel/table.",
                "type": "java.lang.String"
            },
            {
                "name": "contentStyle",
                "description": "Inline style of the panel-content.",
                "type": "java.lang.String"
            },
            {
                "name": "styleClass",
                "description": "Style class of the panel/table.",
                "type": "java.lang.String"
            },
            {
                "name": "contentStyleClass",
                "description": "Style class of the panel-content.",
                "type": "java.lang.String"
            },
            {
                "name": "columnClasses",
                "description": "Comma separated list of column style classes.",
                "type": "java.lang.String"
            },
            {
                "name": "layout",
                "description": "Displays data in a 'tabular' layout, 'grid' layout or 'flex' layout. The grid and flex layout are responsive layouts. Default value is 'grid'.",
                "type": "java.lang.String"
            },
            {
                "name": "role",
                "description": "Role for aria.",
                "type": "java.lang.String"
            }
        ]
    },
    "p:panelMenu": {
        "name": "p:panelMenu",
        "description": "PanelMenu is a hybrid of accordion-tree components used for navigations and actions.",
        "attributes": [
            {
                "name": "id",
                "description": "Unique identifier of the component in a namingContainer.",
                "type": "java.lang.String"
            },
            {
                "name": "rendered",
                "description": "Boolean value to specify the rendering of the component, when set to false component will not be rendered.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "binding",
                "description": "An el expression referring to a server side UIComponent instance in a backing bean.",
                "type": "javax.faces.component.UIComponent"
            },
            {
                "name": "widgetVar",
                "description": "Name of the client side widget.",
                "type": "java.lang.String"
            },
            {
                "name": "model",
                "description": "A menu model instance to create menu programmatically.",
                "type": "org.primefaces.model.menu.MenuModel"
            },
            {
                "name": "style",
                "description": "Inline style of the container element.",
                "type": "java.lang.String"
            },
            {
                "name": "styleClass",
                "description": "Style class of the container element.",
                "type": "java.lang.String"
            },
            {
                "name": "stateful",
                "description": "When enabled, menu state is saved in HTML5 Local Storage. Default is true.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "statefulGlobal",
                "description": "When enabled, menu state is saved globally across pages. If disabled then state is stored per view/page. Default is false.",
                "type": "java.lang.Boolean"
            }
        ]
    },
    "p:password": {
        "name": "p:password",
        "description": "Password component is an extended version of standard inputSecret component with theme integration and strength indicator.",
        "attributes": [
            {
                "name": "id",
                "description": "Unique identifier of the component in a namingContainer.",
                "type": "java.lang.String"
            },
            {
                "name": "rendered",
                "description": "Boolean value to specify the rendering of the component, when set to false component will not be rendered.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "binding",
                "description": "An el expression referring to a server side UIComponent instance in a backing bean.",
                "type": "javax.faces.component.UIComponent"
            },
            {
                "name": "value",
                "description": "Value of the component.",
                "type": "java.lang.Object"
            },
            {
                "name": "converter",
                "description": "An el expression or a literal text that defines a converter for the component. When it's an EL expression, it's resolved to a converter instance.\n    In case it's a static text, it must refer to a converter id.",
                "type": "javax.faces.convert.Converter"
            },
            {
                "name": "immediate",
                "description": "When set true, process validations logic is executed at apply request values phase for this component. Default is false.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "required",
                "description": "Marks component as required.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "validator",
                "description": "A method expression referring to a method validating the input.",
                "type": "javax.faces.validator.Validator"
            },
            {
                "name": "valueChangeListener",
                "description": "A method binding expression referring to a method for handling a valuchangeevent.",
                "type": "javax.faces.event.ValueChangeListener"
            },
            {
                "name": "requiredMessage",
                "description": "Message to display when required field validation fails.",
                "type": "java.lang.String"
            },
            {
                "name": "converterMessage",
                "description": "Message to display when conversion fails.",
                "type": "java.lang.String"
            },
            {
                "name": "validatorMessage",
                "description": "Message to display when validation fails.",
                "type": "java.lang.String"
            },
            {
                "name": "accesskey",
                "description": "Access key to transfer focus to the input element.",
                "type": "java.lang.String"
            },
            {
                "name": "alt",
                "description": "Alternate textual description of the input element.",
                "type": "java.lang.String"
            },
            {
                "name": "autocomplete",
                "description": "Controls browser autocomplete behavior.",
                "type": "java.lang.String"
            },
            {
                "name": "dir",
                "description": "Direction indication for text that does not inherit directionality.",
                "type": "java.lang.String"
            },
            {
                "name": "disabled",
                "description": "Disables the input element, default is false.",
                "type": "boolean"
            },
            {
                "name": "label",
                "description": "A localized user presentable name.",
                "type": "java.lang.String"
            },
            {
                "name": "lang",
                "description": "Code describing the language used in the generated markup.",
                "type": "java.lang.String"
            },
            {
                "name": "maxlength",
                "description": "Maximum number of characters that may be entered in this field.",
                "type": "int"
            },
            {
                "name": "onblur",
                "description": "Client side callback to execute when input element loses focus.",
                "type": "java.lang.String"
            },
            {
                "name": "onchange",
                "description": "Client side callback to execute when input element loses focus and its value has been modified since gaining focus.",
                "type": "java.lang.String"
            },
            {
                "name": "onclick",
                "description": "Client side callback to execute when input element is clicked.",
                "type": "java.lang.String"
            },
            {
                "name": "ondblclick",
                "description": "Client side callback to execute when input element is double clicked.",
                "type": "java.lang.String"
            },
            {
                "name": "onfocus",
                "description": "Client side callback to execute when input element receives focus.",
                "type": "java.lang.String"
            },
            {
                "name": "onkeydown",
                "description": "Client side callback to execute when a key is pressed down over input element.",
                "type": "java.lang.String"
            },
            {
                "name": "onkeypress",
                "description": "Client side callback to execute when a key is pressed and released over input element.",
                "type": "java.lang.String"
            },
            {
                "name": "onkeyup",
                "description": "Client side callback to execute when a key is released over input element.",
                "type": "java.lang.String"
            },
            {
                "name": "onmousedown",
                "description": "Client side callback to execute when a pointer input element is pressed down over input element.",
                "type": "java.lang.String"
            },
            {
                "name": "onmousemove",
                "description": "Client side callback to execute when a pointer input element is moved within input element.",
                "type": "java.lang.String"
            },
            {
                "name": "onmouseout",
                "description": "Client side callback to execute when a pointer input element is moved away from input element.",
                "type": "java.lang.String"
            },
            {
                "name": "onmouseover",
                "description": "Client side callback to execute when a pointer input element is moved onto input element.",
                "type": "java.lang.String"
            },
            {
                "name": "onmouseup",
                "description": "Client side callback to execute when a pointer input element is released over input element.",
                "type": "java.lang.String"
            },
            {
                "name": "onwheel",
                "description": "Client side callback to execute when the mouse wheel rolls up or down over an element.",
                "type": "java.lang.String"
            },
            {
                "name": "onselect",
                "description": "Client side callback to execute when text within input element is selected by user.",
                "type": "java.lang.String"
            },
            {
                "name": "oncut",
                "description": "Client side callback to execute when the user copies the content of an element.",
                "type": "java.lang.String"
            },
            {
                "name": "oncopy",
                "description": "Client side callback to execute when the user cuts the content of an element.",
                "type": "java.lang.String"
            },
            {
                "name": "onpaste",
                "description": "Client side callback to execute when the user pastes some content in an element.",
                "type": "java.lang.String"
            },
            {
                "name": "oninput",
                "description": "Client side callback to execute when an element gets user input.",
                "type": "java.lang.String"
            },
            {
                "name": "oncontextmenu",
                "description": "Client side callback to execute when a context menu is triggered.",
                "type": "java.lang.String"
            },
            {
                "name": "oninvalid",
                "description": "Client side callback to execute when an element is invalid.",
                "type": "java.lang.String"
            },
            {
                "name": "onreset",
                "description": "Client side callback to execute when the Reset button in a form is clicked.",
                "type": "java.lang.String"
            },
            {
                "name": "onsearch",
                "description": "Client side callback to execute when the user writes something in a search field.",
                "type": "java.lang.String"
            },
            {
                "name": "ondrag",
                "description": "Client side callback to execute when an element is dragged.",
                "type": "java.lang.String"
            },
            {
                "name": "ondragend",
                "description": "Client side callback to execute at the end of a drag operation.",
                "type": "java.lang.String"
            },
            {
                "name": "ondragenter",
                "description": "Client side callback to execute when an element has been dragged to a valid drop target.",
                "type": "java.lang.String"
            },
            {
                "name": "ondragleave",
                "description": "Client side callback to execute when an element leaves a valid drop target.",
                "type": "java.lang.String"
            },
            {
                "name": "ondragover",
                "description": "Client side callback to execute when an element is being dragged over a valid drop target.",
                "type": "java.lang.String"
            },
            {
                "name": "ondragstart",
                "description": "Client side callback to execute at the start of a drag operation.",
                "type": "java.lang.String"
            },
            {
                "name": "ondrop",
                "description": "Client side callback to execute when dragged element is being dropped.",
                "type": "java.lang.String"
            },
            {
                "name": "onscroll",
                "description": "Client side callback to execute when an element's scrollbar is being scrolled.",
                "type": "java.lang.String"
            },
            {
                "name": "readonly",
                "description": "Flag indicating that this component will prevent changes by the user.",
                "type": "boolean"
            },
            {
                "name": "size",
                "description": "Number of characters used to determine the width of the input element.",
                "type": "int"
            },
            {
                "name": "style",
                "description": "Inline style of the component.",
                "type": "java.lang.String"
            },
            {
                "name": "styleClass",
                "description": "Style class of the component.",
                "type": "java.lang.String"
            },
            {
                "name": "tabindex",
                "description": "Position of the element in the tabbing order.",
                "type": "java.lang.String"
            },
            {
                "name": "title",
                "description": "Advisory tooltip information.",
                "type": "java.lang.String"
            },
            {
                "name": "placeholder",
                "description": "The placeholder attribute specifies a short hint that describes the expected value of an input field.",
                "type": "java.lang.String"
            },
            {
                "name": "inputmode",
                "description": "HTML5 inputmode attribute for hinting at the type of data this control has for touch devices to display appropriate virtual keyboard.",
                "type": "java.lang.String"
            },
            {
                "name": "widgetVar",
                "description": "Name of the client side widget.",
                "type": "java.lang.String"
            },
            {
                "name": "feedback",
                "description": "Enables strength indicator. Default is false.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "inline",
                "description": "Displays feedback inline rather than using a popup. Default is false.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "promptLabel",
                "description": "Label of prompt. Default is \"Please enter a password\"",
                "type": "java.lang.String"
            },
            {
                "name": "weakLabel",
                "description": "Label of weak password. Default is \"Weak\"",
                "type": "java.lang.String"
            },
            {
                "name": "goodLabel",
                "description": "Label of good password. Default is \"Good\"",
                "type": "java.lang.String"
            },
            {
                "name": "strongLabel",
                "description": "Label of strong password. Default is \"Strong\"",
                "type": "java.lang.String"
            },
            {
                "name": "redisplay",
                "description": "Boolean flag indicating whether or not a previously entered password should be rendered in form. Default is false.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "match",
                "description": "Identifier of another password component to match value against.",
                "type": "java.lang.String"
            },
            {
                "name": "showEvent",
                "description": "Event to show the feedback overlay panel, default is \"focus\".",
                "type": "java.lang.String"
            },
            {
                "name": "hideEvent",
                "description": "Event to hide the feedback overlay panel, default is \"blur\".",
                "type": "java.lang.String"
            },
            {
                "name": "ignoreLastPass",
                "description": "Disable LastPass autofill for this password field. Default is false.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "toggleMask",
                "description": "Adds a show/hide icon to the password to allow the password to be unmasked/remasked. Default is false.",
                "type": "java.lang.Boolean"
            }
        ]
    },
    "p:photoCam": {
        "name": "p:photoCam",
        "description": "PhotoCam is used to take photos with webcam and send them to the Faces backend model.",
        "attributes": [
            {
                "name": "id",
                "description": "Unique identifier of the component in a namingContainer.",
                "type": "java.lang.String"
            },
            {
                "name": "rendered",
                "description": "Boolean value to specify the rendering of the component, when set to false component will not be rendered.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "binding",
                "description": "An el expression referring to a server side UIComponent instance in a backing bean.",
                "type": "javax.faces.component.UIComponent"
            },
            {
                "name": "value",
                "description": "Value of the component.",
                "type": "java.lang.Object"
            },
            {
                "name": "converter",
                "description": "An el expression or a literal text that defines a converter for the component. When it's an EL expression, it's resolved to a converter instance.\n    In case it's a static text, it must refer to a converter id.",
                "type": "javax.faces.convert.Converter"
            },
            {
                "name": "immediate",
                "description": "When set true, process validations logic is executed at apply request values phase for this component. Default is false.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "required",
                "description": "Marks component as required.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "validator",
                "description": "A method expression referring to a method validating the input.",
                "type": "javax.faces.validator.Validator"
            },
            {
                "name": "valueChangeListener",
                "description": "A method binding expression referring to a method for handling a valuchangeevent.",
                "type": "javax.faces.event.ValueChangeListener"
            },
            {
                "name": "requiredMessage",
                "description": "Message to display when required field validation fails.",
                "type": "java.lang.String"
            },
            {
                "name": "converterMessage",
                "description": "Message to display when conversion fails.",
                "type": "java.lang.String"
            },
            {
                "name": "validatorMessage",
                "description": "Message to display when validation fails.",
                "type": "java.lang.String"
            },
            {
                "name": "widgetVar",
                "description": "Name of the client side widget.",
                "type": "java.lang.String"
            },
            {
                "name": "style",
                "description": "Style of the camera container.",
                "type": "java.lang.String"
            },
            {
                "name": "styleClass",
                "description": "Style class of the camera container.",
                "type": "java.lang.String"
            },
            {
                "name": "process",
                "description": "Identifiers of components to process during photo capture.",
                "type": "java.lang.String"
            },
            {
                "name": "update",
                "description": "Identifiers of components to update after photo capture.",
                "type": "java.lang.String"
            },
            {
                "name": "listener",
                "description": "Method expression to listen capture events.",
                "type": "javax.el.MethodExpression"
            },
            {
                "name": "width",
                "description": "Width of the camera viewport.",
                "type": "java.lang.Integer"
            },
            {
                "name": "height",
                "description": "Height of the camera viewport.",
                "type": "java.lang.Integer"
            },
            {
                "name": "photoWidth",
                "description": "Width of the captured photo, defaults to width.",
                "type": "java.lang.Integer"
            },
            {
                "name": "photoHeight",
                "description": "Height of the captured photo, defaults to height",
                "type": "java.lang.Integer"
            },
            {
                "name": "format",
                "description": "Format of the image, valid values are \"jpeg\" default and png.",
                "type": "java.lang.String"
            },
            {
                "name": "jpegQuality",
                "description": "Quality of the image between 0 and 100 when the format is jpeg, default value is 90.",
                "type": "java.lang.Integer"
            },
            {
                "name": "autoStart",
                "description": "Disable camera start after initialize",
                "type": "java.lang.Boolean"
            },
            {
                "name": "device",
                "description": "Suggests a video input device such as 'user' (aka font camera) or 'environment' (aka rear camera).",
                "type": "java.lang.String"
            },
            {
                "name": "onCameraError",
                "description": "Client side callback executed if the camera has an error.",
                "type": "java.lang.String"
            }
        ]
    },
    "p:pickList": {
        "name": "p:pickList",
        "description": "PickList is used for transferring data between two different collections.",
        "attributes": [
            {
                "name": "id",
                "description": "Unique identifier of the component in a namingContainer.",
                "type": "java.lang.String"
            },
            {
                "name": "rendered",
                "description": "Boolean value to specify the rendering of the component, when set to false component will not be rendered.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "binding",
                "description": "An el expression referring to a server side UIComponent instance in a backing bean.",
                "type": "javax.faces.component.UIComponent"
            },
            {
                "name": "value",
                "description": "Value of the component.",
                "type": "java.lang.Object"
            },
            {
                "name": "converter",
                "description": "An el expression or a literal text that defines a converter for the component. When it's an EL expression, it's resolved to a converter instance.\n    In case it's a static text, it must refer to a converter id.",
                "type": "javax.faces.convert.Converter"
            },
            {
                "name": "immediate",
                "description": "When set true, process validations logic is executed at apply request values phase for this component. Default is false.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "required",
                "description": "Marks component as required.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "validator",
                "description": "A method expression referring to a method validating the input.",
                "type": "javax.faces.validator.Validator"
            },
            {
                "name": "valueChangeListener",
                "description": "A method binding expression referring to a method for handling a valuchangeevent.",
                "type": "javax.faces.event.ValueChangeListener"
            },
            {
                "name": "requiredMessage",
                "description": "Message to display when required field validation fails.",
                "type": "java.lang.String"
            },
            {
                "name": "converterMessage",
                "description": "Message to display when conversion fails.",
                "type": "java.lang.String"
            },
            {
                "name": "validatorMessage",
                "description": "Message to display when validation fails.",
                "type": "java.lang.String"
            },
            {
                "name": "widgetVar",
                "description": "Name of the client side widget.",
                "type": "java.lang.String"
            },
            {
                "name": "var",
                "description": "Name of the iterator variable that references each element in the data set.",
                "type": "String"
            },
            {
                "name": "itemLabel",
                "description": "Label of an item.",
                "type": "java.lang.String"
            },
            {
                "name": "itemValue",
                "description": "Value of an item.",
                "type": "java.lang.Object"
            },
            {
                "name": "style",
                "description": "Style of the main container.",
                "type": "java.lang.String"
            },
            {
                "name": "styleClass",
                "description": "Style class of the main container.",
                "type": "java.lang.String"
            },
            {
                "name": "disabled",
                "description": "Disables the component.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "effect",
                "description": "Name of the animation to display. Default is fade.",
                "type": "java.lang.String"
            },
            {
                "name": "effectSpeed",
                "description": "Speed of the animation. Default is fast.",
                "type": "java.lang.String"
            },
            {
                "name": "escape",
                "description": "Defines if labels of the component are escaped or not.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "showSourceControls",
                "description": "Specifies visibility of reorder buttons of sourcelist. Default is false.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "showTargetControls",
                "description": "Specifies visibility of reorder buttons of target list. Default is false.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "onTransfer",
                "description": "Client side callback to execute when an item is transferred from one list to another.",
                "type": "java.lang.String"
            },
            {
                "name": "label",
                "description": "A localized user presentable name.",
                "type": "java.lang.String"
            },
            {
                "name": "itemDisabled",
                "description": "Specifies if an item can be picked or not.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "showSourceFilter",
                "description": "Displays an input filter for source list.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "showTargetFilter",
                "description": "Displays an input filter for target list.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "sourceFilterPlaceholder",
                "description": "Placeholder for the source filter input element.",
                "type": "java.lang.String"
            },
            {
                "name": "targetFilterPlaceholder",
                "description": "Placeholder for the target filter input element.",
                "type": "java.lang.String"
            },
            {
                "name": "filterMatchMode",
                "description": "Match mode for filtering, valid values are startsWith (default), contains, endsWith and custom.",
                "type": "java.lang.String"
            },
            {
                "name": "filterFunction",
                "description": "Client side function to use in custom filterMatchMode.",
                "type": "java.lang.String"
            },
            {
                "name": "showCheckbox",
                "description": "When true, a checkbox is displayed next to each item.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "labelDisplay",
                "description": "Defines how the button labels displayed, valid values are \"tooltip\" (default) and \"inline\".",
                "type": "java.lang.String"
            },
            {
                "name": "orientation",
                "description": "Displays lists horizontally, valid values are \"horizontal\" (default) and \"vertical\".",
                "type": "java.lang.String"
            },
            {
                "name": "responsive",
                "description": "In responsive mode, component adjusts itself based on screen width.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "tabindex",
                "description": "Position of the element in the tabbing order.",
                "type": "java.lang.String"
            },
            {
                "name": "filterEvent",
                "description": "Client side event to invoke filtering. If \"enter\" it will only filter after ENTER key is pressed. Default is keyup.",
                "type": "java.lang.String"
            },
            {
                "name": "filterDelay",
                "description": "Delay to wait in milliseconds before sending each filter query. Default is 300.",
                "type": "java.lang.Integer"
            },
            {
                "name": "escapeValue",
                "description": "Defines if values of the component are escaped or not.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "transferOnDblclick",
                "description": "Defines if items should be transferred on dblclick. Default is true.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "transferOnCheckboxClick",
                "description": "Defines if items should be transferred, instead of selected, on checkbox click. This only works in combination with showCheckbox=true. Default is false.",
                "type": "java.lang.Boolean"
            }
        ]
    },
    "p:poll": {
        "name": "p:poll",
        "description": "Poll is an AJAX component that has the ability to send periodical AJAX requests and execute listeners on Faces backing beans.",
        "attributes": [
            {
                "name": "id",
                "description": "Unique identifier of the component in a namingContainer.",
                "type": "java.lang.String"
            },
            {
                "name": "rendered",
                "description": "Boolean value to specify the rendering of the component, when set to false component will not be rendered.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "binding",
                "description": "An el expression referring to a server side UIComponent instance in a backing bean.",
                "type": "javax.faces.component.UIComponent"
            },
            {
                "name": "widgetVar",
                "description": "Name of the client side widget.",
                "type": "java.lang.String"
            },
            {
                "name": "interval",
                "description": "Interval in seconds to do periodic AJAX requests. Default is 2.",
                "type": "java.lang.Object"
            },
            {
                "name": "update",
                "description": "Component(s) to be updated with ajax.",
                "type": "java.lang.String"
            },
            {
                "name": "listener",
                "description": "A method expression to invoke by polling.",
                "type": "javax.el.MethodExpression"
            },
            {
                "name": "immediate",
                "description": "Boolean value that determines the phaseId, when true actions are processed at apply_request_values, when false at invoke_application phase.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "onstart",
                "description": "Javascript handler to execute before ajax request begins.",
                "type": "java.lang.String"
            },
            {
                "name": "oncomplete",
                "description": "Javascript handler to execute when ajax request is completed.",
                "type": "java.lang.String"
            },
            {
                "name": "onactivated",
                "description": "Client side callback to execute when the poller is activated. Return false to prevent poller from starting.",
                "type": "java.lang.String"
            },
            {
                "name": "ondeactivated",
                "description": "Client side callback to execute when the poller is deactivated. Return false to prevent poller from stopping.",
                "type": "java.lang.String"
            },
            {
                "name": "process",
                "description": "Component id(s) to process partially instead of whole view.",
                "type": "java.lang.String"
            },
            {
                "name": "onerror",
                "description": "Javascript handler to execute when ajax request fails.",
                "type": "java.lang.String"
            },
            {
                "name": "onsuccess",
                "description": "Javascript handler to execute when ajax request succeeds.",
                "type": "java.lang.String"
            },
            {
                "name": "global",
                "description": "Global ajax requests are listened by ajaxStatus component, setting global to false will not trigger ajaxStatus. Default is true.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "delay",
                "description": "If less than delay milliseconds elapses between calls to request() only the most recent one is sent and all other requests are discarded. The default value of this option is null. If the value of delay is the literal string 'none' without the quotes or the default, no delay is used.",
                "type": "java.lang.String"
            },
            {
                "name": "timeout",
                "description": "Defines the timeout for the ajax request.",
                "type": "java.lang.Integer"
            },
            {
                "name": "async",
                "description": "When set to true, ajax requests are not queued. Default is false.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "autoStart",
                "description": "In autoStart mode, polling starts automatically on page load, to start polling on demand set to false. Default is true.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "stop",
                "description": "Stops polling when true.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "partialSubmit",
                "description": "When enabled, only values related to partially processed components would be serialized for ajax\n                instead of whole form.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "resetValues",
                "description": "If true, indicate that this particular Ajax transaction is a value reset transaction. This will cause resetValue() to be called on any EditableValueHolder instances encountered as a result of this ajax transaction. If not specified, or the value is false, no such indication is made.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "ignoreAutoUpdate",
                "description": "If true, components which use p:autoUpdate will not be updated for this request. If not specified, or the value is false, no such indication is made.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "partialSubmitFilter",
                "description": "Selector to use when partial submit is on, default is \":input\" to select all descendant inputs of a partially processed components.",
                "type": "java.lang.String"
            },
            {
                "name": "form",
                "description": "Form to serialize for an ajax request. Default is the enclosing form.",
                "type": "java.lang.String"
            },
            {
                "name": "intervalType",
                "description": "Type of interval value. Valid values are \"second\" (default) and \"millisecond\".",
                "type": "java.lang.String"
            },
            {
                "name": "ignoreComponentNotFound",
                "description": "If true, unresolvable components referenced in the update/process attribute are ignored. Default is 'false' and therefore a ComponentNotFoundException will be thrown.",
                "type": "java.lang.Boolean"
            }
        ]
    },
    "p:progressBar": {
        "name": "p:progressBar",
        "description": "ProgressBar is a process status indicator that can either work purely on client side or interact with server side using ajax.",
        "attributes": [
            {
                "name": "id",
                "description": "Unique identifier of the component in a namingContainer.",
                "type": "java.lang.String"
            },
            {
                "name": "rendered",
                "description": "Boolean value to specify the rendering of the component, when set to false component will not be rendered.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "binding",
                "description": "An el expression referring to a server side UIComponent instance in a backing bean.",
                "type": "javax.faces.component.UIComponent"
            },
            {
                "name": "widgetVar",
                "description": "Name of the client side widget.",
                "type": "java.lang.String"
            },
            {
                "name": "title",
                "description": "Advisory tooltip information.",
                "type": "java.lang.String"
            },
            {
                "name": "value",
                "description": "Value of the progress bar. Default is 0.",
                "type": "java.lang.Integer"
            },
            {
                "name": "disabled",
                "description": "Disables or enables the progressbar.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "ajax",
                "description": "Specifies the mode of progressBar, in ajax mode progress value is retrieved from a backing bean. Default is false.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "interval",
                "description": "Interval in milliseconds to do periodic requests in ajax mode. Default is 3000.",
                "type": "java.lang.Integer"
            },
            {
                "name": "animationDuration",
                "description": "Animation duration in milliseconds determining how long the animation will run. Default is 500.",
                "type": "java.lang.Integer"
            },
            {
                "name": "style",
                "description": "Inline style of the main container element.",
                "type": "java.lang.String"
            },
            {
                "name": "styleClass",
                "description": "Style class of the main container element.",
                "type": "java.lang.String"
            },
            {
                "name": "labelTemplate",
                "description": "Template of the progress value e.g. \"{value}%\"",
                "type": "java.lang.String"
            },
            {
                "name": "displayOnly",
                "description": "Enables static value display mode.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "global",
                "description": "Defines whether to trigger ajaxStatus or not.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "mode",
                "description": "Defines the mode of the progress, valid values are \"determinate\" and \"indeterminate\".",
                "type": "java.lang.String"
            },
            {
                "name": "severity",
                "description": "Severity type of the progressBar.",
                "type": "java.lang.String"
            }
        ]
    },
    "p:radioButton": {
        "name": "p:radioButton",
        "description": "RadioButton is a helper component of SelectOneRadio to implement custom layouts.",
        "attributes": [
            {
                "name": "id",
                "description": "Unique identifier of the component in a namingContainer.",
                "type": "java.lang.String"
            },
            {
                "name": "rendered",
                "description": "Boolean value to specify the rendering of the component, when set to false component will not be rendered.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "binding",
                "description": "An el expression referring to a server side UIComponent instance in a backing bean.",
                "type": "javax.faces.component.UIComponent"
            },
            {
                "name": "widgetVar",
                "description": "Name of the client side widget.",
                "type": "java.lang.String"
            },
            {
                "name": "disabled",
                "description": "Disables the component.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "itemIndex",
                "description": "Index of the selectItem of the selectOneRadio.",
                "type": "java.lang.Integer"
            },
            {
                "name": "onchange",
                "description": "Client side callback to execute on state change.",
                "type": "java.lang.String"
            },
            {
                "name": "for",
                "description": "Id of the selectOneRadio component to attach to.",
                "type": "java.lang.String"
            },
            {
                "name": "style",
                "description": "Inline style of the component.",
                "type": "java.lang.String"
            },
            {
                "name": "styleClass",
                "description": "Style class of the component.",
                "type": "java.lang.String"
            },
            {
                "name": "tabindex",
                "description": "The tabindex attribute specifies the tab order of an element when the \"tab\" button is used for navigating.",
                "type": "java.lang.String"
            }
        ]
    },
    "p:rating": {
        "name": "p:rating",
        "description": "Rating component features a star based rating system. Rating can be used as a plain input component or with ajax RateListeners.",
        "attributes": [
            {
                "name": "id",
                "description": "Unique identifier of the component in a namingContainer.",
                "type": "java.lang.String"
            },
            {
                "name": "rendered",
                "description": "Boolean value to specify the rendering of the component, when set to false component will not be rendered.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "binding",
                "description": "An el expression referring to a server side UIComponent instance in a backing bean.",
                "type": "javax.faces.component.UIComponent"
            },
            {
                "name": "value",
                "description": "Value of the component.",
                "type": "java.lang.Object"
            },
            {
                "name": "converter",
                "description": "An el expression or a literal text that defines a converter for the component. When it's an EL expression, it's resolved to a converter instance.\n    In case it's a static text, it must refer to a converter id.",
                "type": "javax.faces.convert.Converter"
            },
            {
                "name": "immediate",
                "description": "When set true, process validations logic is executed at apply request values phase for this component. Default is false.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "required",
                "description": "Marks component as required.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "validator",
                "description": "A method expression referring to a method validating the input.",
                "type": "javax.faces.validator.Validator"
            },
            {
                "name": "valueChangeListener",
                "description": "A method binding expression referring to a method for handling a valuchangeevent.",
                "type": "javax.faces.event.ValueChangeListener"
            },
            {
                "name": "requiredMessage",
                "description": "Message to display when required field validation fails.",
                "type": "java.lang.String"
            },
            {
                "name": "converterMessage",
                "description": "Message to display when conversion fails.",
                "type": "java.lang.String"
            },
            {
                "name": "validatorMessage",
                "description": "Message to display when validation fails.",
                "type": "java.lang.String"
            },
            {
                "name": "widgetVar",
                "description": "Name of the client side widget.",
                "type": "java.lang.String"
            },
            {
                "name": "stars",
                "description": "Number of stars to display. Default is 5.",
                "type": "java.lang.Integer"
            },
            {
                "name": "disabled",
                "description": "Disables user interaction.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "readonly",
                "description": "Disables user interaction without adding disabled visuals.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "onRate",
                "description": "Client side callback to execute when rate happens.",
                "type": "java.lang.String"
            },
            {
                "name": "style",
                "description": "Inline style of the component.",
                "type": "java.lang.String"
            },
            {
                "name": "styleClass",
                "description": "Style class of the component.",
                "type": "java.lang.String"
            },
            {
                "name": "cancel",
                "description": "When enabled, displays a cancel icon to reset rating value, defaults to true.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "tabindex",
                "description": "Position of the output in the tabbing order. Default: \"0\".",
                "type": "java.lang.String"
            }
        ]
    },
    "p:remoteCommand": {
        "name": "p:remoteCommand",
        "description": "RemoteCommand provides a way to execute Faces backing bean methods directly from javascript.",
        "attributes": [
            {
                "name": "id",
                "description": "Unique identifier of the component in a namingContainer.",
                "type": "java.lang.String"
            },
            {
                "name": "rendered",
                "description": "Boolean value to specify the rendering of the component, when set to false component will not be rendered.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "binding",
                "description": "An el expression referring to a server side UIComponent instance in a backing bean.",
                "type": "javax.faces.component.UIComponent"
            },
            {
                "name": "value",
                "description": "Label of the component.",
                "type": "java.lang.Object"
            },
            {
                "name": "actionListener",
                "description": "An actionlistener to process when command is executed.",
                "type": "javax.faces.event.ActionListener"
            },
            {
                "name": "action",
                "description": "A method expression or a string outcome to process when command is executed.",
                "type": "javax.el.MethodExpression"
            },
            {
                "name": "immediate",
                "description": "Boolean value that determines the phaseId of the action event,\n    when true actions are processed at \"Apply Request Values\", when false at \"Invoke Application\" phase.",
                "type": "boolean"
            },
            {
                "name": "name",
                "description": "Name of the command.",
                "type": "java.lang.String"
            },
            {
                "name": "update",
                "description": "Component(s) to update with ajax.",
                "type": "java.lang.String"
            },
            {
                "name": "process",
                "description": "Component(s) to process partially instead of whole view.",
                "type": "java.lang.String"
            },
            {
                "name": "onstart",
                "description": "Javascript handler to execute before ajax request begins.",
                "type": "java.lang.String"
            },
            {
                "name": "oncomplete",
                "description": "Javascript handler to execute when ajax request is completed.",
                "type": "java.lang.String"
            },
            {
                "name": "onerror",
                "description": "Javascript handler to execute when ajax request fails.",
                "type": "java.lang.String"
            },
            {
                "name": "onsuccess",
                "description": "Javascript handler to execute when ajax request succeeds.",
                "type": "java.lang.String"
            },
            {
                "name": "global",
                "description": "Global ajax requests are listened by ajaxStatus component, setting global to false will not trigger ajaxStatus.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "delay",
                "description": "If less than delay milliseconds elapses between calls to request() only the most recent one is sent and all other requests are discarded. The default value of this option is null. If the value of delay is the literal string 'none' without the quotes or the default, no delay is used.",
                "type": "java.lang.String"
            },
            {
                "name": "timeout",
                "description": "Defines the timeout for the ajax request.",
                "type": "java.lang.Integer"
            },
            {
                "name": "async",
                "description": "When set to true, ajax requests are not queued.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "autoRun",
                "description": "When set to true, command will be invoked on page load.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "partialSubmit",
                "description": "When enabled, only values related to partially processed components would be serialized for ajax\n                instead of whole form.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "resetValues",
                "description": "If true, indicate that this particular Ajax transaction is a value reset transaction. This will cause resetValue() to be called on any EditableValueHolder instances encountered as a result of this ajax transaction. If not specified, or the value is false, no such indication is made.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "ignoreAutoUpdate",
                "description": "If true, components which use p:autoUpdate will not be updated for this request. If not specified, or the value is false, no such indication is made.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "partialSubmitFilter",
                "description": "Selector to use when partial submit is on, default is \":input\" to select all descendant inputs of a partially processed components.",
                "type": "java.lang.String"
            },
            {
                "name": "form",
                "description": "Form to serialize for an ajax request. Default is the enclosing form.",
                "type": "java.lang.String"
            },
            {
                "name": "validateClient",
                "description": "When set to true client side validation is enabled, global setting is required to be enabled as a prerequisite.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "ignoreComponentNotFound",
                "description": "If true, unresolvable components referenced in the update/process attribute are ignored. Default is 'false' and therefore a ComponentNotFoundException will be thrown.",
                "type": "java.lang.Boolean"
            }
        ]
    },
    "p:resizable": {
        "name": "p:resizable",
        "description": "Resizable component that has the ability to make a Faces component resizable.\n        Resizable can be used on various components like resize an input fields, panels, menus, images and more.",
        "attributes": [
            {
                "name": "id",
                "description": "Unique identifier of the component in a namingContainer.",
                "type": "java.lang.String"
            },
            {
                "name": "rendered",
                "description": "Boolean value to specify the rendering of the component, when set to false component will not be rendered.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "binding",
                "description": "An el expression referring to a server side UIComponent instance in a backing bean.",
                "type": "javax.faces.component.UIComponent"
            },
            {
                "name": "widgetVar",
                "description": "Name of the client side widget.",
                "type": "java.lang.String"
            },
            {
                "name": "for",
                "description": "Identifier of the target component to make resizable.",
                "type": "java.lang.String"
            },
            {
                "name": "aspectRatio",
                "description": "Defines if aspectRatio should be kept or not. Default is false.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "proxy",
                "description": "Displays proxy element instead of actual element.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "handles",
                "description": "Specifies the resize handles.",
                "type": "java.lang.String"
            },
            {
                "name": "ghost",
                "description": "In ghost mode, resize helper is displayed as the original element with less opacity. Default is false.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "animate",
                "description": "Enables animation. Default is false.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "effect",
                "description": "Effect to use in animation. Default is swing.",
                "type": "java.lang.String"
            },
            {
                "name": "effectDuration",
                "description": "Effect duration of animation. Default is normal.",
                "type": "java.lang.String"
            },
            {
                "name": "maxWidth",
                "description": "Maximum width boundary in pixels. Default is max integer value.",
                "type": "java.lang.Integer"
            },
            {
                "name": "maxHeight",
                "description": "Maximum height boundary in pixels. Default is max integer value.",
                "type": "java.lang.Integer"
            },
            {
                "name": "minWidth",
                "description": "Minimum width boundary in pixels. Default is min integer value.",
                "type": "java.lang.Integer"
            },
            {
                "name": "minHeight",
                "description": "Maximum height boundary in pixels. Default is min integer value.",
                "type": "java.lang.Integer"
            },
            {
                "name": "containment",
                "description": "Sets resizable boundaries as the parents size. Default is false.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "grid",
                "description": "Snaps resizing to grid structure. Default is 1.",
                "type": "java.lang.Integer"
            },
            {
                "name": "onStart",
                "description": "Client side callback to execute when resizing begins.",
                "type": "java.lang.String"
            },
            {
                "name": "onResize",
                "description": "Client side callback to execute during resizing.",
                "type": "java.lang.String"
            },
            {
                "name": "onStop",
                "description": "Client side callback to execute after resizing end.",
                "type": "java.lang.String"
            }
        ]
    },
    "p:row": {
        "name": "p:row",
        "description": "Row is a helper component for datatable.",
        "attributes": [
            {
                "name": "id",
                "description": "Unique identifier of the component in a namingContainer.",
                "type": "java.lang.String"
            },
            {
                "name": "rendered",
                "description": "Boolean value to specify the rendering of the component, when set to false component will not be rendered.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "binding",
                "description": "An el expression referring to a server side UIComponent instance in a backing bean.",
                "type": "javax.faces.component.UIComponent"
            },
            {
                "name": "style",
                "description": "Inline style of the row.",
                "type": "java.lang.String"
            },
            {
                "name": "styleClass",
                "description": "Style class of the row.",
                "type": "java.lang.String"
            }
        ]
    },
    "p:rowEditor": {
        "name": "p:rowEditor",
        "description": "RowEditor is a helper component for datatable.",
        "attributes": [
            {
                "name": "id",
                "description": "Unique identifier of the component in a namingContainer.",
                "type": "java.lang.String"
            },
            {
                "name": "rendered",
                "description": "Boolean value to specify the rendering of the component, when set to false component will not be rendered.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "binding",
                "description": "An el expression referring to a server side UIComponent instance in a backing bean.",
                "type": "javax.faces.component.UIComponent"
            },
            {
                "name": "style",
                "description": "Inline style of the component.",
                "type": "java.lang.String"
            },
            {
                "name": "styleClass",
                "description": "Style class of the component.",
                "type": "java.lang.String"
            },
            {
                "name": "editTitle",
                "description": "Title attribute for edit icon.",
                "type": "java.lang.String"
            },
            {
                "name": "cancelTitle",
                "description": "Title attribute for cancel icon.",
                "type": "java.lang.String"
            },
            {
                "name": "saveTitle",
                "description": "Title attribute for save icon.",
                "type": "java.lang.String"
            }
        ]
    },
    "p:rowExpansion": {
        "name": "p:rowExpansion",
        "description": "RowExpansion is a helper component of datatable used to implement expandable rows.",
        "attributes": [
            {
                "name": "id",
                "description": "Unique identifier of the component in a namingContainer.",
                "type": "java.lang.String"
            },
            {
                "name": "rendered",
                "description": "Boolean value to specify the rendering of the component, when set to false component will not be rendered.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "binding",
                "description": "An el expression referring to a server side UIComponent instance in a backing bean.",
                "type": "javax.faces.component.UIComponent"
            },
            {
                "name": "styleClass",
                "description": "Style class of the rowExpansion.",
                "type": "java.lang.String"
            }
        ]
    },
    "p:rowToggler": {
        "name": "p:rowToggler",
        "description": "RowToggler is a helper component for datatable.",
        "attributes": [
            {
                "name": "id",
                "description": "Unique identifier of the component in a namingContainer.",
                "type": "java.lang.String"
            },
            {
                "name": "rendered",
                "description": "Boolean value to specify the rendering of the component, when set to false component will not be rendered.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "binding",
                "description": "An el expression referring to a server side UIComponent instance in a backing bean.",
                "type": "javax.faces.component.UIComponent"
            },
            {
                "name": "expandLabel",
                "description": "Expand text to display instead of icon to.",
                "type": "java.lang.String"
            },
            {
                "name": "collapseLabel",
                "description": "Collapse text to display instead of icon.",
                "type": "java.lang.String"
            },
            {
                "name": "expandIcon",
                "description": "Icon to expand rowExpansion",
                "type": "java.lang.String"
            },
            {
                "name": "collapseIcon",
                "description": "Icon to collapse rowExpansion",
                "type": "java.lang.String"
            },
            {
                "name": "tabindex",
                "description": "Position of the element in the tabbing order.",
                "type": "java.lang.String"
            }
        ]
    },
    "p:schedule": {
        "name": "p:schedule",
        "description": "Schedule provides an Outlook Calendar, iCal like Faces component to manage events.\n        Schedule is highly customizable featuring various views (month, day, week), built-in I18N, drag-drop, resize, customizable event dialog and skinning.",
        "attributes": [
            {
                "name": "id",
                "description": "Unique identifier of the component in a namingContainer.",
                "type": "java.lang.String"
            },
            {
                "name": "rendered",
                "description": "Boolean value to specify the rendering of the component, when set to false component will not be rendered.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "binding",
                "description": "An el expression referring to a server side UIComponent instance in a backing bean.",
                "type": "javax.faces.component.UIComponent"
            },
            {
                "name": "widgetVar",
                "description": "Name of the client side widget.",
                "type": "java.lang.String"
            },
            {
                "name": "value",
                "description": "An org.primefaces.model.ScheduleModel instance representing the backed model.",
                "type": "org.primefaces.model.ScheduleModel"
            },
            {
                "name": "locale",
                "description": "User locale for i18n localization messages. The attribute can be either a String or java.util.Locale object.",
                "type": "java.lang.Object"
            },
            {
                "name": "dir",
                "description": "Defines direction of schedule. Valid values are \"ltr\" (default) and \"rtl\".",
                "type": "java.lang.String"
            },
            {
                "name": "aspectRatio",
                "description": "Ratio of calendar width to height, higher the value shorter the height is.",
                "type": "java.lang.Double"
            },
            {
                "name": "view",
                "description": "The view type to use, possible values are 'dayGridMonth', 'dayGridWeek', 'dayGridDay', 'timeGridWeek', 'timeGridDay', 'listYear' , 'listMonth', 'listWeek', 'listDay'. Default is 'dayGridMonth'.",
                "type": "java.lang.String"
            },
            {
                "name": "initialDate",
                "description": "The initial date that is used when schedule loads. If omitted, the schedule starts on the current date.",
                "type": "java.lang.Object"
            },
            {
                "name": "showWeekends",
                "description": "Specifies inclusion Saturday/Sunday columns in any of the views. Default is true.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "escape",
                "description": "Defines whether html would be escaped or not for tooltip content and more. Default is true.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "style",
                "description": "Style of the main container element of schedule.",
                "type": "java.lang.String"
            },
            {
                "name": "styleClass",
                "description": "Style class of the main container element of schedule.",
                "type": "java.lang.String"
            },
            {
                "name": "draggable",
                "description": "When true, events are draggable. Default is true.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "resizable",
                "description": "When true, events are resizable. Default is true.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "selectable",
                "description": "Enables selection of time ranges by clicking and dragging on the schedule, see https://fullcalendar.io/docs/select-callback. Uses the ajax-event \"rangeSelect\" instead of \"dateSelect\".",
                "type": "java.lang.Boolean"
            },
            {
                "name": "showHeader",
                "description": "Specifies visibility of header content. Default is true.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "leftHeaderTemplate",
                "description": "Content of left side of header. Default is \"prev, next today\"",
                "type": "java.lang.String"
            },
            {
                "name": "centerHeaderTemplate",
                "description": "Content of center of header. Default is title.",
                "type": "java.lang.String"
            },
            {
                "name": "rightHeaderTemplate",
                "description": "Content of right side of header. Default is \"dayGridMonth,timeGridWeek,timeGridDay\"",
                "type": "java.lang.String"
            },
            {
                "name": "allDaySlot",
                "description": "Determines if all-day slot will be displayed in agendaWeek or agendaDay views. Default is true.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "slotDuration",
                "description": "The frequency for displaying time slots. Default is 00:30:00.",
                "type": "java.lang.String"
            },
            {
                "name": "scrollTime",
                "description": "Determines how far down the scroll pane is initially scrolled down. Default is 06:00:00.",
                "type": "java.lang.String"
            },
            {
                "name": "minTime",
                "description": "Minimum time to display in a day view. Default is 00:00:00.",
                "type": "java.lang.String"
            },
            {
                "name": "maxTime",
                "description": "Maximum time to display in a day view. Default is 24:00:00.",
                "type": "java.lang.String"
            },
            {
                "name": "slotLabelInterval",
                "description": "TThe frequency that the time slots should be labelled with text. Example: like \"01:00\" or \"{hours:1}\".",
                "type": "java.lang.String"
            },
            {
                "name": "timeFormat",
                "description": "Determines the time-text that will be displayed on each event. (Moment.js - format)",
                "type": "java.lang.String"
            },
            {
                "name": "columnFormat",
                "description": "Deprecated, use columnHeaderFormat instead. Format for column headers.",
                "type": "java.lang.String"
            },
            {
                "name": "columnHeaderFormat",
                "description": "Format for column headers. (eg `timeGridWeek: {weekday: 'narrow'}` or `timeGridWeek: {weekday: 'short'}, timeGridDay: {day: 'numeric'}`)",
                "type": "java.lang.String"
            },
            {
                "name": "timeZone",
                "description": "String or a java.util.TimeZone instance to specify the timezone used for date conversion to ISO_8601 format, defaults to ZoneId.systemDefault().",
                "type": "java.lang.Object"
            },
            {
                "name": "clientTimeZone",
                "description": "Timezone to define how to interpret the dates at browser. Valid values are \"local\", \"UTC\" and ids like \"America/Chicago\", defaults to \"local\".",
                "type": "java.lang.String"
            },
            {
                "name": "tooltip",
                "description": "Displays description of events on a tooltip, default value is false.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "showWeekNumbers",
                "description": "Display week numbers in schedule.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "extender",
                "description": "Name of javascript function to extend the options of the underlying fullcalendar plugin.",
                "type": "java.lang.String"
            },
            {
                "name": "displayEventEnd",
                "description": "Whether or not to display an event's end time text when it is rendered on the calendar. Value can be a boolean to globally configure for\n                all views or a comma separated list such as \"month:false,basicWeek:true\" to configure per view.",
                "type": "java.lang.String"
            },
            {
                "name": "weekNumberCalculation",
                "description": "The method for calculating week numbers that are displayed. Valid values are \"local\" (default), \"ISO\" and \"custom\".",
                "type": "java.lang.String"
            },
            {
                "name": "weekNumberCalculator",
                "description": "Client side function to use in custom weekNumberCalculation.",
                "type": "java.lang.String"
            },
            {
                "name": "nextDayThreshold",
                "description": "When an event's end time spans into another day, the minimum time it must be in order for it to render as if it were on that day. Default is 09:00:00.",
                "type": "java.lang.String"
            },
            {
                "name": "slotEventOverlap",
                "description": "If true contemporary events will be rendered one overlapping the other, else they will be rendered side by side.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "slotLabelFormat",
                "description": "Determines the text that will be displayed within a time slot.",
                "type": "java.lang.String"
            },
            {
                "name": "urlTarget",
                "description": "Target for events with urls. Clicking on such events in the schedule will not trigger the selectEvent but open the url using this target instead. Default is \"_blank\".",
                "type": "java.lang.String"
            },
            {
                "name": "noOpener",
                "description": "Whether for URL events access to the opener window from the target site should be prevented (phishing protection), default value is true.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "height",
                "description": "Sets the height of the entire calendar, including header and footer. By default, this option is unset and the calendar's height is calculated by aspectRatio. If \"auto\" is specified, the view's contents will assume a natural height and no scrollbars will be used.",
                "type": "java.lang.String"
            }
        ]
    },
    "p:scrollPanel": {
        "name": "p:scrollPanel",
        "description": "ScrollPanel is used to display scrollable content with theme aware scrollbars instead of native\n            browser scrollbars.",
        "attributes": [
            {
                "name": "id",
                "description": "Unique identifier of the component in a namingContainer.",
                "type": "java.lang.String"
            },
            {
                "name": "rendered",
                "description": "Boolean value to specify the rendering of the component, when set to false component will not be rendered.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "binding",
                "description": "An el expression referring to a server side UIComponent instance in a backing bean.",
                "type": "javax.faces.component.UIComponent"
            },
            {
                "name": "widgetVar",
                "description": "Name of the client side widget.",
                "type": "java.lang.String"
            },
            {
                "name": "style",
                "description": "",
                "type": "java.lang.String"
            },
            {
                "name": "styleClass",
                "description": "",
                "type": "java.lang.String"
            },
            {
                "name": "mode",
                "description": "",
                "type": "java.lang.String"
            }
        ]
    },
    "p:selectBooleanButton": {
        "name": "p:selectBooleanButton",
        "description": "SelectBooleanButton is used to select a binary decision with a toggle button.",
        "attributes": [
            {
                "name": "id",
                "description": "Unique identifier of the component in a namingContainer.",
                "type": "java.lang.String"
            },
            {
                "name": "rendered",
                "description": "Boolean value to specify the rendering of the component, when set to false component will not be rendered.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "binding",
                "description": "An el expression referring to a server side UIComponent instance in a backing bean.",
                "type": "javax.faces.component.UIComponent"
            },
            {
                "name": "value",
                "description": "Value of the component.",
                "type": "java.lang.Object"
            },
            {
                "name": "converter",
                "description": "An el expression or a literal text that defines a converter for the component. When it's an EL expression, it's resolved to a converter instance.\n    In case it's a static text, it must refer to a converter id.",
                "type": "javax.faces.convert.Converter"
            },
            {
                "name": "immediate",
                "description": "When set true, process validations logic is executed at apply request values phase for this component. Default is false.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "required",
                "description": "Marks component as required.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "validator",
                "description": "A method expression referring to a method validating the input.",
                "type": "javax.faces.validator.Validator"
            },
            {
                "name": "valueChangeListener",
                "description": "A method binding expression referring to a method for handling a valuchangeevent.",
                "type": "javax.faces.event.ValueChangeListener"
            },
            {
                "name": "requiredMessage",
                "description": "Message to display when required field validation fails.",
                "type": "java.lang.String"
            },
            {
                "name": "converterMessage",
                "description": "Message to display when conversion fails.",
                "type": "java.lang.String"
            },
            {
                "name": "validatorMessage",
                "description": "Message to display when validation fails.",
                "type": "java.lang.String"
            },
            {
                "name": "widgetVar",
                "description": "Name of the client side widget.",
                "type": "java.lang.String"
            },
            {
                "name": "disabled",
                "description": "Disables the component when set to true.",
                "type": "boolean"
            },
            {
                "name": "onchange",
                "description": "Client side callback to execute when value changes.",
                "type": "java.lang.String"
            },
            {
                "name": "style",
                "description": "Inline style of the component.",
                "type": "java.lang.String"
            },
            {
                "name": "styleClass",
                "description": "Style class of the component.",
                "type": "java.lang.String"
            },
            {
                "name": "onLabel",
                "description": "Custom label for on state. Default is \"On\".",
                "type": "java.lang.String"
            },
            {
                "name": "offLabel",
                "description": "Custom label for off state. Default is \"Off\".",
                "type": "java.lang.String"
            },
            {
                "name": "onIcon",
                "description": "The icon representing the \"On\" position.",
                "type": "java.lang.String"
            },
            {
                "name": "offIcon",
                "description": "The icon representing the \"Off\" position.",
                "type": "java.lang.String"
            },
            {
                "name": "tabindex",
                "description": "Position of the button element in the tabbing order.",
                "type": "java.lang.String"
            },
            {
                "name": "title",
                "description": "Advisory tooltip information.",
                "type": "java.lang.String"
            },
            {
                "name": "onfocus",
                "description": "Client side callback to execute when button receives focus.",
                "type": "java.lang.String"
            },
            {
                "name": "onblur",
                "description": "Client side callback to execute when button loses focus.",
                "type": "java.lang.String"
            },
            {
                "name": "ariaLabel",
                "description": "The aria-label attribute is used to define a string that labels the current element for accessibility.",
                "type": "java.lang.String"
            }
        ]
    },
    "p:selectBooleanCheckbox": {
        "name": "p:selectBooleanCheckbox",
        "description": "SelectBooleanCheckbox is an extended version of the standard checkbox with theme integration.",
        "attributes": [
            {
                "name": "id",
                "description": "Unique identifier of the component in a namingContainer.",
                "type": "java.lang.String"
            },
            {
                "name": "rendered",
                "description": "Boolean value to specify the rendering of the component, when set to false component will not be rendered.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "binding",
                "description": "An el expression referring to a server side UIComponent instance in a backing bean.",
                "type": "javax.faces.component.UIComponent"
            },
            {
                "name": "value",
                "description": "Value of the component.",
                "type": "java.lang.Object"
            },
            {
                "name": "converter",
                "description": "An el expression or a literal text that defines a converter for the component. When it's an EL expression, it's resolved to a converter instance.\n    In case it's a static text, it must refer to a converter id.",
                "type": "javax.faces.convert.Converter"
            },
            {
                "name": "immediate",
                "description": "When set true, process validations logic is executed at apply request values phase for this component. Default is false.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "required",
                "description": "Marks component as required.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "validator",
                "description": "A method expression referring to a method validating the input.",
                "type": "javax.faces.validator.Validator"
            },
            {
                "name": "valueChangeListener",
                "description": "A method binding expression referring to a method for handling a valuchangeevent.",
                "type": "javax.faces.event.ValueChangeListener"
            },
            {
                "name": "requiredMessage",
                "description": "Message to display when required field validation fails.",
                "type": "java.lang.String"
            },
            {
                "name": "converterMessage",
                "description": "Message to display when conversion fails.",
                "type": "java.lang.String"
            },
            {
                "name": "validatorMessage",
                "description": "Message to display when validation fails.",
                "type": "java.lang.String"
            },
            {
                "name": "widgetVar",
                "description": "Name of the client side widget.",
                "type": "java.lang.String"
            },
            {
                "name": "disabled",
                "description": "Disables or enables the component.",
                "type": "boolean"
            },
            {
                "name": "readonly",
                "description": "Flag indicating that this component will prevent changes by the user.",
                "type": "boolean"
            },
            {
                "name": "label",
                "description": "",
                "type": "java.lang.String"
            },
            {
                "name": "onchange",
                "description": "",
                "type": "java.lang.String"
            },
            {
                "name": "style",
                "description": "",
                "type": "java.lang.String"
            },
            {
                "name": "styleClass",
                "description": "",
                "type": "java.lang.String"
            },
            {
                "name": "itemLabel",
                "description": "Label to display next to checkbox.",
                "type": "java.lang.String"
            },
            {
                "name": "tabindex",
                "description": "The tabindex attribute specifies the tab order of an element when the \"tab\" button is used for navigating.",
                "type": "java.lang.String"
            },
            {
                "name": "onfocus",
                "description": "Client side callback to execute when checkbox receives focus.",
                "type": "java.lang.String"
            },
            {
                "name": "onblur",
                "description": "Client side callback to execute when checkbox loses focus.",
                "type": "java.lang.String"
            },
            {
                "name": "title",
                "description": "Advisory tooltip information.",
                "type": "java.lang.String"
            },
            {
                "name": "escape",
                "description": "Defines if label of the component is escaped or not.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "ariaLabel",
                "description": "The aria-label attribute is used to define a string that labels the current element for accessibility.",
                "type": "java.lang.String"
            }
        ]
    },
    "p:selectCheckboxMenu": {
        "name": "p:selectCheckboxMenu",
        "description": "SelectCheckboxMenu is a multi select component that displays options in an overlay.",
        "attributes": [
            {
                "name": "id",
                "description": "Unique identifier of the component in a namingContainer.",
                "type": "java.lang.String"
            },
            {
                "name": "rendered",
                "description": "Boolean value to specify the rendering of the component, when set to false component will not be rendered.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "binding",
                "description": "An el expression referring to a server side UIComponent instance in a backing bean.",
                "type": "javax.faces.component.UIComponent"
            },
            {
                "name": "value",
                "description": "Value of the component.",
                "type": "java.lang.Object"
            },
            {
                "name": "converter",
                "description": "An el expression or a literal text that defines a converter for the component. When it's an EL expression, it's resolved to a converter instance.\n    In case it's a static text, it must refer to a converter id.",
                "type": "javax.faces.convert.Converter"
            },
            {
                "name": "immediate",
                "description": "When set true, process validations logic is executed at apply request values phase for this component. Default is false.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "required",
                "description": "Marks component as required.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "validator",
                "description": "A method expression referring to a method validating the input.",
                "type": "javax.faces.validator.Validator"
            },
            {
                "name": "valueChangeListener",
                "description": "A method binding expression referring to a method for handling a valuchangeevent.",
                "type": "javax.faces.event.ValueChangeListener"
            },
            {
                "name": "requiredMessage",
                "description": "Message to display when required field validation fails.",
                "type": "java.lang.String"
            },
            {
                "name": "converterMessage",
                "description": "Message to display when conversion fails.",
                "type": "java.lang.String"
            },
            {
                "name": "validatorMessage",
                "description": "Message to display when validation fails.",
                "type": "java.lang.String"
            },
            {
                "name": "widgetVar",
                "description": "Name of the client side widget.",
                "type": "java.lang.String"
            },
            {
                "name": "disabled",
                "description": "Disables the component when set to true.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "label",
                "description": "User presentable name of the component.",
                "type": "java.lang.String"
            },
            {
                "name": "onchange",
                "description": "Client side callback to execute when value changes.",
                "type": "java.lang.String"
            },
            {
                "name": "style",
                "description": "Inline style of the component.",
                "type": "java.lang.String"
            },
            {
                "name": "styleClass",
                "description": "Style class of the component.",
                "type": "java.lang.String"
            },
            {
                "name": "scrollHeight",
                "description": "Defines the maximum height of the scrollable area.",
                "type": "java.lang.String"
            },
            {
                "name": "onShow",
                "description": "Client side callback to execute when overlay is displayed.",
                "type": "java.lang.String"
            },
            {
                "name": "onHide",
                "description": "Client side callback to execute when overlay is hidden.",
                "type": "java.lang.String"
            },
            {
                "name": "filter",
                "description": "Renders an input field as a filter when enabled.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "filterMatchMode",
                "description": "Match mode for filtering, valid values are startsWith (default), contains, endsWith and custom.",
                "type": "java.lang.String"
            },
            {
                "name": "filterFunction",
                "description": "Client side function to use in custom filterMatchMode.",
                "type": "java.lang.String"
            },
            {
                "name": "caseSensitive",
                "description": "Defines if filtering would be case sensitive. Default is false.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "panelStyle",
                "description": "Inline style of the dropdown panel container element.",
                "type": "java.lang.String"
            },
            {
                "name": "panelStyleClass",
                "description": "Style class of the dropdown panel container element.",
                "type": "java.lang.String"
            },
            {
                "name": "var",
                "description": "Name of iterator to be used in custom content display.",
                "type": "String"
            },
            {
                "name": "appendTo",
                "description": "Appends the overlay to the element defined by search expression. Defaults to document body.",
                "type": "java.lang.String"
            },
            {
                "name": "tabindex",
                "description": "Position of the element in the tabbing order.",
                "type": "java.lang.String"
            },
            {
                "name": "title",
                "description": "Advisory tooltip information.",
                "type": "java.lang.String"
            },
            {
                "name": "showHeader",
                "description": "When enabled, the header of panel is displayed. Default is true.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "showSelectAll",
                "description": "When enabled, the \"Select All\" checkbox option is displayed. Default is true.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "updateLabel",
                "description": "When enabled, the label is updated on every change, else it statically displays the 'selectedLabel'. Default is false.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "multiple",
                "description": "",
                "type": "java.lang.Boolean"
            },
            {
                "name": "dynamic",
                "description": "Defines if dynamic loading is enabled for the element's panel.\n                If the value is \"true\", the overlay is not rendered on page load to improve performance. Default is false.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "labelSeparator",
                "description": "Separator for joining item lables if updateLabel is set to true. Default is \",\".",
                "type": "java.lang.String"
            },
            {
                "name": "emptyLabel",
                "description": "Label to be shown in updateLabel mode when no item is selected. If not set the label is shown.",
                "type": "java.lang.String"
            },
            {
                "name": "selectedLabel",
                "description": "Label to be shown in updateLabel mode when one or more items are selected. If not set the label is shown.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "filterPlaceholder",
                "description": "Placeholder text to show when filter input is empty.",
                "type": "java.lang.String"
            },
            {
                "name": "hideNoSelectionOption",
                "description": "Flag indicating that, if this component is activated by the user, The \"no selection option\", if any, must be hidden.",
                "type": "boolean"
            },
            {
                "name": "filterNormalize",
                "description": "Defines if filtering would be done using normalized values (accents will be removed from characters). Default is false.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "collectionType",
                "description": "Optional\n                attribute that is a literal string that is the fully qualified\n                class name of a concrete class that implements\n                &lt;code&gt;java.util.Collection&lt;/code&gt;, or an EL expression that\n                evaluates to either 1. such a String, or 2. the\n                &lt;code&gt;Class&lt;/code&gt; object itself.",
                "type": "java.lang.String"
            }
        ]
    },
    "p:selectManyButton": {
        "name": "p:selectManyButton",
        "description": "SelectManyButton is a multi select component using button user interface.",
        "attributes": [
            {
                "name": "id",
                "description": "Unique identifier of the component in a namingContainer.",
                "type": "java.lang.String"
            },
            {
                "name": "rendered",
                "description": "Boolean value to specify the rendering of the component, when set to false component will not be rendered.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "binding",
                "description": "An el expression referring to a server side UIComponent instance in a backing bean.",
                "type": "javax.faces.component.UIComponent"
            },
            {
                "name": "value",
                "description": "Value of the component.",
                "type": "java.lang.Object"
            },
            {
                "name": "converter",
                "description": "An el expression or a literal text that defines a converter for the component. When it's an EL expression, it's resolved to a converter instance.\n    In case it's a static text, it must refer to a converter id.",
                "type": "javax.faces.convert.Converter"
            },
            {
                "name": "immediate",
                "description": "When set true, process validations logic is executed at apply request values phase for this component. Default is false.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "required",
                "description": "Marks component as required.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "validator",
                "description": "A method expression referring to a method validating the input.",
                "type": "javax.faces.validator.Validator"
            },
            {
                "name": "valueChangeListener",
                "description": "A method binding expression referring to a method for handling a valuchangeevent.",
                "type": "javax.faces.event.ValueChangeListener"
            },
            {
                "name": "requiredMessage",
                "description": "Message to display when required field validation fails.",
                "type": "java.lang.String"
            },
            {
                "name": "converterMessage",
                "description": "Message to display when conversion fails.",
                "type": "java.lang.String"
            },
            {
                "name": "validatorMessage",
                "description": "Message to display when validation fails.",
                "type": "java.lang.String"
            },
            {
                "name": "widgetVar",
                "description": "Name of the client side widget.",
                "type": "java.lang.String"
            },
            {
                "name": "disabled",
                "description": "",
                "type": "java.lang.Boolean"
            },
            {
                "name": "label",
                "description": "",
                "type": "java.lang.String"
            },
            {
                "name": "layout",
                "description": "Layout of the buttons, valid values are custom or default.",
                "type": "java.lang.String"
            },
            {
                "name": "onchange",
                "description": "",
                "type": "java.lang.String"
            },
            {
                "name": "style",
                "description": "",
                "type": "java.lang.String"
            },
            {
                "name": "styleClass",
                "description": "",
                "type": "java.lang.String"
            },
            {
                "name": "tabindex",
                "description": "Position of the element in the tabbing order.",
                "type": "java.lang.String"
            },
            {
                "name": "hideNoSelectionOption",
                "description": "Flag indicating that, if this component is activated by the user, The \"no selection option\", if any, must be hidden.",
                "type": "boolean"
            }
        ]
    },
    "p:selectManyCheckbox": {
        "name": "p:selectManyCheckbox",
        "description": "SelectManyCheckbox is an extended version of the standard Faces SelectManyCheckbox.",
        "attributes": [
            {
                "name": "id",
                "description": "Unique identifier of the component in a namingContainer.",
                "type": "java.lang.String"
            },
            {
                "name": "rendered",
                "description": "Boolean value to specify the rendering of the component, when set to false component will not be rendered.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "binding",
                "description": "An el expression referring to a server side UIComponent instance in a backing bean.",
                "type": "javax.faces.component.UIComponent"
            },
            {
                "name": "value",
                "description": "Value of the component.",
                "type": "java.lang.Object"
            },
            {
                "name": "converter",
                "description": "An el expression or a literal text that defines a converter for the component. When it's an EL expression, it's resolved to a converter instance.\n    In case it's a static text, it must refer to a converter id.",
                "type": "javax.faces.convert.Converter"
            },
            {
                "name": "immediate",
                "description": "When set true, process validations logic is executed at apply request values phase for this component. Default is false.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "required",
                "description": "Marks component as required.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "validator",
                "description": "A method expression referring to a method validating the input.",
                "type": "javax.faces.validator.Validator"
            },
            {
                "name": "valueChangeListener",
                "description": "A method binding expression referring to a method for handling a valuchangeevent.",
                "type": "javax.faces.event.ValueChangeListener"
            },
            {
                "name": "requiredMessage",
                "description": "Message to display when required field validation fails.",
                "type": "java.lang.String"
            },
            {
                "name": "converterMessage",
                "description": "Message to display when conversion fails.",
                "type": "java.lang.String"
            },
            {
                "name": "validatorMessage",
                "description": "Message to display when validation fails.",
                "type": "java.lang.String"
            },
            {
                "name": "widgetVar",
                "description": "Name of the client side widget.",
                "type": "java.lang.String"
            },
            {
                "name": "disabled",
                "description": "Disables the component.",
                "type": "boolean"
            },
            {
                "name": "label",
                "description": "User presentable name.",
                "type": "java.lang.String"
            },
            {
                "name": "layout",
                "description": "Layout of the checkboxes, valid values are lineDirection, pageDirection, responsive and custom.",
                "type": "java.lang.String"
            },
            {
                "name": "flex",
                "description": "Use modern PrimeFlex-Grid instead of classic Grid CSS.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "columns",
                "description": "Defines the number of columns in grid layout.",
                "type": "java.lang.Integer"
            },
            {
                "name": "onchange",
                "description": "",
                "type": "java.lang.String"
            },
            {
                "name": "style",
                "description": "",
                "type": "java.lang.String"
            },
            {
                "name": "styleClass",
                "description": "",
                "type": "java.lang.String"
            },
            {
                "name": "tabindex",
                "description": "",
                "type": "java.lang.String"
            },
            {
                "name": "hideNoSelectionOption",
                "description": "Flag indicating that, if this component is activated by the user, The \"no selection option\", if any, must be hidden.",
                "type": "boolean"
            },
            {
                "name": "collectionType",
                "description": "Optional\n                attribute that is a literal string that is the fully qualified\n                class name of a concrete class that implements\n                &lt;code&gt;java.util.Collection&lt;/code&gt;, or an EL expression that\n                evaluates to either 1. such a String, or 2. the\n                &lt;code&gt;Class&lt;/code&gt; object itself.",
                "type": "java.lang.String"
            }
        ]
    },
    "p:selectManyMenu": {
        "name": "p:selectManyMenu",
        "description": "SelectManyMenu is an extended version of the standard Faces SelectManyMenu.",
        "attributes": [
            {
                "name": "id",
                "description": "Unique identifier of the component in a namingContainer.",
                "type": "java.lang.String"
            },
            {
                "name": "rendered",
                "description": "Boolean value to specify the rendering of the component, when set to false component will not be rendered.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "binding",
                "description": "An el expression referring to a server side UIComponent instance in a backing bean.",
                "type": "javax.faces.component.UIComponent"
            },
            {
                "name": "value",
                "description": "Value of the component.",
                "type": "java.lang.Object"
            },
            {
                "name": "converter",
                "description": "An el expression or a literal text that defines a converter for the component. When it's an EL expression, it's resolved to a converter instance.\n    In case it's a static text, it must refer to a converter id.",
                "type": "javax.faces.convert.Converter"
            },
            {
                "name": "immediate",
                "description": "When set true, process validations logic is executed at apply request values phase for this component. Default is false.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "required",
                "description": "Marks component as required.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "validator",
                "description": "A method expression referring to a method validating the input.",
                "type": "javax.faces.validator.Validator"
            },
            {
                "name": "valueChangeListener",
                "description": "A method binding expression referring to a method for handling a valuchangeevent.",
                "type": "javax.faces.event.ValueChangeListener"
            },
            {
                "name": "requiredMessage",
                "description": "Message to display when required field validation fails.",
                "type": "java.lang.String"
            },
            {
                "name": "converterMessage",
                "description": "Message to display when conversion fails.",
                "type": "java.lang.String"
            },
            {
                "name": "validatorMessage",
                "description": "Message to display when validation fails.",
                "type": "java.lang.String"
            },
            {
                "name": "widgetVar",
                "description": "Name of the client side widget.",
                "type": "java.lang.String"
            },
            {
                "name": "disabled",
                "description": "",
                "type": "boolean"
            },
            {
                "name": "label",
                "description": "",
                "type": "java.lang.String"
            },
            {
                "name": "onchange",
                "description": "",
                "type": "java.lang.String"
            },
            {
                "name": "onclick",
                "description": "",
                "type": "java.lang.String"
            },
            {
                "name": "ondblclick",
                "description": "",
                "type": "java.lang.String"
            },
            {
                "name": "style",
                "description": "",
                "type": "java.lang.String"
            },
            {
                "name": "styleClass",
                "description": "",
                "type": "java.lang.String"
            },
            {
                "name": "tabindex",
                "description": "Position of the input element in the tabbing order.",
                "type": "java.lang.String"
            },
            {
                "name": "var",
                "description": "Name of iterator to be used in custom content display.",
                "type": "String"
            },
            {
                "name": "showCheckbox",
                "description": "When true, a checkbox is displayed next to each item.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "metaKeySelection",
                "description": "The meta key (SHIFT or CTRL) must be held down to multi-select items. Default is true.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "filter",
                "description": "Displays an input filter for the list.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "filterMatchMode",
                "description": "Match mode for filtering, valid values are startsWith (default), contains, endsWith and custom.",
                "type": "java.lang.String"
            },
            {
                "name": "filterFunction",
                "description": "Client side function to use in custom filterMatchMode.",
                "type": "java.lang.String"
            },
            {
                "name": "caseSensitive",
                "description": "Defines if filtering would be case sensitive. Default is false.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "filterNormalize",
                "description": "Defines if filtering would be done using normalized values (accents will be removed from characters). Default is false.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "scrollHeight",
                "description": "Defines the height of the scrollable area.",
                "type": "java.lang.Integer"
            },
            {
                "name": "hideNoSelectionOption",
                "description": "Flag indicating that, if this component is activated by the user, The \"no selection option\", if any, must be hidden.",
                "type": "boolean"
            },
            {
                "name": "collectionType",
                "description": "Optional\n                attribute that is a literal string that is the fully qualified\n                class name of a concrete class that implements\n                &lt;code&gt;java.util.Collection&lt;/code&gt;, or an EL expression that\n                evaluates to either 1. such a String, or 2. the\n                &lt;code&gt;Class&lt;/code&gt; object itself.",
                "type": "java.lang.String"
            }
        ]
    },
    "p:selectOneButton": {
        "name": "p:selectOneButton",
        "description": "SelectOneButton is an input component to do a single select.",
        "attributes": [
            {
                "name": "id",
                "description": "Unique identifier of the component in a namingContainer.",
                "type": "java.lang.String"
            },
            {
                "name": "rendered",
                "description": "Boolean value to specify the rendering of the component, when set to false component will not be rendered.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "binding",
                "description": "An el expression referring to a server side UIComponent instance in a backing bean.",
                "type": "javax.faces.component.UIComponent"
            },
            {
                "name": "value",
                "description": "Value of the component.",
                "type": "java.lang.Object"
            },
            {
                "name": "converter",
                "description": "An el expression or a literal text that defines a converter for the component. When it's an EL expression, it's resolved to a converter instance.\n    In case it's a static text, it must refer to a converter id.",
                "type": "javax.faces.convert.Converter"
            },
            {
                "name": "immediate",
                "description": "When set true, process validations logic is executed at apply request values phase for this component. Default is false.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "required",
                "description": "Marks component as required.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "validator",
                "description": "A method expression referring to a method validating the input.",
                "type": "javax.faces.validator.Validator"
            },
            {
                "name": "valueChangeListener",
                "description": "A method binding expression referring to a method for handling a valuchangeevent.",
                "type": "javax.faces.event.ValueChangeListener"
            },
            {
                "name": "requiredMessage",
                "description": "Message to display when required field validation fails.",
                "type": "java.lang.String"
            },
            {
                "name": "converterMessage",
                "description": "Message to display when conversion fails.",
                "type": "java.lang.String"
            },
            {
                "name": "validatorMessage",
                "description": "Message to display when validation fails.",
                "type": "java.lang.String"
            },
            {
                "name": "widgetVar",
                "description": "Name of the client side widget.",
                "type": "java.lang.String"
            },
            {
                "name": "disabled",
                "description": "Disables or enables the component.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "layout",
                "description": "Layout of the selectOneButton, valid values are 'custom' or 'default'.",
                "type": "java.lang.String"
            },
            {
                "name": "label",
                "description": "Label of the button.",
                "type": "java.lang.String"
            },
            {
                "name": "onchange",
                "description": "Javascript to execute when the value of the button changes.",
                "type": "java.lang.String"
            },
            {
                "name": "style",
                "description": "Inline style of the button element.",
                "type": "java.lang.String"
            },
            {
                "name": "styleClass",
                "description": "Style class of the button element.",
                "type": "java.lang.String"
            },
            {
                "name": "tabindex",
                "description": "Position of the element in the tabbing order.",
                "type": "java.lang.String"
            },
            {
                "name": "unselectable",
                "description": "Unselectable mode when true allows the button to be unselected. Default true.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "hideNoSelectionOption",
                "description": "Flag indicating that, if this component is activated by the user, The \"no selection option\", if any, must be hidden.",
                "type": "boolean"
            }
        ]
    },
    "p:selectOneListbox": {
        "name": "p:selectOneListbox",
        "description": "SelectOneListbox is an extended version of the standard Faces selectOneListbox component.",
        "attributes": [
            {
                "name": "id",
                "description": "Unique identifier of the component in a namingContainer.",
                "type": "java.lang.String"
            },
            {
                "name": "rendered",
                "description": "Boolean value to specify the rendering of the component, when set to false component will not be rendered.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "binding",
                "description": "An el expression referring to a server side UIComponent instance in a backing bean.",
                "type": "javax.faces.component.UIComponent"
            },
            {
                "name": "value",
                "description": "Value of the component.",
                "type": "java.lang.Object"
            },
            {
                "name": "converter",
                "description": "An el expression or a literal text that defines a converter for the component. When it's an EL expression, it's resolved to a converter instance.\n    In case it's a static text, it must refer to a converter id.",
                "type": "javax.faces.convert.Converter"
            },
            {
                "name": "immediate",
                "description": "When set true, process validations logic is executed at apply request values phase for this component. Default is false.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "required",
                "description": "Marks component as required.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "validator",
                "description": "A method expression referring to a method validating the input.",
                "type": "javax.faces.validator.Validator"
            },
            {
                "name": "valueChangeListener",
                "description": "A method binding expression referring to a method for handling a valuchangeevent.",
                "type": "javax.faces.event.ValueChangeListener"
            },
            {
                "name": "requiredMessage",
                "description": "Message to display when required field validation fails.",
                "type": "java.lang.String"
            },
            {
                "name": "converterMessage",
                "description": "Message to display when conversion fails.",
                "type": "java.lang.String"
            },
            {
                "name": "validatorMessage",
                "description": "Message to display when validation fails.",
                "type": "java.lang.String"
            },
            {
                "name": "widgetVar",
                "description": "Name of the client side widget.",
                "type": "java.lang.String"
            },
            {
                "name": "disabled",
                "description": "Disables or enables the component.",
                "type": "boolean"
            },
            {
                "name": "readonly",
                "description": "Flag indicating that this component will prevent changes by the user.",
                "type": "boolean"
            },
            {
                "name": "label",
                "description": "",
                "type": "java.lang.String"
            },
            {
                "name": "onchange",
                "description": "",
                "type": "java.lang.String"
            },
            {
                "name": "onclick",
                "description": "",
                "type": "java.lang.String"
            },
            {
                "name": "ondblclick",
                "description": "",
                "type": "java.lang.String"
            },
            {
                "name": "style",
                "description": "",
                "type": "java.lang.String"
            },
            {
                "name": "styleClass",
                "description": "",
                "type": "java.lang.String"
            },
            {
                "name": "tabindex",
                "description": "Position of the input element in the tabbing order.",
                "type": "java.lang.String"
            },
            {
                "name": "var",
                "description": "Name of iterator to be used in custom content display.",
                "type": "String"
            },
            {
                "name": "filter",
                "description": "Displays an input filter for the list.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "filterMatchMode",
                "description": "Match mode for filtering, valid values are startsWith (default), contains, endsWith and custom.",
                "type": "java.lang.String"
            },
            {
                "name": "filterFunction",
                "description": "Client side function to use in custom filterMatchMode.",
                "type": "java.lang.String"
            },
            {
                "name": "caseSensitive",
                "description": "Defines if filtering would be case sensitive. Default is false.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "filterNormalize",
                "description": "Defines if filtering would be done using normalized values (accents will be removed from characters). Default is false.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "scrollHeight",
                "description": "Defines the height of the scrollable area.",
                "type": "java.lang.Integer"
            },
            {
                "name": "hideNoSelectionOption",
                "description": "Flag indicating that, if this component is activated by the user, The \"no selection option\", if any, must be hidden.",
                "type": "boolean"
            }
        ]
    },
    "p:selectOneMenu": {
        "name": "p:selectOneMenu",
        "description": "SelectOneMenu is an extended version of the standard Faces SelectOneMenu.",
        "attributes": [
            {
                "name": "id",
                "description": "Unique identifier of the component in a namingContainer.",
                "type": "java.lang.String"
            },
            {
                "name": "rendered",
                "description": "Boolean value to specify the rendering of the component, when set to false component will not be rendered.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "binding",
                "description": "An el expression referring to a server side UIComponent instance in a backing bean.",
                "type": "javax.faces.component.UIComponent"
            },
            {
                "name": "value",
                "description": "Value of the component.",
                "type": "java.lang.Object"
            },
            {
                "name": "converter",
                "description": "An el expression or a literal text that defines a converter for the component. When it's an EL expression, it's resolved to a converter instance.\n    In case it's a static text, it must refer to a converter id.",
                "type": "javax.faces.convert.Converter"
            },
            {
                "name": "immediate",
                "description": "When set true, process validations logic is executed at apply request values phase for this component. Default is false.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "required",
                "description": "Marks component as required.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "validator",
                "description": "A method expression referring to a method validating the input.",
                "type": "javax.faces.validator.Validator"
            },
            {
                "name": "valueChangeListener",
                "description": "A method binding expression referring to a method for handling a valuchangeevent.",
                "type": "javax.faces.event.ValueChangeListener"
            },
            {
                "name": "requiredMessage",
                "description": "Message to display when required field validation fails.",
                "type": "java.lang.String"
            },
            {
                "name": "converterMessage",
                "description": "Message to display when conversion fails.",
                "type": "java.lang.String"
            },
            {
                "name": "validatorMessage",
                "description": "Message to display when validation fails.",
                "type": "java.lang.String"
            },
            {
                "name": "widgetVar",
                "description": "Name of the client side widget.",
                "type": "java.lang.String"
            },
            {
                "name": "autocomplete",
                "description": "Controls browser autocomplete behavior for editable input field.",
                "type": "java.lang.String"
            },
            {
                "name": "disabled",
                "description": "Flag indicating whether the component should be disabled.",
                "type": "boolean"
            },
            {
                "name": "readonly",
                "description": "Flag indicating that this component will prevent changes by the user.",
                "type": "boolean"
            },
            {
                "name": "alwaysDisplayLabel",
                "description": "Always display the 'label' value instead of the selected item label. Default is false.",
                "type": "boolean"
            },
            {
                "name": "label",
                "description": "User presentable name used in conjuction with 'alwaysDisplayLabel' to display instead of selected item.",
                "type": "java.lang.String"
            },
            {
                "name": "hideNoSelectionOption",
                "description": "Flag indicating that, if this component is activated by the user, The \"no selection option\", if any, must be hidden.",
                "type": "boolean"
            },
            {
                "name": "onchange",
                "description": "Client side callback to execute when the value changes.",
                "type": "java.lang.String"
            },
            {
                "name": "style",
                "description": "Inline style of the component.",
                "type": "java.lang.String"
            },
            {
                "name": "styleClass",
                "description": "Style class of the component.",
                "type": "java.lang.String"
            },
            {
                "name": "panelStyle",
                "description": "Inline style of the dropdown panel container element.",
                "type": "java.lang.String"
            },
            {
                "name": "panelStyleClass",
                "description": "Style class of the dropdown panel container element.",
                "type": "java.lang.String"
            },
            {
                "name": "var",
                "description": "Name of the iterator variable that references each element in the data set.",
                "type": "String"
            },
            {
                "name": "height",
                "description": "Defines the height of the scrollable area.",
                "type": "java.lang.String"
            },
            {
                "name": "tabindex",
                "description": "Position of the element in the tabbing order.",
                "type": "java.lang.String"
            },
            {
                "name": "editable",
                "description": "When true, allows the user to edit the dropdown value by typing directly into the input field.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "onkeydown",
                "description": "Client side callback to execute when a key is pressed down.",
                "type": "java.lang.String"
            },
            {
                "name": "onkeyup",
                "description": "Client side callback to execute when a key is released.",
                "type": "java.lang.String"
            },
            {
                "name": "filter",
                "description": "Displays an input filter for the list.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "filterMatchMode",
                "description": "Match mode for filtering, valid values are startsWith (default), contains, endsWith and custom.",
                "type": "java.lang.String"
            },
            {
                "name": "filterFunction",
                "description": "Client side function to use in custom filterMatchMode.",
                "type": "java.lang.String"
            },
            {
                "name": "filterPlaceholder",
                "description": "Watermark displayed in the filter input field before the user enters a value.",
                "type": "java.lang.String"
            },
            {
                "name": "caseSensitive",
                "description": "Defines if filtering would be case sensitive. Default is false.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "filterNormalize",
                "description": "Defines if filtering would be done using normalized values (accents will be removed from characters). Default is false.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "maxlength",
                "description": "Maximum number of characters that may be entered in this field.",
                "type": "java.lang.Integer"
            },
            {
                "name": "appendTo",
                "description": "Appends the overlay to the element defined by search expression. Defaults to document body.",
                "type": "java.lang.String"
            },
            {
                "name": "title",
                "description": "Advisory tooltip information.",
                "type": "java.lang.String"
            },
            {
                "name": "syncTooltip",
                "description": "Updates the title of the component with the description of the selected item.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "labelTemplate",
                "description": "Displays label of the element in a custom template. Valid placeholder is {0}.",
                "type": "java.lang.String"
            },
            {
                "name": "placeholder",
                "description": "Watermark displayed in the input field before the user enters a value in an HTML5 browser.",
                "type": "java.lang.String"
            },
            {
                "name": "inputmode",
                "description": "HTML5 inputmode attribute for hinting at the type of data this control has for touch devices to display appropriate virtual keyboard.",
                "type": "java.lang.String"
            },
            {
                "name": "onfocus",
                "description": "Client side callback to execute when element receives focus.",
                "type": "java.lang.String"
            },
            {
                "name": "onblur",
                "description": "Client side callback to execute when element loses focus.",
                "type": "java.lang.String"
            },
            {
                "name": "autoWidth",
                "description": "Calculates a fixed width based on the width of the maximum option label. Possible values: auto, true, false.",
                "type": "java.lang.String"
            },
            {
                "name": "dynamic",
                "description": "Defines if dynamic loading is enabled for the element's panel.\n                If the value is \"true\", the overlay is not rendered on page load to improve performance. Default is false.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "dir",
                "description": "Defines text direction, valid values are \"ltr\" (default) and \"rtl\".",
                "type": "java.lang.String"
            },
            {
                "name": "touchable",
                "description": "Enable touch support if browser detection supports it. Default is false because it is globally enabled by default.",
                "type": "java.lang.Boolean"
            }
        ]
    },
    "p:selectOneRadio": {
        "name": "p:selectOneRadio",
        "description": "SelectOneRadio is an extended version of the standard SelectOneRadio.",
        "attributes": [
            {
                "name": "id",
                "description": "Unique identifier of the component in a namingContainer.",
                "type": "java.lang.String"
            },
            {
                "name": "rendered",
                "description": "Boolean value to specify the rendering of the component, when set to false component will not be rendered.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "binding",
                "description": "An el expression referring to a server side UIComponent instance in a backing bean.",
                "type": "javax.faces.component.UIComponent"
            },
            {
                "name": "value",
                "description": "Value of the component.",
                "type": "java.lang.Object"
            },
            {
                "name": "converter",
                "description": "An el expression or a literal text that defines a converter for the component. When it's an EL expression, it's resolved to a converter instance.\n    In case it's a static text, it must refer to a converter id.",
                "type": "javax.faces.convert.Converter"
            },
            {
                "name": "immediate",
                "description": "When set true, process validations logic is executed at apply request values phase for this component. Default is false.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "required",
                "description": "Marks component as required.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "validator",
                "description": "A method expression referring to a method validating the input.",
                "type": "javax.faces.validator.Validator"
            },
            {
                "name": "valueChangeListener",
                "description": "A method binding expression referring to a method for handling a valuchangeevent.",
                "type": "javax.faces.event.ValueChangeListener"
            },
            {
                "name": "requiredMessage",
                "description": "Message to display when required field validation fails.",
                "type": "java.lang.String"
            },
            {
                "name": "converterMessage",
                "description": "Message to display when conversion fails.",
                "type": "java.lang.String"
            },
            {
                "name": "validatorMessage",
                "description": "Message to display when validation fails.",
                "type": "java.lang.String"
            },
            {
                "name": "widgetVar",
                "description": "Name of the client side widget.",
                "type": "java.lang.String"
            },
            {
                "name": "disabled",
                "description": "Is the radio button disabled.",
                "type": "boolean"
            },
            {
                "name": "label",
                "description": "Label of the radio button.",
                "type": "java.lang.String"
            },
            {
                "name": "layout",
                "description": "Layout of the radiobuttons, valid values are lineDirection , pageDirection , custom, responsive and grid.",
                "type": "java.lang.String"
            },
            {
                "name": "flex",
                "description": "Use modern PrimeFlex-Grid instead of classic Grid CSS.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "columns",
                "description": "Defines the number of columns in grid layout.",
                "type": "java.lang.Integer"
            },
            {
                "name": "onchange",
                "description": "",
                "type": "java.lang.String"
            },
            {
                "name": "onclick",
                "description": "",
                "type": "java.lang.String"
            },
            {
                "name": "style",
                "description": "",
                "type": "java.lang.String"
            },
            {
                "name": "styleClass",
                "description": "",
                "type": "java.lang.String"
            },
            {
                "name": "tabindex",
                "description": "The tabindex attribute specifies the tab order of an element when the \"tab\" button is used for navigating.",
                "type": "java.lang.String"
            },
            {
                "name": "unselectable",
                "description": "Unselectable mode when true clicking a radio again will clear the selection. Default false.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "hideNoSelectionOption",
                "description": "Flag indicating that, if this component is activated by the user, The \"no selection option\", if any, must be hidden.",
                "type": "boolean"
            },
            {
                "name": "readonly",
                "description": "Flag indicating that this component will prevent changes by the user.",
                "type": "boolean"
            },
            {
                "name": "columnClasses",
                "description": "Comma separated list of column style classes.",
                "type": "java.lang.String"
            }
        ]
    },
    "p:separator": {
        "name": "p:separator",
        "description": "Seperator displays a horizontal line to separate content.",
        "attributes": [
            {
                "name": "id",
                "description": "Unique identifier of the component in a namingContainer.",
                "type": "java.lang.String"
            },
            {
                "name": "rendered",
                "description": "Boolean value to specify the rendering of the component, when set to false component will not be rendered.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "binding",
                "description": "An el expression referring to a server side UIComponent instance in a backing bean.",
                "type": "javax.faces.component.UIComponent"
            },
            {
                "name": "title",
                "description": "Advisory tooltip information.",
                "type": "java.lang.String"
            },
            {
                "name": "style",
                "description": "Inline style of the separator.",
                "type": "java.lang.String"
            },
            {
                "name": "styleClass",
                "description": "Style class of the separator.",
                "type": "java.lang.String"
            }
        ]
    },
    "p:sidebar": {
        "name": "p:sidebar",
        "description": "Sidebar is a panel component displayed as an overlay.",
        "attributes": [
            {
                "name": "id",
                "description": "Unique identifier of the component in a namingContainer.",
                "type": "java.lang.String"
            },
            {
                "name": "rendered",
                "description": "Boolean value to specify the rendering of the component, when set to false component will not be rendered.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "binding",
                "description": "An el expression referring to a server side UIComponent instance in a backing bean.",
                "type": "javax.faces.component.UIComponent"
            },
            {
                "name": "widgetVar",
                "description": "Name of the client side widget.",
                "type": "java.lang.String"
            },
            {
                "name": "style",
                "description": "Style of the container element.",
                "type": "java.lang.String"
            },
            {
                "name": "styleClass",
                "description": "StyleClass of the container element.",
                "type": "java.lang.String"
            },
            {
                "name": "visible",
                "description": "Specifies the visibility of the sidebar.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "modal",
                "description": "Boolean value that specifies whether the document should be shielded with a partially transparent mask to require the user to close the Panel before being able to activate any elements in the document. Default is true.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "position",
                "description": "Position of the sidebar. Default is left.",
                "type": "java.lang.String"
            },
            {
                "name": "fullScreen",
                "description": "",
                "type": "java.lang.Boolean"
            },
            {
                "name": "showCloseIcon",
                "description": "Displays a close icon to hide the overlay, default is true.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "blockScroll",
                "description": "Whether to block scrolling of the document when sidebar is active.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "baseZIndex",
                "description": "Base zIndex value to use in layering. Only use this attribute if you are having issues with your sidebar displaying as this may cause issues with overlay components inside the sidebar.",
                "type": "java.lang.Integer"
            },
            {
                "name": "appendTo",
                "description": "Appends the sidebar to the given search expression.",
                "type": "java.lang.String"
            },
            {
                "name": "dynamic",
                "description": "Defines if dynamic loading is enabled for the element's panel.\n                If the value is \"true\", the overlay is not rendered on page load to improve performance. Default is false.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "onShow",
                "description": "Client side callback to execute when sidebar is displayed.",
                "type": "java.lang.String"
            },
            {
                "name": "onHide",
                "description": "Client side callback to execute when sidebar is hidden.",
                "type": "java.lang.String"
            }
        ]
    },
    "p:signature": {
        "name": "p:signature",
        "description": "Signature is an input component to provide a signature.",
        "attributes": [
            {
                "name": "id",
                "description": "Unique identifier of the component in a namingContainer.",
                "type": "java.lang.String"
            },
            {
                "name": "rendered",
                "description": "Boolean value to specify the rendering of the component, when set to false component will not be rendered.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "binding",
                "description": "An el expression referring to a server side UIComponent instance in a backing bean.",
                "type": "javax.faces.component.UIComponent"
            },
            {
                "name": "value",
                "description": "Value of the component.",
                "type": "java.lang.Object"
            },
            {
                "name": "converter",
                "description": "An el expression or a literal text that defines a converter for the component. When it's an EL expression, it's resolved to a converter instance.\n    In case it's a static text, it must refer to a converter id.",
                "type": "javax.faces.convert.Converter"
            },
            {
                "name": "immediate",
                "description": "When set true, process validations logic is executed at apply request values phase for this component. Default is false.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "required",
                "description": "Marks component as required.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "validator",
                "description": "A method expression referring to a method validating the input.",
                "type": "javax.faces.validator.Validator"
            },
            {
                "name": "valueChangeListener",
                "description": "A method binding expression referring to a method for handling a valuchangeevent.",
                "type": "javax.faces.event.ValueChangeListener"
            },
            {
                "name": "requiredMessage",
                "description": "Message to display when required field validation fails.",
                "type": "java.lang.String"
            },
            {
                "name": "converterMessage",
                "description": "Message to display when conversion fails.",
                "type": "java.lang.String"
            },
            {
                "name": "validatorMessage",
                "description": "Message to display when validation fails.",
                "type": "java.lang.String"
            },
            {
                "name": "widgetVar",
                "description": "Name of the client side widget.",
                "type": "java.lang.String"
            },
            {
                "name": "backgroundColor",
                "description": "Background color, default is #ffffff.",
                "type": "java.lang.String"
            },
            {
                "name": "color",
                "description": "Foreground color, default is #000000.",
                "type": "java.lang.String"
            },
            {
                "name": "thickness",
                "description": "Thickness of lines, default is 2.",
                "type": "java.lang.Integer"
            },
            {
                "name": "style",
                "description": "Inline style of the component.",
                "type": "java.lang.String"
            },
            {
                "name": "styleClass",
                "description": "Style class of the component.",
                "type": "java.lang.String"
            },
            {
                "name": "readonly",
                "description": "When enabled, signature is used for display purposes only.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "guideline",
                "description": "Adds a guideline when enabled, default is false.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "guidelineColor",
                "description": "Color of the guideline, default is #a0a0a0.",
                "type": "java.lang.String"
            },
            {
                "name": "guidelineOffset",
                "description": "Offset of guideline from bottom.",
                "type": "java.lang.Integer"
            },
            {
                "name": "guidelineIndent",
                "description": "Guide line indent from the edges.",
                "type": "java.lang.Integer"
            },
            {
                "name": "onchange",
                "description": "Client side callback to execute when signature changes.",
                "type": "java.lang.String"
            },
            {
                "name": "base64Value",
                "description": "Write-only value used to pass the value in base64 to backing bean.",
                "type": "java.lang.String"
            },
            {
                "name": "textValue",
                "description": "The typed text of this signature if the user chose to type instead of draw the signature.",
                "type": "java.lang.String"
            },
            {
                "name": "tabindex",
                "description": "Position of the element in the tabbing order. Default to \"0\".",
                "type": "java.lang.String"
            },
            {
                "name": "tabindex",
                "description": "Position of the element in the tabbing order.",
                "type": "java.lang.String"
            },
            {
                "name": "ariaLabel",
                "description": "The aria-label attribute is used to define a string that labels the current element for accessibility.",
                "type": "java.lang.String"
            },
            {
                "name": "fontSize",
                "description": "Font size for typing in a signature. Default is 40.",
                "type": "java.lang.Integer"
            },
            {
                "name": "fontFamily",
                "description": "Font family for typing in a signature. Default is \"Brush Script MT, cursive\"",
                "type": "java.lang.String"
            }
        ]
    },
    "p:slideMenu": {
        "name": "p:slideMenu",
        "description": "SlideMenu displays submenus with a slide animation.",
        "attributes": [
            {
                "name": "id",
                "description": "Unique identifier of the component in a namingContainer.",
                "type": "java.lang.String"
            },
            {
                "name": "rendered",
                "description": "Boolean value to specify the rendering of the component, when set to false component will not be rendered.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "binding",
                "description": "An el expression referring to a server side UIComponent instance in a backing bean.",
                "type": "javax.faces.component.UIComponent"
            },
            {
                "name": "widgetVar",
                "description": "Name of the client side widget.",
                "type": "java.lang.String"
            },
            {
                "name": "model",
                "description": "A menu model instance to create menu programmatically.",
                "type": "org.primefaces.model.menu.MenuModel"
            },
            {
                "name": "style",
                "description": "Inline style of the main container element.",
                "type": "java.lang.String"
            },
            {
                "name": "styleClass",
                "description": "Style class of the main container element.",
                "type": "java.lang.String"
            },
            {
                "name": "backLabel",
                "description": "Text for back link, only applies to sliding menus. Default is \"Back\"",
                "type": "java.lang.String"
            },
            {
                "name": "trigger",
                "description": "Id of component whose click event will show the dynamic positioned menu.",
                "type": "java.lang.String"
            },
            {
                "name": "my",
                "description": "Corner of menu to align with trigger element.",
                "type": "java.lang.String"
            },
            {
                "name": "at",
                "description": "Corner of trigger to align with menu element.",
                "type": "java.lang.String"
            },
            {
                "name": "overlay",
                "description": "Defines positioning, when enabled menu is displayed with absolute positioning relative to the trigger.\n                Default is false, meaning static positioning.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "triggerEvent",
                "description": "Event name of component that will show the dynamic positioned menu. Default is click.",
                "type": "java.lang.String"
            }
        ]
    },
    "p:slider": {
        "name": "p:slider",
        "description": "Slider is used to provide input with various customization options like orientation, display modes and skinning.",
        "attributes": [
            {
                "name": "id",
                "description": "Unique identifier of the component in a namingContainer.",
                "type": "java.lang.String"
            },
            {
                "name": "rendered",
                "description": "Boolean value to specify the rendering of the component, when set to false component will not be rendered.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "binding",
                "description": "An el expression referring to a server side UIComponent instance in a backing bean.",
                "type": "javax.faces.component.UIComponent"
            },
            {
                "name": "widgetVar",
                "description": "Name of the client side widget.",
                "type": "java.lang.String"
            },
            {
                "name": "for",
                "description": "Id of the input text that the slider will be used for.",
                "type": "java.lang.String"
            },
            {
                "name": "display",
                "description": "Id of the component to display the slider value.",
                "type": "java.lang.String"
            },
            {
                "name": "minValue",
                "description": "Minimum value of the slider. Default is 0.0.",
                "type": "java.lang.Double"
            },
            {
                "name": "maxValue",
                "description": "Maximum value of the slider. Default is 100.0.",
                "type": "java.lang.Double"
            },
            {
                "name": "style",
                "description": "Inline style of the container element.",
                "type": "java.lang.String"
            },
            {
                "name": "styleClass",
                "description": "Style class of the container element.",
                "type": "java.lang.String"
            },
            {
                "name": "animate",
                "description": "Boolean value to enable/disable the animated move when background of slider is clicked. Default is true.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "type",
                "description": "Sets the type of the slider, \"horizontal\" or \"vertical\". Default is horizontal.",
                "type": "java.lang.String"
            },
            {
                "name": "step",
                "description": "Fixed pixel increments that the slider move in. Default is 1.0.",
                "type": "java.lang.Double"
            },
            {
                "name": "disabled",
                "description": "Disables or enables the component.",
                "type": "boolean"
            },
            {
                "name": "readonly",
                "description": "Flag indicating that this component will prevent changes by the user.",
                "type": "boolean"
            },
            {
                "name": "onSlideStart",
                "description": "Client side callback to execute when slide begins.",
                "type": "java.lang.String"
            },
            {
                "name": "onSlide",
                "description": "Client side callback to execute during sliding.",
                "type": "java.lang.String"
            },
            {
                "name": "onSlideEnd",
                "description": "Client side callback to execute when slide ends.",
                "type": "java.lang.String"
            },
            {
                "name": "range",
                "description": "When set `true`, two handles are provided for selection a range. Another types `false` for disable range style and `max` for shows range handle to the slider max.",
                "type": "java.lang.String"
            },
            {
                "name": "displayTemplate",
                "description": "String template to use when updating the display. Valid placeholders are {value}, {min} and {max}.",
                "type": "java.lang.String"
            },
            {
                "name": "touchable",
                "description": "Enable touch support if browser detection supports it. Default is false because it is globally enabled by default.",
                "type": "java.lang.Boolean"
            }
        ]
    },
    "p:spacer": {
        "name": "p:spacer",
        "description": "Spacer is used to put spaces between elements.",
        "attributes": [
            {
                "name": "id",
                "description": "Unique identifier of the component in a namingContainer.",
                "type": "java.lang.String"
            },
            {
                "name": "rendered",
                "description": "Boolean value to specify the rendering of the component, when set to false component will not be rendered.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "binding",
                "description": "An el expression referring to a server side UIComponent instance in a backing bean.",
                "type": "javax.faces.component.UIComponent"
            },
            {
                "name": "width",
                "description": "Width of the space.",
                "type": "java.lang.String"
            },
            {
                "name": "height",
                "description": "Height of the space.",
                "type": "java.lang.String"
            },
            {
                "name": "title",
                "description": "Advisory tooltip information.",
                "type": "java.lang.String"
            },
            {
                "name": "style",
                "description": "Inline style of the spacer.",
                "type": "java.lang.String"
            },
            {
                "name": "styleClass",
                "description": "Style class of the spacer.",
                "type": "java.lang.String"
            }
        ]
    },
    "p:spinner": {
        "name": "p:spinner",
        "description": "Spinner is an input component to provide a numerical input via increment and decrement buttons.",
        "attributes": [
            {
                "name": "id",
                "description": "Unique identifier of the component in a namingContainer.",
                "type": "java.lang.String"
            },
            {
                "name": "rendered",
                "description": "Boolean value to specify the rendering of the component, when set to false component will not be rendered.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "binding",
                "description": "An el expression referring to a server side UIComponent instance in a backing bean.",
                "type": "javax.faces.component.UIComponent"
            },
            {
                "name": "value",
                "description": "Value of the component.",
                "type": "java.lang.Object"
            },
            {
                "name": "converter",
                "description": "An el expression or a literal text that defines a converter for the component. When it's an EL expression, it's resolved to a converter instance.\n    In case it's a static text, it must refer to a converter id.",
                "type": "javax.faces.convert.Converter"
            },
            {
                "name": "immediate",
                "description": "When set true, process validations logic is executed at apply request values phase for this component. Default is false.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "required",
                "description": "Marks component as required.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "validator",
                "description": "A method expression referring to a method validating the input.",
                "type": "javax.faces.validator.Validator"
            },
            {
                "name": "valueChangeListener",
                "description": "A method binding expression referring to a method for handling a valuchangeevent.",
                "type": "javax.faces.event.ValueChangeListener"
            },
            {
                "name": "requiredMessage",
                "description": "Message to display when required field validation fails.",
                "type": "java.lang.String"
            },
            {
                "name": "converterMessage",
                "description": "Message to display when conversion fails.",
                "type": "java.lang.String"
            },
            {
                "name": "validatorMessage",
                "description": "Message to display when validation fails.",
                "type": "java.lang.String"
            },
            {
                "name": "accesskey",
                "description": "Access key to transfer focus to the input element.",
                "type": "java.lang.String"
            },
            {
                "name": "alt",
                "description": "Alternate textual description of the input element.",
                "type": "java.lang.String"
            },
            {
                "name": "autocomplete",
                "description": "Controls browser autocomplete behavior.",
                "type": "java.lang.String"
            },
            {
                "name": "dir",
                "description": "Direction indication for text that does not inherit directionality.",
                "type": "java.lang.String"
            },
            {
                "name": "disabled",
                "description": "Disables the input element, default is false.",
                "type": "boolean"
            },
            {
                "name": "label",
                "description": "A localized user presentable name.",
                "type": "java.lang.String"
            },
            {
                "name": "lang",
                "description": "Code describing the language used in the generated markup.",
                "type": "java.lang.String"
            },
            {
                "name": "maxlength",
                "description": "Maximum number of characters that may be entered in this field.",
                "type": "int"
            },
            {
                "name": "onblur",
                "description": "Client side callback to execute when input element loses focus.",
                "type": "java.lang.String"
            },
            {
                "name": "onchange",
                "description": "Client side callback to execute when input element loses focus and its value has been modified since gaining focus.",
                "type": "java.lang.String"
            },
            {
                "name": "onclick",
                "description": "Client side callback to execute when input element is clicked.",
                "type": "java.lang.String"
            },
            {
                "name": "ondblclick",
                "description": "Client side callback to execute when input element is double clicked.",
                "type": "java.lang.String"
            },
            {
                "name": "onfocus",
                "description": "Client side callback to execute when input element receives focus.",
                "type": "java.lang.String"
            },
            {
                "name": "onkeydown",
                "description": "Client side callback to execute when a key is pressed down over input element.",
                "type": "java.lang.String"
            },
            {
                "name": "onkeypress",
                "description": "Client side callback to execute when a key is pressed and released over input element.",
                "type": "java.lang.String"
            },
            {
                "name": "onkeyup",
                "description": "Client side callback to execute when a key is released over input element.",
                "type": "java.lang.String"
            },
            {
                "name": "onmousedown",
                "description": "Client side callback to execute when a pointer input element is pressed down over input element.",
                "type": "java.lang.String"
            },
            {
                "name": "onmousemove",
                "description": "Client side callback to execute when a pointer input element is moved within input element.",
                "type": "java.lang.String"
            },
            {
                "name": "onmouseout",
                "description": "Client side callback to execute when a pointer input element is moved away from input element.",
                "type": "java.lang.String"
            },
            {
                "name": "onmouseover",
                "description": "Client side callback to execute when a pointer input element is moved onto input element.",
                "type": "java.lang.String"
            },
            {
                "name": "onmouseup",
                "description": "Client side callback to execute when a pointer input element is released over input element.",
                "type": "java.lang.String"
            },
            {
                "name": "onwheel",
                "description": "Client side callback to execute when the mouse wheel rolls up or down over an element.",
                "type": "java.lang.String"
            },
            {
                "name": "onselect",
                "description": "Client side callback to execute when text within input element is selected by user.",
                "type": "java.lang.String"
            },
            {
                "name": "oncut",
                "description": "Client side callback to execute when the user copies the content of an element.",
                "type": "java.lang.String"
            },
            {
                "name": "oncopy",
                "description": "Client side callback to execute when the user cuts the content of an element.",
                "type": "java.lang.String"
            },
            {
                "name": "onpaste",
                "description": "Client side callback to execute when the user pastes some content in an element.",
                "type": "java.lang.String"
            },
            {
                "name": "oninput",
                "description": "Client side callback to execute when an element gets user input.",
                "type": "java.lang.String"
            },
            {
                "name": "oncontextmenu",
                "description": "Client side callback to execute when a context menu is triggered.",
                "type": "java.lang.String"
            },
            {
                "name": "oninvalid",
                "description": "Client side callback to execute when an element is invalid.",
                "type": "java.lang.String"
            },
            {
                "name": "onreset",
                "description": "Client side callback to execute when the Reset button in a form is clicked.",
                "type": "java.lang.String"
            },
            {
                "name": "onsearch",
                "description": "Client side callback to execute when the user writes something in a search field.",
                "type": "java.lang.String"
            },
            {
                "name": "ondrag",
                "description": "Client side callback to execute when an element is dragged.",
                "type": "java.lang.String"
            },
            {
                "name": "ondragend",
                "description": "Client side callback to execute at the end of a drag operation.",
                "type": "java.lang.String"
            },
            {
                "name": "ondragenter",
                "description": "Client side callback to execute when an element has been dragged to a valid drop target.",
                "type": "java.lang.String"
            },
            {
                "name": "ondragleave",
                "description": "Client side callback to execute when an element leaves a valid drop target.",
                "type": "java.lang.String"
            },
            {
                "name": "ondragover",
                "description": "Client side callback to execute when an element is being dragged over a valid drop target.",
                "type": "java.lang.String"
            },
            {
                "name": "ondragstart",
                "description": "Client side callback to execute at the start of a drag operation.",
                "type": "java.lang.String"
            },
            {
                "name": "ondrop",
                "description": "Client side callback to execute when dragged element is being dropped.",
                "type": "java.lang.String"
            },
            {
                "name": "onscroll",
                "description": "Client side callback to execute when an element's scrollbar is being scrolled.",
                "type": "java.lang.String"
            },
            {
                "name": "readonly",
                "description": "Flag indicating that this component will prevent changes by the user.",
                "type": "boolean"
            },
            {
                "name": "size",
                "description": "Number of characters used to determine the width of the input element.",
                "type": "int"
            },
            {
                "name": "style",
                "description": "Inline style of the component.",
                "type": "java.lang.String"
            },
            {
                "name": "styleClass",
                "description": "Style class of the component.",
                "type": "java.lang.String"
            },
            {
                "name": "tabindex",
                "description": "Position of the element in the tabbing order.",
                "type": "java.lang.String"
            },
            {
                "name": "title",
                "description": "Advisory tooltip information.",
                "type": "java.lang.String"
            },
            {
                "name": "placeholder",
                "description": "The placeholder attribute specifies a short hint that describes the expected value of an input field.",
                "type": "java.lang.String"
            },
            {
                "name": "inputmode",
                "description": "HTML5 inputmode attribute for hinting at the type of data this control has for touch devices to display appropriate virtual keyboard.",
                "type": "java.lang.String"
            },
            {
                "name": "widgetVar",
                "description": "Name of the client side widget.",
                "type": "java.lang.String"
            },
            {
                "name": "stepFactor",
                "description": "Stepping factor for each increment and decrement. Default is 1.0.",
                "type": "java.lang.Double"
            },
            {
                "name": "round",
                "description": "Round the value to the nearest stepFactor. Default is false.",
                "type": "boolean"
            },
            {
                "name": "min",
                "description": "Minimum boundary value. Default is min double value.",
                "type": "java.lang.Double"
            },
            {
                "name": "max",
                "description": "Maximum boundary value. Default is max double value.",
                "type": "java.lang.Double"
            },
            {
                "name": "rotate",
                "description": "Rotate to the minimum value when maximum value is reached and vice versa. Default is false.",
                "type": "boolean"
            },
            {
                "name": "prefix",
                "description": "Prefix of the input.",
                "type": "java.lang.String"
            },
            {
                "name": "suffix",
                "description": "Suffix of the input.",
                "type": "java.lang.String"
            },
            {
                "name": "decimalPlaces",
                "description": "Number of decimal places.",
                "type": "java.lang.String"
            },
            {
                "name": "decimalSeparator",
                "description": "Decimal separator char. Default is taken from the view's locale.",
                "type": "java.lang.String"
            },
            {
                "name": "thousandSeparator",
                "description": "Thousand separator char. Default is taken from the view's locale.",
                "type": "java.lang.String"
            },
            {
                "name": "buttons",
                "description": "Buttons mode ('stacked', 'horizontal', 'horizontal-after' or 'vertical'). Default is 'stacked'.",
                "type": "java.lang.String"
            },
            {
                "name": "upIcon",
                "description": "Up button icon, if buttons are not stacked. Default is 'pi pi-plus'.",
                "type": "java.lang.String"
            },
            {
                "name": "downIcon",
                "description": "Down button icon, if buttons are not stacked. Default is 'pi pi-minus'.",
                "type": "java.lang.String"
            },
            {
                "name": "upButtonStyleClass",
                "description": "Up button style class. Default is null.",
                "type": "java.lang.String"
            },
            {
                "name": "downButtonStyleClass",
                "description": "Down button style class. Default is null.",
                "type": "java.lang.String"
            },
            {
                "name": "modifyValueOnWheel",
                "description": "Allows the user to increment or decrement the element value with the mouse wheel, default is true.",
                "type": "boolean"
            }
        ]
    },
    "p:splitButton": {
        "name": "p:splitButton",
        "description": "SplitButton displays a default command and additional ones in an overlay.",
        "attributes": [
            {
                "name": "id",
                "description": "Unique identifier of the component in a namingContainer.",
                "type": "java.lang.String"
            },
            {
                "name": "rendered",
                "description": "Boolean value to specify the rendering of the component, when set to false component will not be rendered.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "binding",
                "description": "An el expression referring to a server side UIComponent instance in a backing bean.",
                "type": "javax.faces.component.UIComponent"
            },
            {
                "name": "value",
                "description": "Label of the component.",
                "type": "java.lang.Object"
            },
            {
                "name": "actionListener",
                "description": "An actionlistener to process when command is executed.",
                "type": "javax.faces.event.ActionListener"
            },
            {
                "name": "action",
                "description": "A method expression or a string outcome to process when command is executed.",
                "type": "javax.el.MethodExpression"
            },
            {
                "name": "immediate",
                "description": "Boolean value that determines the phaseId of the action event,\n    when true actions are processed at \"Apply Request Values\", when false at \"Invoke Application\" phase.",
                "type": "boolean"
            },
            {
                "name": "widgetVar",
                "description": "Name of the client side widget.",
                "type": "java.lang.String"
            },
            {
                "name": "ajax",
                "description": "Specifies the submit mode, when set to true (default), submit would be made with Ajax.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "async",
                "description": "When set to true, ajax requests are not queued.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "process",
                "description": "Component(s) to process partially instead of whole view.",
                "type": "java.lang.String"
            },
            {
                "name": "update",
                "description": "Component(s) to be updated with ajax.",
                "type": "java.lang.String"
            },
            {
                "name": "onstart",
                "description": "Client side callback to execute before ajax request begins.",
                "type": "java.lang.String"
            },
            {
                "name": "oncomplete",
                "description": "Client side callback to execute when ajax request is completed.",
                "type": "java.lang.String"
            },
            {
                "name": "onerror",
                "description": "Client side callback to execute when ajax request fails.",
                "type": "java.lang.String"
            },
            {
                "name": "onsuccess",
                "description": "Client side callback to execute when ajax request succeeds.",
                "type": "java.lang.String"
            },
            {
                "name": "global",
                "description": "Defines whether to trigger ajaxStatus or not.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "delay",
                "description": "If less than delay milliseconds elapses between calls to request() only the most recent one is sent and all other requests are discarded. The default value of this option is null. If the value of delay is the literal string 'none' without the quotes or the default, no delay is used.",
                "type": "java.lang.String"
            },
            {
                "name": "timeout",
                "description": "Defines the timeout for the ajax request.",
                "type": "java.lang.Integer"
            },
            {
                "name": "accesskey",
                "description": "Access key that when pressed transfers focus to the button.",
                "type": "java.lang.String"
            },
            {
                "name": "alt",
                "description": "Alternate textual description of the button.",
                "type": "java.lang.String"
            },
            {
                "name": "dir",
                "description": "Direction indication for text that does not inherit directionality. Valid values are LTR and RTL.",
                "type": "java.lang.String"
            },
            {
                "name": "disabled",
                "description": "Disables the button.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "label",
                "description": "A localized user presentable name.",
                "type": "java.lang.String"
            },
            {
                "name": "lang",
                "description": "Code describing the language used in the generated markup.",
                "type": "java.lang.String"
            },
            {
                "name": "tabindex",
                "description": "Position of the button element in the tabbing order.",
                "type": "java.lang.String"
            },
            {
                "name": "title",
                "description": "Advisory tooltip information.",
                "type": "java.lang.String"
            },
            {
                "name": "type",
                "description": "Sets the behavior of the button. Default is submit.",
                "type": "java.lang.String"
            },
            {
                "name": "readonly",
                "description": "Flag indicating that this component will prevent changes by the user.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "style",
                "description": "Inline style of the button element.",
                "type": "java.lang.String"
            },
            {
                "name": "styleClass",
                "description": "Style class of the button element.",
                "type": "java.lang.String"
            },
            {
                "name": "onblur",
                "description": "Client side callback to execute when button loses focus.",
                "type": "java.lang.String"
            },
            {
                "name": "onchange",
                "description": "Client side callback to execute when button loses focus and its value has been modified since gaining focus.",
                "type": "java.lang.String"
            },
            {
                "name": "onclick",
                "description": "Client side callback to execute when button is clicked.",
                "type": "java.lang.String"
            },
            {
                "name": "ondblclick",
                "description": "Client side callback to execute when button is double clicked.",
                "type": "java.lang.String"
            },
            {
                "name": "onfocus",
                "description": "Client side callback to execute when button receives focus.",
                "type": "java.lang.String"
            },
            {
                "name": "onkeydown",
                "description": "Client side callback to execute when a key is pressed down over button.",
                "type": "java.lang.String"
            },
            {
                "name": "onkeypress",
                "description": "Client side callback to execute when a key is pressed and released over button.",
                "type": "java.lang.String"
            },
            {
                "name": "onkeyup",
                "description": "Client side callback to execute when a key is released over button.",
                "type": "java.lang.String"
            },
            {
                "name": "onmousedown",
                "description": "Client side callback to execute when a pointer button is pressed down over button.",
                "type": "java.lang.String"
            },
            {
                "name": "onmousemove",
                "description": "Client side callback to execute when a pointer button is moved within button.",
                "type": "java.lang.String"
            },
            {
                "name": "onmouseout",
                "description": "Client side callback to execute when a pointer button is moved away from button.",
                "type": "java.lang.String"
            },
            {
                "name": "onmouseover",
                "description": "Client side callback to execute when a pointer button is moved onto button.",
                "type": "java.lang.String"
            },
            {
                "name": "onmouseup",
                "description": "Client side callback to execute when a pointer button is released over button.",
                "type": "java.lang.String"
            },
            {
                "name": "onselect",
                "description": "Client side callback to execute when text within button is selected by user.",
                "type": "java.lang.String"
            },
            {
                "name": "icon",
                "description": "Icon of the button.",
                "type": "java.lang.String"
            },
            {
                "name": "iconPos",
                "description": "Position of the icon, default value is left.",
                "type": "java.lang.String"
            },
            {
                "name": "inline",
                "description": "Displays button inline instead of fitting the content width, only used by mobile.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "partialSubmit",
                "description": "When enabled, only values related to partially processed components would be serialized for ajax\n                instead of whole form.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "resetValues",
                "description": "If true, indicate that this particular Ajax transaction is a value reset transaction. This will cause resetValue() to be called on any EditableValueHolder instances encountered as a result of this ajax transaction. If not specified, or the value is false, no such indication is made.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "ignoreAutoUpdate",
                "description": "If true, components which use p:autoUpdate will not be updated for this request. If not specified, or the value is false, no such indication is made.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "appendTo",
                "description": "Appends the overlay to the element defined by search expression. Defaults to document body.",
                "type": "java.lang.String"
            },
            {
                "name": "partialSubmitFilter",
                "description": "Selector to use when partial submit is on, default is \":input\" to select all descendant inputs of a partially processed components.",
                "type": "java.lang.String"
            },
            {
                "name": "menuStyleClass",
                "description": "Style class of the overlay menu element.",
                "type": "java.lang.String"
            },
            {
                "name": "form",
                "description": "Form to serialize for an ajax request. Default is the enclosing form.",
                "type": "java.lang.String"
            },
            {
                "name": "model",
                "description": "A menu model instance to create the items of splitButton programmatically.",
                "type": "org.primefaces.model.menu.MenuModel"
            },
            {
                "name": "filter",
                "description": "Displays an input filter for the list. Default is false.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "filterMatchMode",
                "description": "Match mode for filtering, valid values are startsWith (default), contains, endsWith and custom.",
                "type": "java.lang.String"
            },
            {
                "name": "filterFunction",
                "description": "Client side function to use in custom filterMatchMode.",
                "type": "java.lang.String"
            },
            {
                "name": "filterPlaceholder",
                "description": "Watermark displayed in the filter input field before the user enters a value in an HTML5 browser.",
                "type": "java.lang.String"
            },
            {
                "name": "filterNormalize",
                "description": "Defines if filtering would be done using normalized values (accents will be removed from characters). Default is false.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "filterInputAutoFocus",
                "description": "Defines if filter input should receive focus when overlay popup is displayed. Default is true.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "ignoreComponentNotFound",
                "description": "If true, unresolvable components referenced in the update/process attribute are ignored. Default is 'false' and therefore a ComponentNotFoundException will be thrown.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "disableOnAjax",
                "description": "If true, the button will be disabled during Ajax requests triggered by the button or its menu items. Default is 'true'.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "ariaLabel",
                "description": "The aria-label attribute is used to define a string that labels the current element for accessibility.",
                "type": "java.lang.String"
            }
        ]
    },
    "p:spotlight": {
        "name": "p:spotlight",
        "description": "Spotlight highlights a certain component on page.",
        "attributes": [
            {
                "name": "id",
                "description": "Unique identifier of the component in a namingContainer.",
                "type": "java.lang.String"
            },
            {
                "name": "rendered",
                "description": "Boolean value to specify the rendering of the component, when set to false component will not be rendered.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "binding",
                "description": "An el expression referring to a server side UIComponent instance in a backing bean.",
                "type": "javax.faces.component.UIComponent"
            },
            {
                "name": "widgetVar",
                "description": "Name of the client side widget.",
                "type": "java.lang.String"
            },
            {
                "name": "target",
                "description": "Component to highlight.",
                "type": "java.lang.String"
            },
            {
                "name": "active",
                "description": "When true, spotlight is activated initially.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "blockScroll",
                "description": "Whether to block scrolling of the document when spotlight is active.",
                "type": "java.lang.Boolean"
            }
        ]
    },
    "p:stack": {
        "name": "p:stack",
        "description": "Stack is a navigation component that mimics the stacks feature in Mac OS X.",
        "attributes": [
            {
                "name": "id",
                "description": "Unique identifier of the component in a namingContainer.",
                "type": "java.lang.String"
            },
            {
                "name": "rendered",
                "description": "Boolean value to specify the rendering of the component, when set to false component will not be rendered.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "binding",
                "description": "An el expression referring to a server side UIComponent instance in a backing bean.",
                "type": "javax.faces.component.UIComponent"
            },
            {
                "name": "widgetVar",
                "description": "Name of the client side widget.",
                "type": "java.lang.String"
            },
            {
                "name": "model",
                "description": "MenuModel instance to create menus programmatically.",
                "type": "org.primefaces.model.menu.MenuModel"
            },
            {
                "name": "icon",
                "description": "An optional image to contain stacked items.",
                "type": "java.lang.String"
            },
            {
                "name": "openSpeed",
                "description": "Speed of the animation in milliseconds when opening the stack. Default is 300.",
                "type": "java.lang.Integer"
            },
            {
                "name": "closeSpeed",
                "description": "Speed of the animation in milliseconds when opening the stack. Default is 300.",
                "type": "java.lang.Integer"
            },
            {
                "name": "expanded",
                "description": "",
                "type": "java.lang.Boolean"
            }
        ]
    },
    "p:staticMessage": {
        "name": "p:staticMessage",
        "description": "Display a message without the use of a FacesMessage.",
        "attributes": [
            {
                "name": "id",
                "description": "Unique identifier of the component in a namingContainer.",
                "type": "java.lang.String"
            },
            {
                "name": "rendered",
                "description": "Boolean value to specify the rendering of the component, when set to false component will not be rendered.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "binding",
                "description": "An el expression referring to a server side UIComponent instance in a backing bean.",
                "type": "javax.faces.component.UIComponent"
            },
            {
                "name": "summary",
                "description": "The message summary.",
                "type": "java.lang.String"
            },
            {
                "name": "detail",
                "description": "The message detail.",
                "type": "java.lang.String"
            },
            {
                "name": "severity",
                "description": "The severity of the message: success, info, error, warn, fatal.",
                "type": "java.lang.String"
            },
            {
                "name": "display",
                "description": "Defines display mode, valid values are text, icon and both(default).",
                "type": "java.lang.String"
            },
            {
                "name": "escape",
                "description": "Defines whether html would be escaped or not, defaults to true.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "style",
                "description": "Style of main container element.",
                "type": "java.lang.String"
            },
            {
                "name": "styleClass",
                "description": "Style class of main container.",
                "type": "java.lang.String"
            },
            {
                "name": "closable",
                "description": "Adds a close icon to hide the message.",
                "type": "java.lang.Boolean"
            }
        ]
    },
    "p:steps": {
        "name": "p:steps",
        "description": "Steps is a menu component that displays steps of a workflow.",
        "attributes": [
            {
                "name": "id",
                "description": "Unique identifier of the component in a namingContainer.",
                "type": "java.lang.String"
            },
            {
                "name": "rendered",
                "description": "Boolean value to specify the rendering of the component, when set to false component will not be rendered.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "binding",
                "description": "An el expression referring to a server side UIComponent instance in a backing bean.",
                "type": "javax.faces.component.UIComponent"
            },
            {
                "name": "widgetVar",
                "description": "Name of the client side widget.",
                "type": "java.lang.String"
            },
            {
                "name": "model",
                "description": "MenuModel instance to create menus programmatically.",
                "type": "org.primefaces.model.menu.MenuModel"
            },
            {
                "name": "style",
                "description": "Style of main container element.",
                "type": "java.lang.String"
            },
            {
                "name": "styleClass",
                "description": "Style class of main container.",
                "type": "java.lang.String"
            },
            {
                "name": "activeIndex",
                "description": "Index of the active tab. Default is 0.",
                "type": "java.lang.Integer"
            },
            {
                "name": "activeStepExecutable",
                "description": "Allows the active index menu to remain executable. Default is false.",
                "type": "boolean"
            },
            {
                "name": "readonly",
                "description": "Defines whether items would be clickable or not. Default is true.",
                "type": "java.lang.Boolean"
            }
        ]
    },
    "p:sticky": {
        "name": "p:sticky",
        "description": "Sticky component positions other components as fixed so that these components stay in window viewport during scrolling.",
        "attributes": [
            {
                "name": "id",
                "description": "Unique identifier of the component in a namingContainer.",
                "type": "java.lang.String"
            },
            {
                "name": "rendered",
                "description": "Boolean value to specify the rendering of the component, when set to false component will not be rendered.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "binding",
                "description": "An el expression referring to a server side UIComponent instance in a backing bean.",
                "type": "javax.faces.component.UIComponent"
            },
            {
                "name": "widgetVar",
                "description": "Name of the client side widget.",
                "type": "java.lang.String"
            },
            {
                "name": "target",
                "description": "Identifier of the component(s) to make sticky.",
                "type": "java.lang.String"
            },
            {
                "name": "margin",
                "description": "Margin to the top of the page during fixed scrolling, default is 0.",
                "type": "java.lang.Integer"
            }
        ]
    },
    "p:submenu": {
        "name": "p:submenu",
        "description": "Submenu is nested in menu components and represents a sub menu items.",
        "attributes": [
            {
                "name": "id",
                "description": "Unique identifier of the component in a namingContainer.",
                "type": "java.lang.String"
            },
            {
                "name": "rendered",
                "description": "Boolean value to specify the rendering of the component, when set to false component will not be rendered.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "binding",
                "description": "An el expression referring to a server side UIComponent instance in a backing bean.",
                "type": "javax.faces.component.UIComponent"
            },
            {
                "name": "label",
                "description": "Label of the submenu header.",
                "type": "java.lang.String"
            },
            {
                "name": "disabled",
                "description": "Disables or enables the submenu.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "icon",
                "description": "Icon of a submenu, see menuitem to see how it is used.",
                "type": "java.lang.String"
            },
            {
                "name": "style",
                "description": "Inline style of the menu.",
                "type": "java.lang.String"
            },
            {
                "name": "styleClass",
                "description": "Style class of the submenu.",
                "type": "java.lang.String"
            },
            {
                "name": "expanded",
                "description": "Defines the state of the submenu.",
                "type": "java.lang.Boolean"
            }
        ]
    },
    "p:subTable": {
        "name": "p:subTable",
        "description": "SubTable is a helper component of datatable used for grouping.",
        "attributes": [
            {
                "name": "id",
                "description": "Unique identifier of the component in a namingContainer.",
                "type": "java.lang.String"
            },
            {
                "name": "rendered",
                "description": "Boolean value to specify the rendering of the component, when set to false component will not be rendered.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "binding",
                "description": "An el expression referring to a server side UIComponent instance in a backing bean.",
                "type": "javax.faces.component.UIComponent"
            },
            {
                "name": "value",
                "description": "Datasource of the component.",
                "type": "java.lang.Object"
            },
            {
                "name": "var",
                "description": "Name of the iterator variable that references each element in the data set.",
                "type": "String"
            },
            {
                "name": "rows",
                "description": "Number of rows to display per page. Default value is 0 meaning to display all data available.",
                "type": "java.lang.Integer"
            },
            {
                "name": "first",
                "description": "Index of the first data to display.",
                "type": "java.lang.Integer"
            }
        ]
    },
    "p:summaryRow": {
        "name": "p:summaryRow",
        "description": "SummaryRow is a helper component for data grouping.",
        "attributes": [
            {
                "name": "id",
                "description": "Unique identifier of the component in a namingContainer.",
                "type": "java.lang.String"
            },
            {
                "name": "rendered",
                "description": "Boolean value to specify the rendering of the component, when set to false component will not be rendered.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "binding",
                "description": "An el expression referring to a server side UIComponent instance in a backing bean.",
                "type": "javax.faces.component.UIComponent"
            },
            {
                "name": "listener",
                "description": "Method expression to execute before rendering summary row. (e.g. to calculate totals)",
                "type": "javax.el.MethodExpression"
            }
        ]
    },
    "p:tab": {
        "name": "p:tab",
        "description": "Tab is a generic container component used by other PrimeFaces components such as tabView or accordionPanel.",
        "attributes": [
            {
                "name": "id",
                "description": "Unique identifier of the component in a namingContainer.",
                "type": "java.lang.String"
            },
            {
                "name": "rendered",
                "description": "Boolean value to specify the rendering of the component, when set to false component will not be rendered.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "binding",
                "description": "An el expression referring to a server side UIComponent instance in a backing bean.",
                "type": "javax.faces.component.UIComponent"
            },
            {
                "name": "title",
                "description": "Title text of the tab.",
                "type": "java.lang.String"
            },
            {
                "name": "titleStyle",
                "description": "Title container inner style.",
                "type": "java.lang.String"
            },
            {
                "name": "titleStyleClass",
                "description": "Title container style class.",
                "type": "java.lang.String"
            },
            {
                "name": "disabled",
                "description": "Disables tab element if true.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "closable",
                "description": "Makes the tab closable by displaying a close icon.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "titletip",
                "description": "Tooltip of the tab header.",
                "type": "java.lang.String"
            },
            {
                "name": "ariaLabel",
                "description": "The aria-label attribute is used to define a string that labels the current element for accessibility.",
                "type": "java.lang.String"
            },
            {
                "name": "menuTitle",
                "description": "Title attribute for menu element on tab header.",
                "type": "java.lang.String"
            }
        ]
    },
    "p:tabMenu": {
        "name": "p:tabMenu",
        "description": "TabMenu is a menu component that displays menuitems as tabs.",
        "attributes": [
            {
                "name": "id",
                "description": "Unique identifier of the component in a namingContainer.",
                "type": "java.lang.String"
            },
            {
                "name": "rendered",
                "description": "Boolean value to specify the rendering of the component, when set to false component will not be rendered.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "binding",
                "description": "An el expression referring to a server side UIComponent instance in a backing bean.",
                "type": "javax.faces.component.UIComponent"
            },
            {
                "name": "widgetVar",
                "description": "Name of the client side widget.",
                "type": "java.lang.String"
            },
            {
                "name": "model",
                "description": "MenuModel instance to create menus programmatically.",
                "type": "org.primefaces.model.menu.MenuModel"
            },
            {
                "name": "style",
                "description": "Style of main container element.",
                "type": "java.lang.String"
            },
            {
                "name": "styleClass",
                "description": "Style class of main container.",
                "type": "java.lang.String"
            },
            {
                "name": "activeIndex",
                "description": "Index of the active tab. Default is 0.",
                "type": "java.lang.Integer"
            },
            {
                "name": "orientation",
                "description": "Orientation of the tab items relative to where you want to put the content, valid values are \"top\" (default), \"left\", \"right\" and \"bottom\".",
                "type": "java.lang.String"
            }
        ]
    },
    "p:tabView": {
        "name": "p:tabView",
        "description": "TabView is a tabbed panel component featuring client side tabs, dynamic content loading with ajax and content transition effects.",
        "attributes": [
            {
                "name": "id",
                "description": "Unique identifier of the component in a namingContainer.",
                "type": "java.lang.String"
            },
            {
                "name": "rendered",
                "description": "Boolean value to specify the rendering of the component, when set to false component will not be rendered.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "binding",
                "description": "An el expression referring to a server side UIComponent instance in a backing bean.",
                "type": "javax.faces.component.UIComponent"
            },
            {
                "name": "widgetVar",
                "description": "Name of the client side widget.",
                "type": "java.lang.String"
            },
            {
                "name": "activeIndex",
                "description": "Index of the active tab. Default is 0.",
                "type": "java.lang.Integer"
            },
            {
                "name": "effect",
                "description": "Name of the transition effect.",
                "type": "java.lang.String"
            },
            {
                "name": "effectDuration",
                "description": "Duration of the transition effect. Default is normal.",
                "type": "java.lang.String"
            },
            {
                "name": "dynamic",
                "description": "Specifies the toggleMode. Default is false.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "cache",
                "description": "When tab contents are lazy loaded by ajax toggleMode,\n                caching only retrieves the tab contents once and subsequent toggles of a cached tab does not communicate with server.\n                If caching is turned off, tab contents are reloaded from server each time tab is clicked. Default is true.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "onTabChange",
                "description": "Client side callback to execute when a tab is clicked.",
                "type": "java.lang.String"
            },
            {
                "name": "onTabShow",
                "description": "Client side callback to execute when a tab is shown.",
                "type": "java.lang.String"
            },
            {
                "name": "style",
                "description": "Inline style of the main container.",
                "type": "java.lang.String"
            },
            {
                "name": "styleClass",
                "description": "Style class of the main container.",
                "type": "java.lang.String"
            },
            {
                "name": "var",
                "description": "Name of collection iterator to use in dynamic number of tabs.",
                "type": "String"
            },
            {
                "name": "varStatus",
                "description": "Name of the exported request scoped variable for the status of the iteration.",
                "type": "java.lang.String"
            },
            {
                "name": "value",
                "description": "List to iterate to display dynamic number of tabs.",
                "type": "java.util.List"
            },
            {
                "name": "orientation",
                "description": "Orientation of the tab headers, valid values are \"top\" (default), \"left\", \"right\" and \"bottom\".",
                "type": "java.lang.String"
            },
            {
                "name": "onTabClose",
                "description": "Client side callback to execute before a tab is closed. Return false to prevent closing.",
                "type": "java.lang.String"
            },
            {
                "name": "dir",
                "description": "Defines text direction, valid values are \"ltr\" (default) and \"rtl\".",
                "type": "java.lang.String"
            },
            {
                "name": "scrollable",
                "description": "When enabled, tab headers can be scrolled horizontally instead of wrapping. Default is false.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "prependId",
                "description": "AccordionPanel is a naming container thus prepends its id to its children by default, a false value turns this behavior off except for dynamic tabs.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "tabindex",
                "description": "Position of the element in the tabbing order.",
                "type": "java.lang.String"
            },
            {
                "name": "touchable",
                "description": "Enable touch support if browser detection supports it. Default is false because it is globally enabled by default.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "multiViewState",
                "description": "Whether to keep TabView state across views, defaults to false.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "focusOnError",
                "description": "Whether to focus the first tab that contains an error after form submission. Default is false.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "focusOnLastActiveTab",
                "description": "Whether to focus on the last active tab that a user selected. Default is false.",
                "type": "java.lang.Boolean"
            }
        ]
    },
    "p:tagCloud": {
        "name": "p:tagCloud",
        "description": "TagCloud displays a collection of tag with different strengths.",
        "attributes": [
            {
                "name": "id",
                "description": "Unique identifier of the component in a namingContainer.",
                "type": "java.lang.String"
            },
            {
                "name": "rendered",
                "description": "Boolean value to specify the rendering of the component, when set to false component will not be rendered.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "binding",
                "description": "An el expression referring to a server side UIComponent instance in a backing bean.",
                "type": "javax.faces.component.UIComponent"
            },
            {
                "name": "widgetVar",
                "description": "Name of the client side widget.",
                "type": "java.lang.String"
            },
            {
                "name": "model",
                "description": "",
                "type": "org.primefaces.model.tagcloud.TagCloudModel"
            },
            {
                "name": "style",
                "description": "",
                "type": "java.lang.String"
            },
            {
                "name": "styleClass",
                "description": "",
                "type": "java.lang.String"
            }
        ]
    },
    "p:terminal": {
        "name": "p:terminal",
        "description": "Terminal is an ajax powered component bringing desktop command-line tools to the web.",
        "attributes": [
            {
                "name": "id",
                "description": "Unique identifier of the component in a namingContainer.",
                "type": "java.lang.String"
            },
            {
                "name": "rendered",
                "description": "Boolean value to specify the rendering of the component, when set to false component will not be rendered.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "binding",
                "description": "An el expression referring to a server side UIComponent instance in a backing bean.",
                "type": "javax.faces.component.UIComponent"
            },
            {
                "name": "widgetVar",
                "description": "Name of the client side widget.",
                "type": "java.lang.String"
            },
            {
                "name": "style",
                "description": "Inline style of the component.",
                "type": "java.lang.String"
            },
            {
                "name": "styleClass",
                "description": "Style class of the component.",
                "type": "java.lang.String"
            },
            {
                "name": "welcomeMessage",
                "description": "Welcome message to be displayed on initial load.",
                "type": "java.lang.String"
            },
            {
                "name": "prompt",
                "description": "Primary prompt text.",
                "type": "java.lang.String"
            },
            {
                "name": "commandHandler",
                "description": "Method to execute by passing command and the arguments.",
                "type": "javax.el.MethodExpression"
            },
            {
                "name": "autoCompleteModel",
                "description": "TerminalAutoCompleteModel instance that represents the commands and arguments used for autocompletion.",
                "type": "org.primefaces.model.terminal.TerminalAutoCompleteModel"
            },
            {
                "name": "escape",
                "description": "Defines if the terminal is escaped or not.",
                "type": "java.lang.Boolean"
            }
        ]
    },
    "p:textEditor": {
        "name": "p:textEditor",
        "description": "Editor is an input component with rich text editing capabilities.",
        "attributes": [
            {
                "name": "id",
                "description": "Unique identifier of the component in a namingContainer.",
                "type": "java.lang.String"
            },
            {
                "name": "rendered",
                "description": "Boolean value to specify the rendering of the component, when set to false component will not be rendered.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "binding",
                "description": "An el expression referring to a server side UIComponent instance in a backing bean.",
                "type": "javax.faces.component.UIComponent"
            },
            {
                "name": "value",
                "description": "Value of the component.",
                "type": "java.lang.Object"
            },
            {
                "name": "converter",
                "description": "An el expression or a literal text that defines a converter for the component. When it's an EL expression, it's resolved to a converter instance.\n    In case it's a static text, it must refer to a converter id.",
                "type": "javax.faces.convert.Converter"
            },
            {
                "name": "immediate",
                "description": "When set true, process validations logic is executed at apply request values phase for this component. Default is false.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "required",
                "description": "Marks component as required.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "validator",
                "description": "A method expression referring to a method validating the input.",
                "type": "javax.faces.validator.Validator"
            },
            {
                "name": "valueChangeListener",
                "description": "A method binding expression referring to a method for handling a valuchangeevent.",
                "type": "javax.faces.event.ValueChangeListener"
            },
            {
                "name": "requiredMessage",
                "description": "Message to display when required field validation fails.",
                "type": "java.lang.String"
            },
            {
                "name": "converterMessage",
                "description": "Message to display when conversion fails.",
                "type": "java.lang.String"
            },
            {
                "name": "validatorMessage",
                "description": "Message to display when validation fails.",
                "type": "java.lang.String"
            },
            {
                "name": "widgetVar",
                "description": "Name of the client side widget.",
                "type": "java.lang.String"
            },
            {
                "name": "height",
                "description": "Height of the editor.",
                "type": "java.lang.String"
            },
            {
                "name": "readonly",
                "description": "Whether to instantiate the editor to read-only mode.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "disabled",
                "description": "Disables the editor, default is false.",
                "type": "boolean"
            },
            {
                "name": "style",
                "description": "Inline style of the editor container.",
                "type": "java.lang.String"
            },
            {
                "name": "styleClass",
                "description": "Style class of the editor container.",
                "type": "java.lang.String"
            },
            {
                "name": "placeholder",
                "description": "Placeholder text to show when editor is empty..",
                "type": "java.lang.String"
            },
            {
                "name": "toolbarVisible",
                "description": "Whether the toolbar of the editor is visible.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "secure",
                "description": "Secure the component with the HTML Sanitizer library on the classpath. Default is true.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "allowFormatting",
                "description": "Whether to allow formatting to be included.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "allowBlocks",
                "description": "Whether to allow blocks to be included.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "allowStyles",
                "description": "Whether to allow styles to be included.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "allowLinks",
                "description": "Whether to allow links to be included.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "allowImages",
                "description": "Whether to allow images to be included.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "formats",
                "description": "Define a list of formats to allow in the editor. By default all formats are allowed.",
                "type": "java.util.List"
            }
        ]
    },
    "p:tieredMenu": {
        "name": "p:tieredMenu",
        "description": "TieredMenu displays submenus in overlays.",
        "attributes": [
            {
                "name": "id",
                "description": "Unique identifier of the component in a namingContainer.",
                "type": "java.lang.String"
            },
            {
                "name": "rendered",
                "description": "Boolean value to specify the rendering of the component, when set to false component will not be rendered.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "binding",
                "description": "An el expression referring to a server side UIComponent instance in a backing bean.",
                "type": "javax.faces.component.UIComponent"
            },
            {
                "name": "widgetVar",
                "description": "Name of the client side widget.",
                "type": "java.lang.String"
            },
            {
                "name": "model",
                "description": "MenuModel instance to create menus programmatically.",
                "type": "org.primefaces.model.menu.MenuModel"
            },
            {
                "name": "style",
                "description": "Inline style of the component.",
                "type": "java.lang.String"
            },
            {
                "name": "styleClass",
                "description": "Style class of the component.",
                "type": "java.lang.String"
            },
            {
                "name": "autoDisplay",
                "description": "Defines whether the first level of submenus will be displayed on mouseover or not.\n                When set to false, click event is required to display.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "trigger",
                "description": "Id of component whose click event will show the dynamic positioned menu.",
                "type": "java.lang.String"
            },
            {
                "name": "my",
                "description": "Corner of menu to align with trigger element.",
                "type": "java.lang.String"
            },
            {
                "name": "at",
                "description": "Corner of trigger to align with menu element.",
                "type": "java.lang.String"
            },
            {
                "name": "overlay",
                "description": "Defines positioning, when enabled menu is displayed with absolute positioning relative to the trigger.\n                Default is false, meaning static positioning.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "triggerEvent",
                "description": "Event name of component that will show the dynamic positioned menu. Default is click.",
                "type": "java.lang.String"
            },
            {
                "name": "toggleEvent",
                "description": "Event to toggle the submenus, default is hover. Valid values are \"hover\" and \"click\".",
                "type": "java.lang.String"
            },
            {
                "name": "showDelay",
                "description": "Delay in milliseconds before displaying the submenu. Default is 0 meaning immediate.",
                "type": "java.lang.Integer"
            },
            {
                "name": "hideDelay",
                "description": "Delay in milliseconds before hiding the submenu., if 0 not hidden until document.click(). Default is 0.",
                "type": "java.lang.Integer"
            },
            {
                "name": "dir",
                "description": "Defines text direction, valid values are \"ltr\" (default) and \"rtl\".",
                "type": "java.lang.String"
            }
        ]
    },
    "p:timeline": {
        "name": "p:timeline",
        "description": "Timeline is an interactive visualization chart to visualize events in time.",
        "attributes": [
            {
                "name": "id",
                "description": "Unique identifier of the component in a namingContainer.",
                "type": "java.lang.String"
            },
            {
                "name": "rendered",
                "description": "Boolean value to specify the rendering of the component, when set to false component will not be rendered.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "binding",
                "description": "An el expression referring to a server side UIComponent instance in a backing bean.",
                "type": "javax.faces.component.UIComponent"
            },
            {
                "name": "widgetVar",
                "description": "Name of the client side widget.",
                "type": "java.lang.String"
            },
            {
                "name": "style",
                "description": "Inline style of the container element.",
                "type": "java.lang.String"
            },
            {
                "name": "styleClass",
                "description": "Style class of the container element.",
                "type": "java.lang.String"
            },
            {
                "name": "var",
                "description": "Name of the request-scoped variable for underlaying object in the TimelineEvent for each iteration.",
                "type": "String"
            },
            {
                "name": "value",
                "description": "An instance of TimelineModel representing the backing model.",
                "type": "org.primefaces.model.timeline.TimelineModel"
            },
            {
                "name": "varGroup",
                "description": "Name of the request-scoped variable for underlaying object in the TimelineGroup for each iteration.",
                "type": "java.lang.String"
            },
            {
                "name": "locale",
                "description": "User locale for i18n localization messages. The attribute can be either a String or java.util.Locale object. Default to view Locale.",
                "type": "java.lang.Object"
            },
            {
                "name": "timeZone",
                "description": "Target time zone to convert start / end dates of TimelineEvent's in server side. The attribute can be either a String or TimeZone object or null.\n                If null, timeZone defaults to the server's time zone the application is running in.",
                "type": "java.lang.Object"
            },
            {
                "name": "clientTimeZone",
                "description": "Time zone the user would like to see dates in UI. The attribute can be either a String or TimeZone object or null.\n                If null, clientTimeZone defaults to browser's time zone.",
                "type": "java.lang.String"
            },
            {
                "name": "height",
                "description": "The height of the timeline in pixels or as a percentage. When height is undefined or null, the height of the timeline is automatically\n                adjusted to fit the contents. It is possible to set a maximum height using option maxHeight to prevent the timeline from getting too high in\n                case of automatically calculated height.",
                "type": "java.lang.String"
            },
            {
                "name": "minHeight",
                "description": "Specifies a minimum height for the Timeline in pixels.",
                "type": "java.lang.Integer"
            },
            {
                "name": "maxHeight",
                "description": "Specifies the maximum height for the Timeline in pixels.",
                "type": "java.lang.Integer"
            },
            {
                "name": "horizontalScroll",
                "description": "Specifies the horizontal scrollable.Default is \"false\".",
                "type": "java.lang.Boolean"
            },
            {
                "name": "verticalScroll",
                "description": "Specifies the vertical scrollable.Default is \"false\".",
                "type": "java.lang.Boolean"
            },
            {
                "name": "width",
                "description": "The width of the timeline in pixels or as a percentage. Default is \"100%\".",
                "type": "java.lang.String"
            },
            {
                "name": "responsive",
                "description": "Check if the timeline container is resized, and if so, resize the timeline.\n                Useful when the webpage (browser window) or a layout pane / unit containing the timeline component is resized. Default is true.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "orientationAxis",
                "description": "Orientation of the timeline axis: 'top', 'bottom' (default), 'both', or 'none'. If orientation is 'bottom', the time axis is drawn\n                at the bottom. When 'top', the axis is drawn on top. When 'both', two axes are drawn, both on top and at the bottom. In case of 'none', no axis\n                is drawn at all.",
                "type": "java.lang.String"
            },
            {
                "name": "orientationItem",
                "description": "Orientation of the timeline items: 'top' or 'bottom' (default). Determines whether items are aligned to the top or bottom\n                of the Timeline.",
                "type": "java.lang.String"
            },
            {
                "name": "editable",
                "description": "If true, the items in the timeline can be manipulated. Only applicable when option selectable is true. Default is false.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "editableAdd",
                "description": "If true, new items can be created by double tapping an empty space in the Timeline. Takes precedence over editable.\n                Default is false.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "editableRemove",
                "description": "If true, items can be deleted by first selecting them, and then clicking the delete button on the top right of the item.\n                Takes precedence over editable. Default is false.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "editableGroup",
                "description": "If true, items can be dragged from one group to another. Only applicable when the Timeline has groups.\n                Takes precedence over editable. Default is false.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "editableTime",
                "description": "If true, items can be dragged to another moment in time. Takes precedence over editable. Default is false.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "editableOverrideItems",
                "description": "If true, TimelineEvent specific editables properties are overridden by timeline settings. Default is false.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "selectable",
                "description": "If true, events on the timeline are selectable. Selectable events can fire AJAX \"select\" events. Default is true.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "zoomable",
                "description": "If true, the timeline is zoomable. When the timeline is zoomed, AJAX \"rangechange\" events are fired. Default is true.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "moveable",
                "description": "If true, the timeline is movable. When the timeline is moved, AJAX \"rangechange\" events are fired. Default is true.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "start",
                "description": "The initial start date for the axis of the timeline. If not provided, the earliest date present in the events is taken as start date. Default is null.",
                "type": "java.time.LocalDateTime"
            },
            {
                "name": "end",
                "description": "The initial end date for the axis of the timeline. If not provided, the latest date present in the events is taken as end date. Default is null.",
                "type": "java.time.LocalDateTime"
            },
            {
                "name": "min",
                "description": "Set a minimum Date for the visible range. It will not be possible to move beyond this minimum. Default is null.",
                "type": "java.time.LocalDateTime"
            },
            {
                "name": "max",
                "description": "Set a maximum Date for the visible range. It will not be possible to move beyond this maximum. Default is null.",
                "type": "java.time.LocalDateTime"
            },
            {
                "name": "zoomKey",
                "description": "Specifies whether the Timeline is only zoomed when an additional key is down. Available values are '' (does not apply), 'altKey', 'ctrlKey', 'shiftKey' or 'metaKey'. Only applicable when option moveable is set true.",
                "type": "java.lang.String"
            },
            {
                "name": "zoomMin",
                "description": "Set a minimum zoom interval for the visible range in milliseconds. It will not be possible to zoom in further than this minimum. Default is 10.",
                "type": "java.lang.Long"
            },
            {
                "name": "zoomMax",
                "description": "Set a maximum zoom interval for the visible range in milliseconds. It will not be possible to zoom out further than this maximum. Default value equals 315360000000000 ms (about 10000 years).",
                "type": "java.lang.Long"
            },
            {
                "name": "preloadFactor",
                "description": "Preload factor is a positive float value or 0 which can be used for lazy loading of events. When the lazy loading feature is active, the calculated time range for preloading will be multiplicated by the preload factor. The result of this multiplication specifies the additional time range which will be considered for the preloading during moving / zooming too. For example, if the calculated time range for preloading is 5 days and the preload factor is 0.2, the result is 5 * 0.2 = 1 day. That means, 1 day backwards and / or 1 day onwards will be added to the original calculated time range. The event's area to be preloaded is wider then. This helps to avoid frequently, time-consuming fetching of events. Default value is 0.",
                "type": "java.lang.Float"
            },
            {
                "name": "eventMargin",
                "description": "The minimal margin in pixels between events. Default is 10.",
                "type": "java.lang.Integer"
            },
            {
                "name": "eventHorizontalMargin",
                "description": "The minimal horizontal margin in pixels between items. Takes precedence over eventMargin property. Default is 10.",
                "type": "java.lang.Integer"
            },
            {
                "name": "eventVerticalMargin",
                "description": "The minimal vertical margin in pixels between items. Takes precedence over eventMargin property. Default is 10.",
                "type": "java.lang.Integer"
            },
            {
                "name": "eventMarginAxis",
                "description": "The minimal margin in pixels between events and the horizontal axis. Default is 10.",
                "type": "java.lang.Integer"
            },
            {
                "name": "eventStyle",
                "description": "Specifies the default type for the timeline items. Choose from 'box', 'point' and 'range'. If undefined, the Timeline will auto detect\n                the type from the items data: if a start and end date is available, a 'range' will be created, and else, a 'box' is created. Default null.",
                "type": "java.lang.String"
            },
            {
                "name": "groupsOrder",
                "description": "Allows to customize the way groups are ordered. When true (default), groups will be ordered by content alphabetically\n                (when the list of groups is missing) or by native ordering of TimelineGroup object in the list of groups (when the list of groups is available).\n                When false, groups will not be ordered at all.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "groupStyle",
                "description": "A css text string to apply custom styling for an individual group label, for example \"color: red; background-color: pink;\".",
                "type": "java.lang.String"
            },
            {
                "name": "snap",
                "description": "When moving items on the Timeline, they will be snapped to nice dates like full hours or days, depending on the current scale.\n                The snap function can be replaced with a custom javascript function, or can be set to null to disable snapping.\n                The signature of the snap function is:\n\n                function snap(date: Date, scale: string, step: number) : Date or number\n\n                The parameter scale can be can be 'millisecond', 'second', 'minute', 'hour', 'weekday, 'week', 'day, 'month, or 'year'.\n                The parameter step is a number like 1, 2, 4, 5.",
                "type": "java.lang.String"
            },
            {
                "name": "stackEvents",
                "description": "If true, the events are stacked above each other to prevent overlapping events. Default is true.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "showCurrentTime",
                "description": "If true, the timeline shows a red, vertical line displaying the current time. Default is true.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "showMajorLabels",
                "description": "By default, the timeline shows both minor and major date labels on the horizontal axis.\n                For example the minor labels show minutes and the major labels show hours. When \"showMajorLabels\" is false, no major labels are shown.\n                Default is true.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "showMinorLabels",
                "description": "By default, the timeline shows both minor and major date labels on the horizontal axis.\n                For example the minor labels show minutes and the major labels show hours. When \"showMinorLabels\" is false, no minor labels are shown.\n                When both \"showMajorLabels\" and \"showMinorLabels\" are false, no horizontal axis will be visible. Default is true.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "showNested",
                "description": "By default, the timeline shows nested groups without collapsed. When \"showNested\" is false, all nested groups shown as collapsed.\n                If \"showNested\" is set different in TimelineGroup model, it will override this. Default is true.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "timeChangeable",
                "description": "Deprecated, use editableTime property instead.\n                If false, items can not be moved or dragged horizontally (neither start time nor end time is changable).\n                This is useful when items should be editable but can only be changed regarding group or content (typical use case: scheduling events).\n                Default is true.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "dropHoverStyleClass",
                "description": "Style class to apply when an acceptable draggable is dragged over. Default is null.",
                "type": "java.lang.String"
            },
            {
                "name": "dropActiveStyleClass",
                "description": "Style class to apply when an acceptable draggable is being dragged over. Default is null.",
                "type": "java.lang.String"
            },
            {
                "name": "dropAccept",
                "description": "Selector to define the accepted draggables. Default is null.",
                "type": "java.lang.String"
            },
            {
                "name": "dropScope",
                "description": "Scope key to match draggables and droppables. Default is null.",
                "type": "java.lang.String"
            },
            {
                "name": "clickToUse",
                "description": "When a Timeline is configured to be clickToUse, it will react to mouse and touch events only when active. When active, a blue shadow\n                border is displayed around the Timeline. The Timeline is set active by clicking on it, and is changed to inactive again by clicking outside\n                the Timeline or by pressing the ESC key. Default is false.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "showTooltips",
                "description": "If true, items with titles will display a tooltip. If false, item tooltips are prevented from showing. Default is true.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "tooltipFollowMouse",
                "description": "If true, tooltips will follow the mouse as they move around in the item. Default is false.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "tooltipOverflowMethod",
                "description": "Set how the tooltip should act if it is about to overflow out of the timeline.\n                    Choose from 'cap', 'flip' and 'none'.\n                    If it is set to 'cap', the tooltip will just cap its position to inside to timeline.\n                    If set to 'flip', the position of the tooltip will flip around the cursor so that a corner is at the cursor, and the rest of it is visible.\n                    If set to 'none', the tooltip will be positioned independently of the timeline, so parts of the tooltip could possibly be hidden or stick\n                    ouf of the timeline, depending how CSS overflow is defined for the timeline (by default it's hidden). Default is 'flip'.",
                "type": "java.lang.String"
            },
            {
                "name": "tooltipDelay",
                "description": "Set a value (in ms) that the tooltip is delayed before showing. Default is 500.",
                "type": "java.lang.Integer"
            },
            {
                "name": "dir",
                "description": "Defines direction of timeline. Valid values are \"ltr\" (default) and \"rtl\".",
                "type": "java.lang.String"
            },
            {
                "name": "extender",
                "description": "Name of javascript function to extend the options of the underlying timeline javascript component.",
                "type": "java.lang.String"
            }
        ]
    },
    "p:toggleSwitch": {
        "name": "p:toggleSwitch",
        "description": "ToggleSwitch is used to select a boolean value.",
        "attributes": [
            {
                "name": "id",
                "description": "Unique identifier of the component in a namingContainer.",
                "type": "java.lang.String"
            },
            {
                "name": "rendered",
                "description": "Boolean value to specify the rendering of the component, when set to false component will not be rendered.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "binding",
                "description": "An el expression referring to a server side UIComponent instance in a backing bean.",
                "type": "javax.faces.component.UIComponent"
            },
            {
                "name": "value",
                "description": "Value of the component.",
                "type": "java.lang.Object"
            },
            {
                "name": "converter",
                "description": "An el expression or a literal text that defines a converter for the component. When it's an EL expression, it's resolved to a converter instance.\n    In case it's a static text, it must refer to a converter id.",
                "type": "javax.faces.convert.Converter"
            },
            {
                "name": "immediate",
                "description": "When set true, process validations logic is executed at apply request values phase for this component. Default is false.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "required",
                "description": "Marks component as required.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "validator",
                "description": "A method expression referring to a method validating the input.",
                "type": "javax.faces.validator.Validator"
            },
            {
                "name": "valueChangeListener",
                "description": "A method binding expression referring to a method for handling a valuchangeevent.",
                "type": "javax.faces.event.ValueChangeListener"
            },
            {
                "name": "requiredMessage",
                "description": "Message to display when required field validation fails.",
                "type": "java.lang.String"
            },
            {
                "name": "converterMessage",
                "description": "Message to display when conversion fails.",
                "type": "java.lang.String"
            },
            {
                "name": "validatorMessage",
                "description": "Message to display when validation fails.",
                "type": "java.lang.String"
            },
            {
                "name": "widgetVar",
                "description": "Name of the client side widget.",
                "type": "java.lang.String"
            },
            {
                "name": "label",
                "description": "User presentable name.",
                "type": "java.lang.String"
            },
            {
                "name": "ariaLabel",
                "description": "The aria-label attribute is used to define a string that labels the current element for accessibility.",
                "type": "java.lang.String"
            },
            {
                "name": "disabled",
                "description": "Disables or enables the switch.",
                "type": "boolean"
            },
            {
                "name": "readonly",
                "description": "Flag indicating that this component will prevent changes by the user.",
                "type": "boolean"
            },
            {
                "name": "onchange",
                "description": "Client side callback to execute on value change event.",
                "type": "java.lang.String"
            },
            {
                "name": "style",
                "description": "Inline style of the main container.",
                "type": "java.lang.String"
            },
            {
                "name": "styleClass",
                "description": "Style class of the main container.",
                "type": "java.lang.String"
            },
            {
                "name": "tabindex",
                "description": "The tabindex attribute specifies the tab order of an element when the \"tab\" button is used for navigating.",
                "type": "java.lang.String"
            },
            {
                "name": "onfocus",
                "description": "Client side callback to execute when component receives focus.",
                "type": "java.lang.String"
            },
            {
                "name": "onblur",
                "description": "Client side callback to execute when component loses focus.",
                "type": "java.lang.String"
            },
            {
                "name": "onIcon",
                "description": "The icon representing the \"On\" position.",
                "type": "java.lang.String"
            },
            {
                "name": "offIcon",
                "description": "The icon representing the \"Off\" position.",
                "type": "java.lang.String"
            }
        ]
    },
    "p:toolbar": {
        "name": "p:toolbar",
        "description": "Toolbar is a horizontal grouping component for commands and other content.",
        "attributes": [
            {
                "name": "id",
                "description": "Unique identifier of the component in a namingContainer.",
                "type": "java.lang.String"
            },
            {
                "name": "rendered",
                "description": "Boolean value to specify the rendering of the component, when set to false component will not be rendered.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "binding",
                "description": "An el expression referring to a server side UIComponent instance in a backing bean.",
                "type": "javax.faces.component.UIComponent"
            },
            {
                "name": "style",
                "description": "Inline style of the container element.",
                "type": "java.lang.String"
            },
            {
                "name": "styleClass",
                "description": "Style class of the container element.",
                "type": "java.lang.String"
            }
        ]
    },
    "p:toolbarGroup": {
        "name": "p:toolbarGroup",
        "description": "ToolbarbarGroup is a helper component for Toolbar component to define placeholders.",
        "attributes": [
            {
                "name": "id",
                "description": "Unique identifier of the component in a namingContainer.",
                "type": "java.lang.String"
            },
            {
                "name": "rendered",
                "description": "Boolean value to specify the rendering of the component, when set to false component will not be rendered.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "binding",
                "description": "An el expression referring to a server side UIComponent instance in a backing bean.",
                "type": "javax.faces.component.UIComponent"
            },
            {
                "name": "align",
                "description": "Defines the alignment within toolbar, valid values are left and right. Default is left.",
                "type": "java.lang.String"
            },
            {
                "name": "style",
                "description": "Inline style of the container element.",
                "type": "java.lang.String"
            },
            {
                "name": "styleClass",
                "description": "Style class of the container element.",
                "type": "java.lang.String"
            }
        ]
    },
    "p:tooltip": {
        "name": "p:tooltip",
        "description": "Tooltip goes beyond the legacy html title attribute by providing custom effects, events, html content and advance theme support.",
        "attributes": [
            {
                "name": "id",
                "description": "Unique identifier of the component in a namingContainer.",
                "type": "java.lang.String"
            },
            {
                "name": "rendered",
                "description": "Boolean value to specify the rendering of the component, when set to false component will not be rendered.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "binding",
                "description": "An el expression referring to a server side UIComponent instance in a backing bean.",
                "type": "javax.faces.component.UIComponent"
            },
            {
                "name": "value",
                "description": "Value of the component.",
                "type": "java.lang.Object"
            },
            {
                "name": "converter",
                "description": "An el expression or a literal text that defines a converter for the component. When it's an EL expression, it's resolved to a converter instance.\n    In case it's a static text, it must refer to a converter id.",
                "type": "javax.faces.convert.Converter"
            },
            {
                "name": "widgetVar",
                "description": "Name of the client side widget.",
                "type": "java.lang.String"
            },
            {
                "name": "showEvent",
                "description": "Event displaying the tooltip. Default is mouseover.",
                "type": "java.lang.String"
            },
            {
                "name": "showEffect",
                "description": "Effect to be used for displaying. Default is fade.",
                "type": "java.lang.String"
            },
            {
                "name": "showDelay",
                "description": "Delay time to show tooltip in milliseconds. Default is 150.",
                "type": "java.lang.Integer"
            },
            {
                "name": "hideEvent",
                "description": "Event hiding the tooltip. Default is mouseout.",
                "type": "java.lang.String"
            },
            {
                "name": "hideEffect",
                "description": "Effect to be used for hiding. Default is fade.",
                "type": "java.lang.String"
            },
            {
                "name": "hideDelay",
                "description": "Delay time to hide tooltip in milliseconds. Default is 0",
                "type": "java.lang.Integer"
            },
            {
                "name": "for",
                "description": "Id of the component to attach the tooltip.",
                "type": "java.lang.String"
            },
            {
                "name": "style",
                "description": "Inline style of the tooltip.",
                "type": "java.lang.String"
            },
            {
                "name": "styleClass",
                "description": "Style class of the tooltip.",
                "type": "java.lang.String"
            },
            {
                "name": "globalSelector",
                "description": "jquery selector for global tooltip, default is \"a,:input,:button\".",
                "type": "java.lang.String"
            },
            {
                "name": "escape",
                "description": "Defines whether html would be escaped or not, defaults to true.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "autoHide",
                "description": "Whether to hide tooltip when hovering over tooltip content, default is true.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "trackMouse",
                "description": "Tooltip position follows pointer on mousemove, default is false",
                "type": "java.lang.Boolean"
            },
            {
                "name": "beforeShow",
                "description": "Client side callback to execute before tooltip is shown. Returning false will prevent display.",
                "type": "java.lang.String"
            },
            {
                "name": "onHide",
                "description": "Client side callback to execute after tooltip is hidden.",
                "type": "java.lang.String"
            },
            {
                "name": "onShow",
                "description": "Client side callback to execute after tooltip is shown.",
                "type": "java.lang.String"
            },
            {
                "name": "position",
                "description": "Position of the tooltip, valid values are right, left, top and bottom. Default is 'right'.",
                "type": "java.lang.String"
            },
            {
                "name": "my",
                "description": "Defines which position on the element being positioned to align with the target element: \"horizontal vertical\" alignment. A single value such as \"right\" will be normalized to \"right center\", \"top\" will be normalized to \"center top\" (following CSS convention). Acceptable horizontal values: \"left\", \"center\", \"right\". Acceptable vertical values: \"top\", \"center\", \"bottom\". Example: \"left top\" or \"center center\". Each dimension can also contain offsets, in pixels or percent, e.g., \"right+10 top-25%\". Percentage offsets are relative to the element being positioned. If set overrides the 'position' attribute. Example \"left center\".",
                "type": "java.lang.String"
            },
            {
                "name": "at",
                "description": "Defines which position on the target element to align the positioned element against: \"horizontal vertical\" alignment. See the my option for full details on possible values. Percentage offsets are relative to the target element. If set overrides the 'position' attribute. Example \"right center\".",
                "type": "java.lang.String"
            },
            {
                "name": "delegate",
                "description": "",
                "type": "java.lang.Boolean"
            }
        ]
    },
    "p:tree": {
        "name": "p:tree",
        "description": "Tree is is used for displaying hierarchical data and creating site navigations.",
        "attributes": [
            {
                "name": "id",
                "description": "Unique identifier of the component in a namingContainer.",
                "type": "java.lang.String"
            },
            {
                "name": "rendered",
                "description": "Boolean value to specify the rendering of the component, when set to false component will not be rendered.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "binding",
                "description": "An el expression referring to a server side UIComponent instance in a backing bean.",
                "type": "javax.faces.component.UIComponent"
            },
            {
                "name": "widgetVar",
                "description": "Name of the client side widget.",
                "type": "java.lang.String"
            },
            {
                "name": "value",
                "description": "A TreeNode instance as the backing model.",
                "type": "java.lang.Object"
            },
            {
                "name": "var",
                "description": "Name of the request-scoped variable that'll be used to refer each treenode data during rendering.",
                "type": "String"
            },
            {
                "name": "dynamic",
                "description": "Specifies the ajax/client toggleMode. Default is false.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "cache",
                "description": "Specifies caching on dynamically loaded nodes. When set to true expanded nodes will be kept in memory. Default is true.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "onNodeClick",
                "description": "Javascript event to process when a tree node is clicked.",
                "type": "java.lang.String"
            },
            {
                "name": "selection",
                "description": "TreeNode array to reference the selections.",
                "type": "java.lang.Object"
            },
            {
                "name": "style",
                "description": "Style of the main container element of tree.",
                "type": "java.lang.String"
            },
            {
                "name": "styleClass",
                "description": "Style class of the main container element of tree.",
                "type": "java.lang.String"
            },
            {
                "name": "selectionMode",
                "description": "Defines the selectionMode, valid values are \"single\", \"multiple\" and \"checkbox\".",
                "type": "java.lang.String"
            },
            {
                "name": "highlight",
                "description": "Highlights nodes on hover when selection is enabled, set to false to disable highlighting.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "datakey",
                "description": "Unique key of the data presented by tree nodes.",
                "type": "java.lang.Object"
            },
            {
                "name": "animate",
                "description": "When enabled, Displays slide effect during toggling of a node.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "orientation",
                "description": "Defines the orientation of the tree, valid values are, \"vertical\" (default) and horizontal.",
                "type": "java.lang.String"
            },
            {
                "name": "propagateSelectionUp",
                "description": "Defines upwards selection propagation for checkbox mode, default is true.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "propagateSelectionDown",
                "description": "Defines upwards selection propagation for checkbox mode, default is true.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "dir",
                "description": "Defines text direction, valid values are \"ltr\" (default) and \"rtl\".",
                "type": "java.lang.String"
            },
            {
                "name": "draggable",
                "description": "Controls dragging of tree nodes. Default is false.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "droppable",
                "description": "Controls dropping of tree nodes. Default is false.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "dragdropScope",
                "description": "Scope key to group a set of tree components for transferring nodes using drag and drop.",
                "type": "java.lang.String"
            },
            {
                "name": "dragMode",
                "description": "Defines parent-child relationship when a node is dragged, valid values are self (default), parent and ancestor.",
                "type": "java.lang.String"
            },
            {
                "name": "dropRestrict",
                "description": "Defines parent-child restrictions when a node is dropped valid values are none (default) and sibling.",
                "type": "java.lang.String"
            },
            {
                "name": "required",
                "description": "Validation constraint for selection.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "requiredMessage",
                "description": "Message for required selection validation.",
                "type": "java.lang.String"
            },
            {
                "name": "skipChildren",
                "description": "Ignores processing of children during lifecycle, improves performance if table only has output components, default is false.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "showUnselectableCheckbox",
                "description": "Defines if in checkbox selection mode, a readonly checkbox should be displayed for an unselectable node. Default is false.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "tabindex",
                "description": "Position of the element in the tabbing order. Default is 0.",
                "type": "java.lang.Integer"
            },
            {
                "name": "nodeVar",
                "description": "Name of the request-scoped variable that'll be used to refer current treenode using EL.",
                "type": "java.lang.String"
            },
            {
                "name": "filterBy",
                "description": "Property to be used for filtering.",
                "type": "java.lang.Object"
            },
            {
                "name": "filterMatchMode",
                "description": "Match mode for filtering.",
                "type": "java.lang.String"
            },
            {
                "name": "filterEvent",
                "description": "Client side event to invoke filtering. If \"enter\" it will only filter after ENTER key is pressed. Default is keyup.",
                "type": "java.lang.String"
            },
            {
                "name": "filterDelay",
                "description": "Delay to wait in milliseconds before sending each filter query. Default is 300.",
                "type": "java.lang.Integer"
            },
            {
                "name": "sourceFilterPlaceholder",
                "description": "Placeholder for the filter input element.",
                "type": "java.lang.String"
            },
            {
                "name": "disabled",
                "description": "Disables tree.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "multipleDrag",
                "description": "When enabled, the selected multiple nodes can be dragged from a tree to another tree.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "dropCopyNode",
                "description": "When enabled and dropMode='move', the copy of the selected nodes can be dropped from a tree to another tree using Shift key.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "dropMode",
                "description": "Whether to 'move' or 'copy' the node on drop. Default is 'move'.",
                "type": "java.lang.String"
            },
            {
                "name": "onDrop",
                "description": "Method returning whether the dragged node(s) can be dropped on the dropped node.",
                "type": "javax.el.MethodExpression"
            },
            {
                "name": "filterMode",
                "description": "Mode for filtering valid values are lenient and strict. Default is lenient.",
                "type": "java.lang.String"
            },
            {
                "name": "filterFunction",
                "description": "Custom implementation to filter TreeNodes against a constraint.",
                "type": "javax.el.MethodExpression"
            }
        ]
    },
    "p:treeNode": {
        "name": "p:treeNode",
        "description": "TreeNode is used with Tree component to represent a node in tree.",
        "attributes": [
            {
                "name": "id",
                "description": "Unique identifier of the component in a namingContainer.",
                "type": "java.lang.String"
            },
            {
                "name": "rendered",
                "description": "Boolean value to specify the rendering of the component, when set to false component will not be rendered.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "binding",
                "description": "An el expression referring to a server side UIComponent instance in a backing bean.",
                "type": "javax.faces.component.UIComponent"
            },
            {
                "name": "type",
                "description": "Type of the tree node. Default is \"default\"",
                "type": "java.lang.String"
            },
            {
                "name": "styleClass",
                "description": "Style class to apply a particular tree node type.",
                "type": "java.lang.String"
            },
            {
                "name": "icon",
                "description": "",
                "type": "java.lang.String"
            },
            {
                "name": "expandedIcon",
                "description": "",
                "type": "java.lang.String"
            },
            {
                "name": "collapsedIcon",
                "description": "",
                "type": "java.lang.String"
            },
            {
                "name": "ariaLabel",
                "description": "The aria-label attribute is used to define a string that labels the current element for accessibility.",
                "type": "java.lang.String"
            }
        ]
    },
    "p:treeTable": {
        "name": "p:treeTable",
        "description": "TreeTable is is used for displaying hierarchical data in tabular format.",
        "attributes": [
            {
                "name": "id",
                "description": "Unique identifier of the component in a namingContainer.",
                "type": "java.lang.String"
            },
            {
                "name": "rendered",
                "description": "Boolean value to specify the rendering of the component, when set to false component will not be rendered.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "binding",
                "description": "An el expression referring to a server side UIComponent instance in a backing bean.",
                "type": "javax.faces.component.UIComponent"
            },
            {
                "name": "widgetVar",
                "description": "Name of the client side widget.",
                "type": "java.lang.String"
            },
            {
                "name": "value",
                "description": "",
                "type": "org.primefaces.model.TreeNode"
            },
            {
                "name": "var",
                "description": "Name of the iterator variable that references each element in the data set.",
                "type": "String"
            },
            {
                "name": "style",
                "description": "Inline style of the container element.",
                "type": "java.lang.String"
            },
            {
                "name": "styleClass",
                "description": "Style class of the container element.",
                "type": "java.lang.String"
            },
            {
                "name": "selection",
                "description": "TreeNode array to reference the selections.",
                "type": "java.lang.Object"
            },
            {
                "name": "selectionMode",
                "description": "Defines the selectionMode, valid values are \"single\", \"multiple\" and \"checkbox\".",
                "type": "java.lang.String"
            },
            {
                "name": "scrollable",
                "description": "Makes data scrollable with fixed header. Default is false.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "scrollHeight",
                "description": "Height for scrollable data.",
                "type": "java.lang.String"
            },
            {
                "name": "scrollWidth",
                "description": "Width for scrollable data.",
                "type": "java.lang.String"
            },
            {
                "name": "tableStyle",
                "description": "Inline style of the table element.",
                "type": "java.lang.String"
            },
            {
                "name": "tableStyleClass",
                "description": "Style class of the table element.",
                "type": "java.lang.String"
            },
            {
                "name": "emptyMessage",
                "description": "Text to display when there is no data to display. Default is \"No records found.\"",
                "type": "java.lang.String"
            },
            {
                "name": "resizableColumns",
                "description": "Defines if columns can be resized or not.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "rowStyleClass",
                "description": "Style class for each row.",
                "type": "java.lang.String"
            },
            {
                "name": "liveResize",
                "description": "Columns are resized live in this mode without using a resize helper.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "required",
                "description": "Validation constraint for selection.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "requiredMessage",
                "description": "Message for required selection validation.",
                "type": "java.lang.String"
            },
            {
                "name": "sortBy",
                "description": "Property to be used for default sorting. Expects a single or a collection of SortMeta.",
                "type": "java.lang.Object"
            },
            {
                "name": "nativeElements",
                "description": "In native mode, treetable uses native checkboxes.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "dataLocale",
                "description": "Locale to be used in features such as sorting, defaults to view locale.",
                "type": "java.lang.Object"
            },
            {
                "name": "skipChildren",
                "description": "Ignores processing of children during lifecycle, improves performance if table only has output components, default is false.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "showUnselectableCheckbox",
                "description": "Defines if in checkbox selection mode, a readonly checkbox should be displayed for an unselectable node. Default is false.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "nodeVar",
                "description": "Name of the request-scoped variable that'll be used to refer current treenode using EL.",
                "type": "java.lang.String"
            },
            {
                "name": "expandMode",
                "description": "Updates children only when set to \"children\" or the node itself with children when set to \"self\" on node expand.",
                "type": "java.lang.String"
            },
            {
                "name": "exportTag",
                "description": "If XML data exporter in use, this allows customization of the document tag in the XML.",
                "type": "java.lang.String"
            },
            {
                "name": "exportRowTag",
                "description": "If XML data exporter in use, this allows customization of the row tag in the XML.",
                "type": "java.lang.String"
            },
            {
                "name": "stickyHeader",
                "description": "Sticky header stays in window viewport during scrolling.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "editable",
                "description": "Controls incell editing.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "editMode",
                "description": "Defines edit mode, valid values are \"row\" (default) and \"cell\".",
                "type": "java.lang.String"
            },
            {
                "name": "editingRow",
                "description": "Defines if cell editors of row should be displayed as editable or not. Default is false meaning display mode.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "cellSeparator",
                "description": "Separator text to use in output mode of editable cells with multiple components.",
                "type": "java.lang.String"
            },
            {
                "name": "disabledTextSelection",
                "description": "Disables text selection on row click. Default is true.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "paginator",
                "description": "Enables pagination. Default is false.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "paginatorTemplate",
                "description": "Template of the paginator.",
                "type": "java.lang.String"
            },
            {
                "name": "rowsPerPageTemplate",
                "description": "Template of the rowsPerPage dropdown.",
                "type": "java.lang.String"
            },
            {
                "name": "currentPageReportTemplate",
                "description": "Template of the currentPageReport UI.",
                "type": "java.lang.String"
            },
            {
                "name": "pageLinks",
                "description": "Maximum number of page links to display. Default is 10.",
                "type": "java.lang.Integer"
            },
            {
                "name": "paginatorPosition",
                "description": "Position of the paginator. Default is both.",
                "type": "java.lang.String"
            },
            {
                "name": "paginatorAlwaysVisible",
                "description": "Defines if paginator should be hidden if total data count is less than number of rows per page. Default is true.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "rows",
                "description": "Number of rows to display per page. Default value is 0 meaning to display all data available.",
                "type": "java.lang.Integer"
            },
            {
                "name": "first",
                "description": "Index of the first data to display.",
                "type": "java.lang.Integer"
            },
            {
                "name": "filteredValue",
                "description": "Node to keep the filtered nodes if filtering is enabled.",
                "type": "java.lang.Object"
            },
            {
                "name": "filterEvent",
                "description": "Client side event to invoke filtering. If \"enter\" it will only filter after ENTER key is pressed. Default is keyup.",
                "type": "java.lang.String"
            },
            {
                "name": "filterNormalize",
                "description": "Defines if filtering would be done using normalized values (accents will be removed from characters). Default is false.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "filterDelay",
                "description": "Delay to wait in milliseconds before sending each filter query. Default is 300.",
                "type": "java.lang.Integer"
            },
            {
                "name": "cellEditMode",
                "description": "Defines the cell edit behavior, valid values are \"eager\" (default) and \"lazy\".",
                "type": "java.lang.String"
            },
            {
                "name": "touchable",
                "description": "Enable touch support if browser detection supports it. Default is false because it is globally enabled by default.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "editInitEvent",
                "description": "Defines a client side event to open cell on editable table.",
                "type": "java.lang.String"
            },
            {
                "name": "multiViewState",
                "description": "Whether to keep TreeTable state across views, defaults to false.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "filterBy",
                "description": "Property to be used for default filtering. Expects a single or a collection of FilterMeta.",
                "type": "java.util.Map"
            },
            {
                "name": "globalFilter",
                "description": "Value of the global filter to use when filtering by default.",
                "type": "java.lang.String"
            },
            {
                "name": "globalFilterOnly",
                "description": "When true this will hide all column filters and allow all columns to be filtered by global filter only, defaults to false.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "globalFilterFunction",
                "description": "Custom implementation to globally filter a value against a constraint.",
                "type": "javax.el.MethodExpression"
            },
            {
                "name": "sortMode",
                "description": "Defines sorting mode, valid values are \"single\" and \"multiple\" (default).",
                "type": "java.lang.String"
            },
            {
                "name": "allowUnsorting",
                "description": "Defines whether columns are allowed to be unsorted. Default is false.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "cloneOnFilter",
                "description": "Defines if nodes should be cloned on filter via Cloneable interface or Copy-Constructor (CustomNode(CustomNode original) or CustomNode(String type, Object data, TreeNode parent)). Normally the filtered nodes are new instanceof of DefaultTreeNode. Default is false.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "saveOnCellBlur",
                "description": "Saves the changes in cell editing on blur, when set to false changes are discarded.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "showGridlines",
                "description": "When enables, cell borders are displayed. Default is false.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "size",
                "description": "Size of the table content, valid values are \"small\" and \"large\". Leave empty for regular size.",
                "type": "java.lang.String"
            },
            {
                "name": "propagateSelectionUp",
                "description": "Defines upwards selection propagation for checkbox mode, default is true.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "propagateSelectionDown",
                "description": "Defines upwards selection propagation for checkbox mode, default is true.",
                "type": "java.lang.Boolean"
            }
        ]
    },
    "p:triStateCheckbox": {
        "name": "p:triStateCheckbox",
        "description": "Checkbox with 3 states: true, false, and unselected.",
        "attributes": [
            {
                "name": "id",
                "description": "Unique identifier of the component in a namingContainer.",
                "type": "java.lang.String"
            },
            {
                "name": "escape",
                "description": "Escape the label attribute.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "rendered",
                "description": "Boolean value to specify the rendering of the component, when set to false component will not be rendered.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "binding",
                "description": "An el expression referring to a server side UIComponent instance in a backing bean.",
                "type": "javax.faces.component.UIComponent"
            },
            {
                "name": "value",
                "description": "Value of the component.",
                "type": "java.lang.Object"
            },
            {
                "name": "converter",
                "description": "An el expression or a literal text that defines a converter for the component. When it's an EL expression, it's resolved to a converter instance.\n    In case it's a static text, it must refer to a converter id.",
                "type": "javax.faces.convert.Converter"
            },
            {
                "name": "immediate",
                "description": "When set true, process validations logic is executed at apply request values phase for this component. Default is false.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "required",
                "description": "Marks component as required.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "validator",
                "description": "A method expression referring to a method validating the input.",
                "type": "javax.faces.validator.Validator"
            },
            {
                "name": "valueChangeListener",
                "description": "A method binding expression referring to a method for handling a valuchangeevent.",
                "type": "javax.faces.event.ValueChangeListener"
            },
            {
                "name": "requiredMessage",
                "description": "Message to display when required field validation fails.",
                "type": "java.lang.String"
            },
            {
                "name": "converterMessage",
                "description": "Message to display when conversion fails.",
                "type": "java.lang.String"
            },
            {
                "name": "validatorMessage",
                "description": "Message to display when validation fails.",
                "type": "java.lang.String"
            },
            {
                "name": "widgetVar",
                "description": "Name of the client side widget.",
                "type": "java.lang.String"
            },
            {
                "name": "stateOneIcon",
                "description": "Icon for StateOne as a css class.",
                "type": "java.lang.String"
            },
            {
                "name": "stateTwoIcon",
                "description": "Icon for StateTwo as a css class.",
                "type": "java.lang.String"
            },
            {
                "name": "stateThreeIcon",
                "description": "Icon for StateThree as a css class.",
                "type": "java.lang.String"
            },
            {
                "name": "itemLabel",
                "description": "Label to display next to checkbox.",
                "type": "java.lang.String"
            },
            {
                "name": "stateOneTitle",
                "description": "Title for StateOne.",
                "type": "java.lang.String"
            },
            {
                "name": "stateTwoTitle",
                "description": "Title for StateTwo.",
                "type": "java.lang.String"
            },
            {
                "name": "stateThreeTitle",
                "description": "Title for StateThree.",
                "type": "java.lang.String"
            },
            {
                "name": "disabled",
                "description": "Disables the component.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "readonly",
                "description": "Flag indicating that this component will prevent changes by the user.",
                "type": "boolean"
            },
            {
                "name": "label",
                "description": "A localized user presentable name.",
                "type": "java.lang.String"
            },
            {
                "name": "onchange",
                "description": "Client side callback to execute on state change.",
                "type": "java.lang.String"
            },
            {
                "name": "style",
                "description": "Inline style of the component.",
                "type": "java.lang.String"
            },
            {
                "name": "styleClass",
                "description": "Style class of the component.",
                "type": "java.lang.String"
            },
            {
                "name": "tabindex",
                "description": "The tabindex attribute specifies the tab order of an element when the \"tab\" button is used for navigating.",
                "type": "java.lang.String"
            }
        ]
    },
    "p:video": {
        "name": "p:video",
        "description": "Video component is used for embedding video content such as MP4, OGG, WEBM to Faces views.",
        "attributes": [
            {
                "name": "id",
                "description": "Unique identifier of the component in a namingContainer.",
                "type": "java.lang.String"
            },
            {
                "name": "rendered",
                "description": "Boolean value to specify the rendering of the component, when set to false component will not be rendered.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "binding",
                "description": "An el expression referring to a server side UIComponent instance in a backing bean.",
                "type": "javax.faces.component.UIComponent"
            },
            {
                "name": "value",
                "description": "Media source to play.",
                "type": "java.lang.Object"
            },
            {
                "name": "player",
                "description": "Type of the player, possible values are \"mp4\",\"ogg\", and \"webm\".",
                "type": "java.lang.String"
            },
            {
                "name": "style",
                "description": "Style of the player.",
                "type": "java.lang.String"
            },
            {
                "name": "styleClass",
                "description": "Style class of the player.",
                "type": "java.lang.String"
            },
            {
                "name": "cache",
                "description": "Controls browser caching mode of the resource. Default is true",
                "type": "java.lang.Boolean"
            },
            {
                "name": "controls",
                "description": "Whether the audio/video should display controls (like play/pause etc.)",
                "type": "java.lang.Boolean"
            },
            {
                "name": "controlslist",
                "description": "When specified, helps the browser select what controls to show. The allowed values are nodownload, nofullscreen and noremoteplayback.",
                "type": "java.lang.String"
            },
            {
                "name": "crossorigin",
                "description": "This enumerated attribute indicates whether to use CORS to fetch the related audio/video file. The allowed values are anonymous and user-credentials.",
                "type": "java.lang.String"
            },
            {
                "name": "autoplay",
                "description": "Specifies that the video will start playing as soon as it is ready.)",
                "type": "java.lang.Boolean"
            },
            {
                "name": "disableremoteplayback",
                "description": "Used to disable the capability of remote playback in devices that are attached using wired (HDMI, DVI, etc.) and wireless technologies (Miracast, Chromecast, DLNA, AirPlay, etc.)",
                "type": "java.lang.Boolean"
            },
            {
                "name": "disablepictureinpicture",
                "description": "Prevents the browser from suggesting a Picture-in-Picture context menu or to request Picture-in-Picture automatically in some cases.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "loop",
                "description": "Specifies that the video will start over again, every time it is finished.)",
                "type": "java.lang.Boolean"
            },
            {
                "name": "playsinline",
                "description": "Specifies that the video is to be played \"inline\", that is within the element's playback area. Note that the absence of this attribute does not imply that the video will always be played in fullscreen.)",
                "type": "java.lang.Boolean"
            },
            {
                "name": "muted",
                "description": "Specifies that the audio output of the video should be muted.)",
                "type": "java.lang.Boolean"
            },
            {
                "name": "preload",
                "description": "Specifies if and how the author thinks the video should be loaded when the page loads. Values \"none\", \"auto\", \"metadata\"",
                "type": "java.lang.String"
            },
            {
                "name": "poster",
                "description": "A URL for an image to be shown while the video is downloading. If this attribute isn't specified, nothing is displayed until the first frame is available, then the first frame is shown as the poster frame.",
                "type": "java.lang.String"
            },
            {
                "name": "width",
                "description": "Width of the player.",
                "type": "java.lang.String"
            },
            {
                "name": "height",
                "description": "Height of the player.",
                "type": "java.lang.String"
            }
        ]
    },
    "p:wizard": {
        "name": "p:wizard",
        "description": "Wizard provides an enhanced UI to implement a workflow easily in a single page.\n        Wizard consists of several child tab components where each tab represents a step in the process.",
        "attributes": [
            {
                "name": "id",
                "description": "Unique identifier of the component in a namingContainer.",
                "type": "java.lang.String"
            },
            {
                "name": "rendered",
                "description": "Boolean value to specify the rendering of the component, when set to false component will not be rendered.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "binding",
                "description": "An el expression referring to a server side UIComponent instance in a backing bean.",
                "type": "javax.faces.component.UIComponent"
            },
            {
                "name": "widgetVar",
                "description": "Name of the client side widget.",
                "type": "java.lang.String"
            },
            {
                "name": "step",
                "description": "Id of the current step in flow.",
                "type": "java.lang.String"
            },
            {
                "name": "style",
                "description": "Style of the main wizard container element.",
                "type": "java.lang.String"
            },
            {
                "name": "styleClass",
                "description": "Style class of the main wizard container element.",
                "type": "java.lang.String"
            },
            {
                "name": "flowListener",
                "description": "Server side listener to invoke when wizard attempts to go forward or back.",
                "type": "javax.el.MethodExpression"
            },
            {
                "name": "showNavBar",
                "description": "Specifies visibility of default navigator arrows. Default is true.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "showStepStatus",
                "description": "Specifies visibility of default step title bar. Default is true.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "disableOnAjax",
                "description": "If true, next and back navigation buttons will be disabled during Ajax requests triggered by them. Default is 'trie'.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "onback",
                "description": "Javascript event handler to be invoked when flow goes back.",
                "type": "java.lang.String"
            },
            {
                "name": "onnext",
                "description": "Javascript event handler to be invoked when flow goes forward.",
                "type": "java.lang.String"
            },
            {
                "name": "nextLabel",
                "description": "Label of next navigation button. Default is \"Next\".",
                "type": "java.lang.String"
            },
            {
                "name": "backLabel",
                "description": "Label of back navigation button. Default is \"Back\".",
                "type": "java.lang.String"
            },
            {
                "name": "updateModelOnPrev",
                "description": "If yes, the model will be updated when the \"Back\" button is clicked. Default is false.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "effect",
                "description": "Animation effect to use when showing and hiding wizard panel. Default is no animation.",
                "type": "java.lang.String"
            },
            {
                "name": "effectDuration",
                "description": "Duration of the animation effect in milliseconds.",
                "type": "java.lang.Integer"
            },
            {
                "name": "highlightCompletedSteps",
                "description": "If true, all completed steps are highlighted. If false, only the current step is highlighted. Default is false.",
                "type": "java.lang.Boolean"
            }
        ]
    },
    "p:chart": {
        "name": "p:chart",
        "description": "Chart.js component using raw JSON or XDev model.",
        "attributes": [
            {
                "name": "id",
                "description": "Unique identifier of the component in a namingContainer.",
                "type": "java.lang.String"
            },
            {
                "name": "rendered",
                "description": "Boolean value to specify the rendering of the component, when set to false component will not be rendered.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "binding",
                "description": "An el expression referring to a server side UIComponent instance in a backing bean.",
                "type": "javax.faces.component.UIComponent"
            },
            {
                "name": "widgetVar",
                "description": "Name of the client side widget.",
                "type": "java.lang.String"
            },
            {
                "name": "value",
                "description": "Chart model data as a JSON string, either generated from an XDEV model object or provided as raw JSON configuration.",
                "type": "java.lang.String"
            },
            {
                "name": "style",
                "description": "Inline style of the component.",
                "type": "java.lang.String"
            },
            {
                "name": "styleClass",
                "description": "Style class of the component.",
                "type": "java.lang.String"
            },
            {
                "name": "canvasStyle",
                "description": "Inline style of the canvas element.",
                "type": "java.lang.String"
            },
            {
                "name": "canvasStyleClass",
                "description": "Style class of the canvas element.",
                "type": "java.lang.String"
            },
            {
                "name": "ariaLabel",
                "description": "The aria-label attribute is used to define a string that labels the current element for accessibility.",
                "type": "java.lang.String"
            },
            {
                "name": "extender",
                "description": "Name of javascript function to extend the options of the underlying Chart.js plugin.",
                "type": "java.lang.String"
            }
        ]
    },
    "p:datePicker": {
        "name": "p:datePicker",
        "description": "DatePicker is an input component to select a date.",
        "attributes": [
            {
                "name": "id",
                "description": "Unique identifier of the component in a namingContainer.",
                "type": "java.lang.String"
            },
            {
                "name": "rendered",
                "description": "Boolean value to specify the rendering of the component, when set to false component will not be rendered.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "binding",
                "description": "An el expression referring to a server side UIComponent instance in a backing bean.",
                "type": "javax.faces.component.UIComponent"
            },
            {
                "name": "value",
                "description": "Value of the component.",
                "type": "java.lang.Object"
            },
            {
                "name": "converter",
                "description": "An el expression or a literal text that defines a converter for the component. When it's an EL expression, it's resolved to a converter instance.\n    In case it's a static text, it must refer to a converter id.",
                "type": "javax.faces.convert.Converter"
            },
            {
                "name": "immediate",
                "description": "When set true, process validations logic is executed at apply request values phase for this component. Default is false.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "required",
                "description": "Marks component as required.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "validator",
                "description": "A method expression referring to a method validating the input.",
                "type": "javax.faces.validator.Validator"
            },
            {
                "name": "valueChangeListener",
                "description": "A method binding expression referring to a method for handling a valuchangeevent.",
                "type": "javax.faces.event.ValueChangeListener"
            },
            {
                "name": "requiredMessage",
                "description": "Message to display when required field validation fails.",
                "type": "java.lang.String"
            },
            {
                "name": "converterMessage",
                "description": "Message to display when conversion fails.",
                "type": "java.lang.String"
            },
            {
                "name": "validatorMessage",
                "description": "Message to display when validation fails.",
                "type": "java.lang.String"
            },
            {
                "name": "accesskey",
                "description": "Access key to transfer focus to the input element.",
                "type": "java.lang.String"
            },
            {
                "name": "alt",
                "description": "Alternate textual description of the input element.",
                "type": "java.lang.String"
            },
            {
                "name": "autocomplete",
                "description": "Controls browser autocomplete behavior.",
                "type": "java.lang.String"
            },
            {
                "name": "dir",
                "description": "Direction indication for text that does not inherit directionality.",
                "type": "java.lang.String"
            },
            {
                "name": "disabled",
                "description": "Disables the input element, default is false.",
                "type": "boolean"
            },
            {
                "name": "label",
                "description": "A localized user presentable name.",
                "type": "java.lang.String"
            },
            {
                "name": "lang",
                "description": "Code describing the language used in the generated markup.",
                "type": "java.lang.String"
            },
            {
                "name": "locale",
                "description": "User locale for i18n localization messages. The attribute can be either a String or java.util.Locale object.",
                "type": "java.lang.Object"
            },
            {
                "name": "maxlength",
                "description": "Maximum number of characters that may be entered in this field.",
                "type": "int"
            },
            {
                "name": "onblur",
                "description": "Client side callback to execute when input element loses focus.",
                "type": "java.lang.String"
            },
            {
                "name": "onchange",
                "description": "Client side callback to execute when input element loses focus and its value has been modified since gaining focus.",
                "type": "java.lang.String"
            },
            {
                "name": "onclick",
                "description": "Client side callback to execute when input element is clicked.",
                "type": "java.lang.String"
            },
            {
                "name": "ondblclick",
                "description": "Client side callback to execute when input element is double clicked.",
                "type": "java.lang.String"
            },
            {
                "name": "onfocus",
                "description": "Client side callback to execute when input element receives focus.",
                "type": "java.lang.String"
            },
            {
                "name": "onkeydown",
                "description": "Client side callback to execute when a key is pressed down over input element.",
                "type": "java.lang.String"
            },
            {
                "name": "onkeypress",
                "description": "Client side callback to execute when a key is pressed and released over input element.",
                "type": "java.lang.String"
            },
            {
                "name": "onkeyup",
                "description": "Client side callback to execute when a key is released over input element.",
                "type": "java.lang.String"
            },
            {
                "name": "onmousedown",
                "description": "Client side callback to execute when a pointer input element is pressed down over input element.",
                "type": "java.lang.String"
            },
            {
                "name": "onmousemove",
                "description": "Client side callback to execute when a pointer input element is moved within input element.",
                "type": "java.lang.String"
            },
            {
                "name": "onmouseout",
                "description": "Client side callback to execute when a pointer input element is moved away from input element.",
                "type": "java.lang.String"
            },
            {
                "name": "onmouseover",
                "description": "Client side callback to execute when a pointer input element is moved onto input element.",
                "type": "java.lang.String"
            },
            {
                "name": "onmouseup",
                "description": "Client side callback to execute when a pointer input element is released over input element.",
                "type": "java.lang.String"
            },
            {
                "name": "onwheel",
                "description": "Client side callback to execute when the mouse wheel rolls up or down over an element.",
                "type": "java.lang.String"
            },
            {
                "name": "onselect",
                "description": "Client side callback to execute when text within input element is selected by user.",
                "type": "java.lang.String"
            },
            {
                "name": "oncut",
                "description": "Client side callback to execute when the user copies the content of an element.",
                "type": "java.lang.String"
            },
            {
                "name": "oncopy",
                "description": "Client side callback to execute when the user cuts the content of an element.",
                "type": "java.lang.String"
            },
            {
                "name": "onpaste",
                "description": "Client side callback to execute when the user pastes some content in an element.",
                "type": "java.lang.String"
            },
            {
                "name": "oninput",
                "description": "Client side callback to execute when an element gets user input.",
                "type": "java.lang.String"
            },
            {
                "name": "oncontextmenu",
                "description": "Client side callback to execute when a context menu is triggered.",
                "type": "java.lang.String"
            },
            {
                "name": "oninvalid",
                "description": "Client side callback to execute when an element is invalid.",
                "type": "java.lang.String"
            },
            {
                "name": "onreset",
                "description": "Client side callback to execute when the Reset button in a form is clicked.",
                "type": "java.lang.String"
            },
            {
                "name": "onsearch",
                "description": "Client side callback to execute when the user writes something in a search field.",
                "type": "java.lang.String"
            },
            {
                "name": "ondrag",
                "description": "Client side callback to execute when an element is dragged.",
                "type": "java.lang.String"
            },
            {
                "name": "ondragend",
                "description": "Client side callback to execute at the end of a drag operation.",
                "type": "java.lang.String"
            },
            {
                "name": "ondragenter",
                "description": "Client side callback to execute when an element has been dragged to a valid drop target.",
                "type": "java.lang.String"
            },
            {
                "name": "ondragleave",
                "description": "Client side callback to execute when an element leaves a valid drop target.",
                "type": "java.lang.String"
            },
            {
                "name": "ondragover",
                "description": "Client side callback to execute when an element is being dragged over a valid drop target.",
                "type": "java.lang.String"
            },
            {
                "name": "ondragstart",
                "description": "Client side callback to execute at the start of a drag operation.",
                "type": "java.lang.String"
            },
            {
                "name": "ondrop",
                "description": "Client side callback to execute when dragged element is being dropped.",
                "type": "java.lang.String"
            },
            {
                "name": "onscroll",
                "description": "Client side callback to execute when an element's scrollbar is being scrolled.",
                "type": "java.lang.String"
            },
            {
                "name": "readonly",
                "description": "Flag indicating that this component will prevent changes by the user.",
                "type": "boolean"
            },
            {
                "name": "size",
                "description": "Number of characters used to determine the width of the input element.",
                "type": "int"
            },
            {
                "name": "style",
                "description": "Inline style of the component.",
                "type": "java.lang.String"
            },
            {
                "name": "styleClass",
                "description": "Style class of the component.",
                "type": "java.lang.String"
            },
            {
                "name": "tabindex",
                "description": "Position of the element in the tabbing order.",
                "type": "java.lang.String"
            },
            {
                "name": "title",
                "description": "Advisory tooltip information.",
                "type": "java.lang.String"
            },
            {
                "name": "placeholder",
                "description": "The placeholder attribute specifies a short hint that describes the expected value of an input field.",
                "type": "java.lang.String"
            },
            {
                "name": "inputmode",
                "description": "HTML5 inputmode attribute for hinting at the type of data this control has for touch devices to display appropriate virtual keyboard.",
                "type": "java.lang.String"
            },
            {
                "name": "widgetVar",
                "description": "Name of the client side widget.",
                "type": "java.lang.String"
            },
            {
                "name": "timeOnly",
                "description": "Shows only time picker without date. Default is false.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "inline",
                "description": "When enabled, displays the datepicker as inline. Default is false for popup mode.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "flex",
                "description": "Use modern PrimeFlex-Grid instead of classic Grid CSS.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "pattern",
                "description": "DateFormat pattern for localization.",
                "type": "java.lang.String"
            },
            {
                "name": "type",
                "description": "Input field type. Default is text.",
                "type": "java.lang.String"
            },
            {
                "name": "inputStyle",
                "description": "Inline style of the input element. Used when inline is false.",
                "type": "java.lang.String"
            },
            {
                "name": "inputStyleClass",
                "description": "Style class of the input element. Used when inline is false.",
                "type": "java.lang.String"
            },
            {
                "name": "readonlyInput",
                "description": "Makes input text of a popup datepicker readonly. Default is false.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "locale",
                "description": "User locale for i18n localization messages. The attribute can be either a String or java.util.Locale object.",
                "type": "java.lang.Object"
            },
            {
                "name": "buttonTabindex",
                "description": "Position of the button in the tabbing order.",
                "type": "java.lang.String"
            },
            {
                "name": "showIcon",
                "description": "When enabled, displays a button with icon next to input. Default is false.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "beforeShow",
                "description": "Callback to execute before displaying calendar.",
                "type": "java.lang.String"
            },
            {
                "name": "focusOnSelect",
                "description": "If enabled, the input is focused again after selecting a date. Default is false.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "yearRange",
                "description": "The range of years allowed in the year input in (nnnn:nnnn) format such as (1974:2020). Default value is \"displayed_date - 1000 : displayed_date + 1000\"..",
                "type": "java.lang.String"
            },
            {
                "name": "mindate",
                "description": "Sets datepicker's minimum visible date.",
                "type": "java.lang.Object"
            },
            {
                "name": "maxdate",
                "description": "Sets datepicker's maximum visible date.",
                "type": "java.lang.Object"
            },
            {
                "name": "selectionMode",
                "description": "Defines the quantity of the selection, valid values are \"single\", \"multiple\" and \"range\". Default is \"single\".",
                "type": "java.lang.String"
            },
            {
                "name": "showMinMaxRange",
                "description": "Only display valid dates within the min/max range. Default is true.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "autoMonthFormat",
                "description": "Whether to format the month. Default is true.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "showOtherMonths",
                "description": "Whether to display dates in other months (non-selectable) at the start or end of the current month.\n                To make these days selectable use the selectOtherMonths option. Default is false.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "selectOtherMonths",
                "description": "Whether days in other months shown before or after the current month are selectable.\n                This only applies if the showOtherMonths option is set to true. Default is false.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "showOnFocus",
                "description": "When disabled, datepicker will not be visible with input focus. Default is true.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "shortYearCutoff",
                "description": "The cutoff year for determining the century for a date. Default is \"+10\".",
                "type": "java.lang.String"
            },
            {
                "name": "monthNavigator",
                "description": "Whether the month should be rendered as a dropdown instead of text. Default is false.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "yearNavigator",
                "description": "Display the year navigator. When set to 'true' or 'input', the year is shown as a numeric input, which is accessible for visually impaired users. If set to 'select', it appears as a dropdown menu. Default is 'false'.",
                "type": "java.lang.String"
            },
            {
                "name": "showTime",
                "description": "Whether to display timepicker. Default is false.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "hourFormat",
                "description": "Specifies 12 or 24 hour format.",
                "type": "java.lang.String"
            },
            {
                "name": "timeOnly",
                "description": "Whether to display timepicker only. Default is false.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "defaultHour",
                "description": "Default for hour selection, if no date is given. Default is 0.",
                "type": "java.lang.Integer"
            },
            {
                "name": "defaultMinute",
                "description": "Default for minute selection, if no date is given. Default is 0.",
                "type": "java.lang.Integer"
            },
            {
                "name": "defaultSecond",
                "description": "Default for second selection, if no date is given. Default is 0.",
                "type": "java.lang.Integer"
            },
            {
                "name": "defaultMillisecond",
                "description": "Default for millisecond selection, if no date is given. Default is 0.",
                "type": "java.lang.Integer"
            },
            {
                "name": "showSeconds",
                "description": "Whether to show the seconds in time picker. Default is false.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "showMilliseconds",
                "description": "Whether to show the milliseconds in time picker. Default is false.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "stepHour",
                "description": "Hours to change per step. Default is 1.",
                "type": "java.lang.Integer"
            },
            {
                "name": "stepMinute",
                "description": "Minutes to change per step. Default is 1.",
                "type": "java.lang.Integer"
            },
            {
                "name": "stepSecond",
                "description": "Seconds to change per step. Default is 1.",
                "type": "java.lang.Integer"
            },
            {
                "name": "stepMillisecond",
                "description": "Milliseconds to change per step. Default is 1.",
                "type": "java.lang.Integer"
            },
            {
                "name": "showButtonBar",
                "description": "Whether to display today and clear buttons at the footer. Default is false.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "panelStyleClass",
                "description": "Style class of the datetimepicker container element.",
                "type": "java.lang.String"
            },
            {
                "name": "panelStyle",
                "description": "Inline style of the datetimepicker container element.",
                "type": "java.lang.String"
            },
            {
                "name": "keepInvalid",
                "description": "Keep invalid value when input blur. Default is false.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "hideOnDateTimeSelect",
                "description": "Whether to hide the overlay on date selection when showTime is enabled. Default is false.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "hideOnRangeSelection",
                "description": "Whether to hide the overlay on date selection is completed when selectionMode is range. Default is false.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "maxDateCount",
                "description": "Maximum number of selectable dates in multiple mode. Default is java.lang.Integer.MAX_VALUE.",
                "type": "java.lang.Integer"
            },
            {
                "name": "numberOfMonths",
                "description": "Number of months to display. Default is 1.",
                "type": "java.lang.Integer"
            },
            {
                "name": "view",
                "description": "Type of view to display, valid values are \"date\" for datepicker, \"week\" for week picker, \"month\" for month picker.",
                "type": "java.lang.String"
            },
            {
                "name": "autoDetectDisplay",
                "description": "Detects if mobile browser and sets optimized interface for touch devices. Default is true.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "responsiveBreakpoint",
                "description": "This is the breakpoint in pixels when to automatically switch to optimized interface if autoDetectDisplay=true. Default is 576.",
                "type": "java.lang.Integer"
            },
            {
                "name": "touchUI",
                "description": "When enabled, calendar overlay is displayed as optimized for touch devices. Default is false.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "dateTemplate",
                "description": "Function that gets a date information and returns the cell content in datepicker.",
                "type": "java.lang.String"
            },
            {
                "name": "appendTo",
                "description": "Appends the datepicker's panel to the given search expression.",
                "type": "java.lang.String"
            },
            {
                "name": "timeZone",
                "description": "String or a java.util.TimeZone instance to specify the timezone used for date conversion, defaults to TimeZone.getDefault()",
                "type": "java.lang.Object"
            },
            {
                "name": "triggerButtonIcon",
                "description": "Icon of the trigger button when showIcon is enabled",
                "type": "java.lang.String"
            },
            {
                "name": "disabledDates",
                "description": "List with dates that should be disabled (not selectable).",
                "type": "java.util.List"
            },
            {
                "name": "disabledDays",
                "description": "List with weekday numbers that should be disabled (not selectable).",
                "type": "java.util.List"
            },
            {
                "name": "enabledDates",
                "description": "List with dates that should be enabled, the others will be disabled (not selectable).",
                "type": "java.util.List"
            },
            {
                "name": "onMonthChange",
                "description": "Callback to invoke when a month is changed using the navigators.",
                "type": "java.lang.String"
            },
            {
                "name": "onYearChange",
                "description": "Callback to invoke when a year is changed using the navigators.",
                "type": "java.lang.String"
            },
            {
                "name": "rangeSeparator",
                "description": "Separator for joining start and end dates on range selection mode. Default value is \"-\".",
                "type": "java.lang.String"
            },
            {
                "name": "resolverStyle",
                "description": "ResolverStyle for java.time.format.DateTimeFormatter, lenient, smart or strict, Default is smart.",
                "type": "java.lang.String"
            },
            {
                "name": "timeInput",
                "description": "Allows direct input in time field. Default is false.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "showWeek",
                "description": "Display the current calendar week infront of each row in the calendar panel.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "weekCalculator",
                "description": "A javascript method that is used to calculate the calendar week. Default implementations are available if start of week is monday, sunday or saturday.",
                "type": "java.lang.String"
            },
            {
                "name": "touchable",
                "description": "Enable touch support if browser detection supports it. Default is false because it is globally enabled by default.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "showWeek",
                "description": "Display the current calendar week infront of each row in the calendar panel.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "weekCalculator",
                "description": "A javascript method that is used to calculate the calendar week. Default implementations are available if start of week is monday, sunday or saturday.",
                "type": "java.lang.String"
            },
            {
                "name": "mask",
                "description": "Defines if a mask should be applied to the input field. Default value is \"false\" and valid values to enable are \"true\" that uses the pattern as the mask or a custom template. Refer to\n                inputMask component for more information about custom templates.",
                "type": "java.lang.String"
            },
            {
                "name": "maskSlotChar",
                "description": "PlaceHolder in mask template.",
                "type": "java.lang.String"
            },
            {
                "name": "maskAutoClear",
                "description": "Clears the field on blur when incomplete input is entered.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "model",
                "description": "Model with meta data for certain dates, like disabled.",
                "type": "org.primefaces.model.datepicker.DateMetadataModel"
            }
        ]
    },
    "p:avatar": {
        "name": "p:avatar",
        "description": "Avatar represents people using icons, labels and images.",
        "attributes": [
            {
                "name": "id",
                "description": "Unique identifier of the component in a namingContainer.",
                "type": "java.lang.String"
            },
            {
                "name": "rendered",
                "description": "Boolean value to specify the rendering of the component, when set to false component will not be rendered.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "binding",
                "description": "An el expression referring to a server side UIComponent instance in a backing bean.",
                "type": "javax.faces.component.UIComponent"
            },
            {
                "name": "label",
                "description": "Defines the text to display.",
                "type": "java.lang.String"
            },
            {
                "name": "icon",
                "description": "Defines the icon to display.",
                "type": "java.lang.String"
            },
            {
                "name": "size",
                "description": "Size of the element, valid options are \"large\" and \"xlarge\".",
                "type": "java.lang.String"
            },
            {
                "name": "shape",
                "description": "Shape of the element, valid options are \"square\" and \"circle\".",
                "type": "java.lang.String"
            },
            {
                "name": "dynamicColor",
                "description": "Dynamically assign contrasting foreground and background colors based on the label. Default is false.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "title",
                "description": "Advisory tooltip information.",
                "type": "java.lang.String"
            },
            {
                "name": "style",
                "description": "Inline style of the component.",
                "type": "java.lang.String"
            },
            {
                "name": "styleClass",
                "description": "Style class of the component.",
                "type": "java.lang.String"
            },
            {
                "name": "gravatar",
                "description": "Gravatar e-mail address for the profile to be displayed.",
                "type": "java.lang.String"
            },
            {
                "name": "gravatarConfig",
                "description": "Optional Gravatar configuration for any other Gravatar URL parameters.",
                "type": "java.lang.String"
            },
            {
                "name": "saturation",
                "description": "Saturation of dynamicColor (0 .. 100). Default is 100.",
                "type": "java.lang.Integer"
            },
            {
                "name": "lightness",
                "description": "Lightness of dynamicColor (0 .. 100). Default is 40.",
                "type": "java.lang.Integer"
            },
            {
                "name": "alpha",
                "description": "Alpha of dynamicColor (0 .. 100). Default is 100.",
                "type": "java.lang.Integer"
            }
        ]
    },
    "p:avatarGroup": {
        "name": "p:avatarGroup",
        "description": "A set of Avatars can be displayed together using this component.",
        "attributes": [
            {
                "name": "id",
                "description": "Unique identifier of the component in a namingContainer.",
                "type": "java.lang.String"
            },
            {
                "name": "rendered",
                "description": "Boolean value to specify the rendering of the component, when set to false component will not be rendered.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "binding",
                "description": "An el expression referring to a server side UIComponent instance in a backing bean.",
                "type": "javax.faces.component.UIComponent"
            },
            {
                "name": "style",
                "description": "Inline style of the component.",
                "type": "java.lang.String"
            },
            {
                "name": "styleClass",
                "description": "Style class of the component.",
                "type": "java.lang.String"
            }
        ]
    },
    "p:badge": {
        "name": "p:badge",
        "description": "Badge is a small status indicator for another element.",
        "attributes": [
            {
                "name": "id",
                "description": "Unique identifier of the component in a namingContainer.",
                "type": "java.lang.String"
            },
            {
                "name": "rendered",
                "description": "Boolean value to specify the rendering of the component, when set to false component will not be rendered.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "binding",
                "description": "An el expression referring to a server side UIComponent instance in a backing bean.",
                "type": "javax.faces.component.UIComponent"
            },
            {
                "name": "value",
                "description": "Value to display inside the badge.",
                "type": "java.lang.String"
            },
            {
                "name": "severity",
                "description": "Severity type of the badge.",
                "type": "java.lang.String"
            },
            {
                "name": "size",
                "description": "Size of the badge, valid options are \"large\" and \"xlarge\".",
                "type": "java.lang.String"
            },
            {
                "name": "style",
                "description": "Inline style of the component.",
                "type": "java.lang.String"
            },
            {
                "name": "styleClass",
                "description": "Style class of the component.",
                "type": "java.lang.String"
            },
            {
                "name": "visible",
                "description": "Whether to hide the badge (but render the children).",
                "type": "java.lang.Boolean"
            },
            {
                "name": "icon",
                "description": "Icon of the badge.",
                "type": "java.lang.String"
            },
            {
                "name": "iconPos",
                "description": "Position of the icon, default value is left.",
                "type": "java.lang.String"
            },
            {
                "name": "onclick",
                "description": "Client side callback to execute when the badge element clicked.",
                "type": "java.lang.String"
            }
        ]
    },
    "p:chip": {
        "name": "p:chip",
        "description": "Chip represents entities using icons, labels and images.",
        "attributes": [
            {
                "name": "id",
                "description": "Unique identifier of the component in a namingContainer.",
                "type": "java.lang.String"
            },
            {
                "name": "rendered",
                "description": "Boolean value to specify the rendering of the component, when set to false component will not be rendered.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "binding",
                "description": "An el expression referring to a server side UIComponent instance in a backing bean.",
                "type": "javax.faces.component.UIComponent"
            },
            {
                "name": "widgetVar",
                "description": "Name of the client side widget.",
                "type": "java.lang.String"
            },
            {
                "name": "label",
                "description": "Defines the text to display.",
                "type": "java.lang.String"
            },
            {
                "name": "icon",
                "description": "Defines the icon to display.",
                "type": "java.lang.String"
            },
            {
                "name": "image",
                "description": "Defines the image to display.",
                "type": "java.lang.String"
            },
            {
                "name": "removable",
                "description": "Whether to display a remove icon.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "removeIconClass",
                "description": "Icon of the remove element.",
                "type": "java.lang.String"
            },
            {
                "name": "style",
                "description": "Inline style of the component.",
                "type": "java.lang.String"
            },
            {
                "name": "styleClass",
                "description": "Style class of the component.",
                "type": "java.lang.String"
            }
        ]
    },
    "p:tag": {
        "name": "p:tag",
        "description": "Tag component is used to categorize content.",
        "attributes": [
            {
                "name": "id",
                "description": "Unique identifier of the component in a namingContainer.",
                "type": "java.lang.String"
            },
            {
                "name": "rendered",
                "description": "Boolean value to specify the rendering of the component, when set to false component will not be rendered.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "binding",
                "description": "An el expression referring to a server side UIComponent instance in a backing bean.",
                "type": "javax.faces.component.UIComponent"
            },
            {
                "name": "value",
                "description": "Value to display inside the tag.",
                "type": "java.lang.Object"
            },
            {
                "name": "converter",
                "description": "An el expression or a literal text that defines a converter for the component. When it's an EL expression, it's resolved to a converter instance.\n    In case it's a static text, it must refer to a converter id.",
                "type": "javax.faces.convert.Converter"
            },
            {
                "name": "severity",
                "description": "Severity type of the tag.",
                "type": "java.lang.String"
            },
            {
                "name": "rounded",
                "description": "Whether the corners of the tag are rounded.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "icon",
                "description": "Icon of the tag to display next to the value.",
                "type": "java.lang.String"
            },
            {
                "name": "style",
                "description": "Inline style of the component.",
                "type": "java.lang.String"
            },
            {
                "name": "styleClass",
                "description": "Style class of the component.",
                "type": "java.lang.String"
            }
        ]
    },
    "p:skeleton": {
        "name": "p:skeleton",
        "description": "Skeleton is a placeholder to display instead of the actual content.",
        "attributes": [
            {
                "name": "id",
                "description": "Unique identifier of the component in a namingContainer.",
                "type": "java.lang.String"
            },
            {
                "name": "rendered",
                "description": "Boolean value to specify the rendering of the component, when set to false component will not be rendered.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "binding",
                "description": "An el expression referring to a server side UIComponent instance in a backing bean.",
                "type": "javax.faces.component.UIComponent"
            },
            {
                "name": "shape",
                "description": "Shape of the element, options are \"rectangle\" and \"circle\".",
                "type": "java.lang.String"
            },
            {
                "name": "size",
                "description": "Size of the Circle or Square.",
                "type": "java.lang.String"
            },
            {
                "name": "width",
                "description": "Width of the element.",
                "type": "java.lang.String"
            },
            {
                "name": "height",
                "description": "Height of the element.",
                "type": "java.lang.String"
            },
            {
                "name": "borderRadius",
                "description": "Border radius of the element, defaults to value from theme.",
                "type": "java.lang.String"
            },
            {
                "name": "style",
                "description": "Inline style of the component.",
                "type": "java.lang.String"
            },
            {
                "name": "styleClass",
                "description": "Style class of the component.",
                "type": "java.lang.String"
            }
        ]
    },
    "p:divider": {
        "name": "p:divider",
        "description": "Divider is used to separate contents.",
        "attributes": [
            {
                "name": "id",
                "description": "Unique identifier of the component in a namingContainer.",
                "type": "java.lang.String"
            },
            {
                "name": "rendered",
                "description": "Boolean value to specify the rendering of the component, when set to false component will not be rendered.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "binding",
                "description": "An el expression referring to a server side UIComponent instance in a backing bean.",
                "type": "javax.faces.component.UIComponent"
            },
            {
                "name": "align",
                "description": "Alignment of the content, options are \"left\", \"center\", \"right\" for horizontal layout and \"top\", \"center\", \"bottom\" for vertical.",
                "type": "java.lang.String"
            },
            {
                "name": "layout",
                "description": "Specifies the orientation, valid values are \"horizontal\" and \"vertical\".",
                "type": "java.lang.String"
            },
            {
                "name": "type",
                "description": "Border style type, default is \"solid\" and other options are \"dashed\" and \"dotted\".",
                "type": "java.lang.String"
            },
            {
                "name": "title",
                "description": "Advisory tooltip information.",
                "type": "java.lang.String"
            },
            {
                "name": "style",
                "description": "Inline style of the component.",
                "type": "java.lang.String"
            },
            {
                "name": "styleClass",
                "description": "Style class of the component.",
                "type": "java.lang.String"
            }
        ]
    },
    "p:scrollTop": {
        "name": "p:scrollTop",
        "description": "ScrollTop gets displayed after a certain scroll position and used to navigates to the top of the page quickly.",
        "attributes": [
            {
                "name": "id",
                "description": "Unique identifier of the component in a namingContainer.",
                "type": "java.lang.String"
            },
            {
                "name": "rendered",
                "description": "Boolean value to specify the rendering of the component, when set to false component will not be rendered.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "binding",
                "description": "An el expression referring to a server side UIComponent instance in a backing bean.",
                "type": "javax.faces.component.UIComponent"
            },
            {
                "name": "widgetVar",
                "description": "Name of the client side widget.",
                "type": "java.lang.String"
            },
            {
                "name": "target",
                "description": "Target of the ScrollTop, valid values are \"window\" and \"parent\".",
                "type": "java.lang.String"
            },
            {
                "name": "threshold",
                "description": "Defines the threshold value of the vertical scroll position of the target to toggle the visibility.",
                "type": "java.lang.Integer"
            },
            {
                "name": "icon",
                "description": "Icon to display.",
                "type": "java.lang.String"
            },
            {
                "name": "behavior",
                "description": "Defines the scrolling behavior, \"smooth\" adds an animation and \"auto\" scrolls with a jump.",
                "type": "java.lang.String"
            },
            {
                "name": "style",
                "description": "Inline style of the component.",
                "type": "java.lang.String"
            },
            {
                "name": "styleClass",
                "description": "Style class of the component.",
                "type": "java.lang.String"
            }
        ]
    },
    "p:splitter": {
        "name": "p:splitter",
        "description": "Splitter is utilized to separate and resize panels.",
        "attributes": [
            {
                "name": "id",
                "description": "Unique identifier of the component in a namingContainer.",
                "type": "java.lang.String"
            },
            {
                "name": "rendered",
                "description": "Boolean value to specify the rendering of the component, when set to false component will not be rendered.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "binding",
                "description": "An el expression referring to a server side UIComponent instance in a backing bean.",
                "type": "javax.faces.component.UIComponent"
            },
            {
                "name": "widgetVar",
                "description": "Name of the client side widget.",
                "type": "java.lang.String"
            },
            {
                "name": "layout",
                "description": "Orientation of the panels, valid values are \"horizontal\" and \"vertical\".",
                "type": "java.lang.String"
            },
            {
                "name": "gutterSize",
                "description": "Size of the divider in pixels.",
                "type": "java.lang.Integer"
            },
            {
                "name": "step",
                "description": "Step size when pressing arrow keys to resize panel. Default is 5.",
                "type": "java.lang.Integer"
            },
            {
                "name": "stateKey",
                "description": "Storage identifier of a stateful Splitter.",
                "type": "java.lang.String"
            },
            {
                "name": "stateStorage",
                "description": "Defines where a stateful splitter keeps its state, valid values are \"session\" for sessionStorage and \"local\" for localStorage.",
                "type": "java.lang.String"
            },
            {
                "name": "onResizeEnd",
                "description": "Client-side callback to execute after resizing end.",
                "type": "java.lang.String"
            },
            {
                "name": "style",
                "description": "Inline style of the component.",
                "type": "java.lang.String"
            },
            {
                "name": "styleClass",
                "description": "Style class of the component.",
                "type": "java.lang.String"
            }
        ]
    },
    "p:splitterPanel": {
        "name": "p:splitterPanel",
        "description": "SplitterPanel is utilized by the Splitter component to separate content.",
        "attributes": [
            {
                "name": "id",
                "description": "Unique identifier of the component in a namingContainer.",
                "type": "java.lang.String"
            },
            {
                "name": "rendered",
                "description": "Boolean value to specify the rendering of the component, when set to false component will not be rendered.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "binding",
                "description": "An el expression referring to a server side UIComponent instance in a backing bean.",
                "type": "javax.faces.component.UIComponent"
            },
            {
                "name": "size",
                "description": "Size of the element relative to 100%.",
                "type": "java.lang.Integer"
            },
            {
                "name": "minSize",
                "description": "Minimum size of the element relative to 100%.",
                "type": "java.lang.Integer"
            },
            {
                "name": "style",
                "description": "Inline style of the component.",
                "type": "java.lang.String"
            },
            {
                "name": "styleClass",
                "description": "Style class of the component.",
                "type": "java.lang.String"
            },
            {
                "name": "tabindex",
                "description": "Position in the tabbing order.",
                "type": "java.lang.String"
            },
            {
                "name": "ariaLabel",
                "description": "Splitter handle ARIA label for screenreader support.",
                "type": "java.lang.String"
            },
            {
                "name": "ariaLabelledBy",
                "description": "Establishes relationships between the splitter and panel label element IDs.",
                "type": "java.lang.String"
            }
        ]
    },
    "p:card": {
        "name": "p:card",
        "description": "Card is a flexible container component.",
        "attributes": [
            {
                "name": "id",
                "description": "Unique identifier of the component in a namingContainer.",
                "type": "java.lang.String"
            },
            {
                "name": "rendered",
                "description": "Boolean value to specify the rendering of the component, when set to false component will not be rendered.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "binding",
                "description": "An el expression referring to a server side UIComponent instance in a backing bean.",
                "type": "javax.faces.component.UIComponent"
            },
            {
                "name": "style",
                "description": "Inline style of the component.",
                "type": "java.lang.String"
            },
            {
                "name": "styleClass",
                "description": "Style class of the component.",
                "type": "java.lang.String"
            },
            {
                "name": "header",
                "description": "Header text of the component.",
                "type": "java.lang.String"
            },
            {
                "name": "title",
                "description": "Title text of the component.",
                "type": "java.lang.String"
            },
            {
                "name": "subtitle",
                "description": "Subtitle text of the component.",
                "type": "java.lang.String"
            },
            {
                "name": "footer",
                "description": "Footer text of the component.",
                "type": "java.lang.String"
            }
        ]
    },
    "p:chronoline": {
        "name": "p:chronoline",
        "description": "Chronoline visualizes a series of chained events.",
        "attributes": [
            {
                "name": "id",
                "description": "Unique identifier of the component in a namingContainer.",
                "type": "java.lang.String"
            },
            {
                "name": "rendered",
                "description": "Boolean value to specify the rendering of the component, when set to false component will not be rendered.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "binding",
                "description": "An el expression referring to a server side UIComponent instance in a backing bean.",
                "type": "javax.faces.component.UIComponent"
            },
            {
                "name": "value",
                "description": "Collection of items.",
                "type": "java.lang.Object"
            },
            {
                "name": "var",
                "description": "Name of the iterator variable that references each element in the data set.",
                "type": "String"
            },
            {
                "name": "align",
                "description": "Position of the chronoline bar relative to the content. Valid values are \"left\", \"right\" for vertical layout and \"top\", \"bottom\" for horizontal layout.",
                "type": "java.lang.String"
            },
            {
                "name": "layout",
                "description": "Orientation of the chronoline, valid values are \"vertical\" and \"horizontal\".",
                "type": "java.lang.String"
            },
            {
                "name": "style",
                "description": "Inline style of the container element.",
                "type": "java.lang.String"
            },
            {
                "name": "styleClass",
                "description": "Style class of the container element.",
                "type": "java.lang.String"
            }
        ]
    },
    "p:confirmPopup": {
        "name": "p:confirmPopup",
        "description": "ConfirmPopup displays a confirmation overlay displayed relatively to its target.",
        "attributes": [
            {
                "name": "id",
                "description": "Unique identifier of the component in a namingContainer.",
                "type": "java.lang.String"
            },
            {
                "name": "rendered",
                "description": "Boolean value to specify the rendering of the component, when set to false component will not be rendered.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "binding",
                "description": "An el expression referring to a server side UIComponent instance in a backing bean.",
                "type": "javax.faces.component.UIComponent"
            },
            {
                "name": "widgetVar",
                "description": "Name of the client side widget.",
                "type": "java.lang.String"
            },
            {
                "name": "message",
                "description": "Text to be displayed in body.",
                "type": "java.lang.String"
            },
            {
                "name": "icon",
                "description": "Icon to display next to the message.",
                "type": "java.lang.String"
            },
            {
                "name": "style",
                "description": "Inner style of the popup container.",
                "type": "java.lang.String"
            },
            {
                "name": "styleClass",
                "description": "Style class of the popup container.",
                "type": "java.lang.String"
            },
            {
                "name": "appendTo",
                "description": "Appends the popup to the given search expression.",
                "type": "java.lang.String"
            },
            {
                "name": "showEffect",
                "description": "Effect to use when showing the popup.",
                "type": "java.lang.String"
            },
            {
                "name": "hideEffect",
                "description": "Effect to use when hiding the popup.",
                "type": "java.lang.String"
            },
            {
                "name": "global",
                "description": "When enabled, confirmPopup becomes a shared for other components that require confirmation.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "dismissable",
                "description": "Enables to hide the popup when outside is clicked.",
                "type": "java.lang.Boolean"
            }
        ]
    },
    "p:cascadeSelect": {
        "name": "p:cascadeSelect",
        "description": "CascadeSelect displays a nested structure of options.",
        "attributes": [
            {
                "name": "id",
                "description": "Unique identifier of the component in a namingContainer.",
                "type": "java.lang.String"
            },
            {
                "name": "rendered",
                "description": "Boolean value to specify the rendering of the component, when set to false component will not be rendered.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "binding",
                "description": "An el expression referring to a server side UIComponent instance in a backing bean.",
                "type": "javax.faces.component.UIComponent"
            },
            {
                "name": "value",
                "description": "Value of the component.",
                "type": "java.lang.Object"
            },
            {
                "name": "converter",
                "description": "An el expression or a literal text that defines a converter for the component. When it's an EL expression, it's resolved to a converter instance.\n    In case it's a static text, it must refer to a converter id.",
                "type": "javax.faces.convert.Converter"
            },
            {
                "name": "immediate",
                "description": "When set true, process validations logic is executed at apply request values phase for this component. Default is false.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "required",
                "description": "Marks component as required.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "validator",
                "description": "A method expression referring to a method validating the input.",
                "type": "javax.faces.validator.Validator"
            },
            {
                "name": "requiredMessage",
                "description": "Message to display when required field validation fails.",
                "type": "java.lang.String"
            },
            {
                "name": "converterMessage",
                "description": "Message to display when conversion fails.",
                "type": "java.lang.String"
            },
            {
                "name": "validatorMessage",
                "description": "Message to display when validation fails.",
                "type": "java.lang.String"
            },
            {
                "name": "var",
                "description": "Name of the iterator variable that references each element in the data set.",
                "type": "String"
            },
            {
                "name": "widgetVar",
                "description": "Name of the client side widget.",
                "type": "java.lang.String"
            },
            {
                "name": "appendTo",
                "description": "Appends the overlay to the element defined by search expression. Defaults to document body.",
                "type": "java.lang.String"
            },
            {
                "name": "placeholder",
                "description": "The placeholder attribute specifies a short hint that describes the expected value of an input field.",
                "type": "java.lang.String"
            },
            {
                "name": "disabled",
                "description": "Disables or enables the component.",
                "type": "boolean"
            },
            {
                "name": "readonly",
                "description": "Flag indicating that this component will prevent changes by the user.",
                "type": "boolean"
            },
            {
                "name": "tabindex",
                "description": "Position in the tabbing order.",
                "type": "java.lang.String"
            },
            {
                "name": "style",
                "description": "Inline style of the container element.",
                "type": "java.lang.String"
            },
            {
                "name": "styleClass",
                "description": "Style class of the container element.",
                "type": "java.lang.String"
            }
        ]
    },
    "p:speedDial": {
        "name": "p:speedDial",
        "description": "SpeedDial is a floating action button with a popup menu that can display multiple primary actions that can be performed on a page.",
        "attributes": [
            {
                "name": "id",
                "description": "Unique identifier of the component in a namingContainer.",
                "type": "java.lang.String"
            },
            {
                "name": "rendered",
                "description": "Boolean value to specify the rendering of the component, when set to false component will not be rendered.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "binding",
                "description": "An el expression referring to a server side UIComponent instance in a backing bean.",
                "type": "javax.faces.component.UIComponent"
            },
            {
                "name": "ariaLabel",
                "description": "The aria-label attribute is used to define a string that labels the current element for accessibility.",
                "type": "java.lang.String"
            },
            {
                "name": "title",
                "description": "Advisory tooltip information.",
                "type": "java.lang.String"
            },
            {
                "name": "visible",
                "description": "Specifies the visibility of the overlay.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "direction",
                "description": "Specifies the opening direction of actions. Valid values are 'up', 'down', 'left', 'right', 'up-left', 'up-right', 'down-left' and 'down-right'.",
                "type": "java.lang.String"
            },
            {
                "name": "transitionDelay",
                "description": "Transition delay step for each action item.",
                "type": "java.lang.Integer"
            },
            {
                "name": "type",
                "description": "Specifies the opening type of actions.",
                "type": "java.lang.String"
            },
            {
                "name": "radius",
                "description": "Radius for *circle types.",
                "type": "java.lang.Integer"
            },
            {
                "name": "mask",
                "description": "Whether to show a mask element behind the speeddial.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "disabled",
                "description": "Whether the component is disabled.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "hideOnClickOutside",
                "description": "Whether the actions close when clicked outside.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "widgetVar",
                "description": "Name of the client side widget.",
                "type": "java.lang.String"
            },
            {
                "name": "showIcon",
                "description": "Show icon of the button element.",
                "type": "java.lang.String"
            },
            {
                "name": "hideIcon",
                "description": "Hide icon of the button element.",
                "type": "java.lang.String"
            },
            {
                "name": "rotateAnimation",
                "description": "Defined to rotate the showIcon (and hideIcon).",
                "type": "java.lang.Boolean"
            },
            {
                "name": "style",
                "description": "Inline style of the container element.",
                "type": "java.lang.String"
            },
            {
                "name": "styleClass",
                "description": "Style class of the container element.",
                "type": "java.lang.String"
            },
            {
                "name": "buttonStyle",
                "description": "Inline style of the button element.",
                "type": "java.lang.String"
            },
            {
                "name": "buttonStyleClass",
                "description": "Style class of the button element.",
                "type": "java.lang.String"
            },
            {
                "name": "maskStyle",
                "description": "Inline style of the mask element.",
                "type": "java.lang.String"
            },
            {
                "name": "maskStyleClass",
                "description": "Style class of the mask element.",
                "type": "java.lang.String"
            },
            {
                "name": "onVisibleChange",
                "description": "Client side callback to execute when the visibility of element changed.",
                "type": "java.lang.String"
            },
            {
                "name": "onClick",
                "description": "Client side callback to execute when the button element clicked.",
                "type": "java.lang.String"
            },
            {
                "name": "onShow",
                "description": "Client side callback to execute when the actions are visible.",
                "type": "java.lang.String"
            },
            {
                "name": "onHide",
                "description": "Client side callback to execute when the actions are hidden.",
                "type": "java.lang.String"
            },
            {
                "name": "model",
                "description": "MenuModel instance to create action items dynamically.",
                "type": "org.primefaces.model.menu.MenuModel"
            },
            {
                "name": "keepOpen",
                "description": "Whether the menu should be kept open on clicking menu items. Default value is false.",
                "type": "java.lang.Boolean"
            },
            {
                "name": "badge",
                "description": "Badge value (String) or BadgeModel instance of the badge to render for this SpeedDial. Default value is null.",
                "type": "java.lang.Object"
            }
        ]
    }
};
