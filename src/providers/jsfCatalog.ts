export interface JsfAttribute {
    name: string;
    description: string;
    type?: string;
}

export interface JsfTag {
    name: string;
    description: string;
    attributes: JsfAttribute[];
}

export const JSF_CATALOG: Record<string, JsfTag> = {
    "f:actionListener": {
        "name": "f:actionListener",
        "description": "Register an ActionListener instance on the  UIComponent associated with the closest parent UIComponent  tag.</p>",
        "attributes": [
            {
                "name": "binding",
                "description": "Value binding expression that evaluates to an object that  implements jakarta.faces.event.ActionListener.",
                "type": "string"
            },
            {
                "name": "for",
                "description": "<p class=\"changed_added_2_0\">If present, this attribute  refers  to the value of one of the exposed attached objects within the  composite component inside of which this tag is nested.</p>",
                "type": "string"
            },
            {
                "name": "type",
                "description": "Fully qualified Java class name of an ActionListener to be  created and registered.",
                "type": "string"
            }
        ]
    },
    "f:ajax": {
        "name": "f:ajax",
        "description": "<p class=\"changed_added_2_0\">Register an  AjaxBehavior instance on one or more UIComponents implementing  the ClientBehaviorHolder interface. This tag may be nested  witin a single component (enabling Ajax for a single component),  or it may be \"wrapped\" around multiple components (enabling Ajax  for many components).</p>",
        "attributes": [
            {
                "name": "delay",
                "description": "<p class=\"changed_added_2_2\">If less than  <em>delay</em> milliseconds elapses between calls to  <em>request()</em> only the most recent one is sent and all other  requests are discarded. If this option is not specified, or if the  value of <em>delay</em> is the literal string `'none'`  without the quotes, no delay is used. </p>",
                "type": "string"
            },
            {
                "name": "disabled",
                "description": "<p class=\"changed_added_2_0\">A value of \"true\" indicates  the  AjaxBehavior should not be rendered. A value of \"false\"  indicates  the AjaxBehavior should be rendered. \"false\" is the default.</p>",
                "type": "boolean"
            },
            {
                "name": "event",
                "description": "<p class=\"changed_added_2_0\">A String or  ValueExpression (that evalulates to a String) identifying the type of event  the Ajax action will apply to. If specified, it must be one of the  events supported by the component the Ajax behavior is being applied to.  For HTML components this would be the set of supported DOM events for the  component, plus \"action\" for Faces ActionSource components and \"valueChange\"  for Faces EditableValueHolder components. If not specified, the default  event is determined for the component. The DOM event name is the actual DOM  event name (for example: \"click\") as opposed to (for example: \"onclick\").</p>",
                "type": "string"
            },
            {
                "name": "execute",
                "description": "<p class=\"changed_added_2_0\">Evaluates to  Collection<String>. This is a space separated list of  search expressions to  components that will participate in the \"execute\"  portion of the Request Processing Lifecycle. See the javadoc for  `SearchKeywordResolver` for the complete list of  keywords. If a literal is specified the ids must be  space delimited. If  not specified, the default value of \"@this\" is assumed. For  example, `@this clientIdOne clientIdTwo`.</p>",
                "type": "string"
            },
            {
                "name": "immediate",
                "description": "<p class=\"changed_added_2_0\">If \"true\" behavior events  generated from this behavior  are broadcast during Apply Request Values phase. Otherwise, the  events will be  broadcast during Invoke Aplications phase</p>",
                "type": "boolean"
            },
            {
                "name": "listener",
                "description": "<p class=\"changed_added_2_0\">Method expression referencing  a method  that will be called when an AjaxBehaviorEvent has been  broadcast for the listener.</p>",
                "type": "string"
            },
            {
                "name": "onerror",
                "description": "<p class=\"changed_added_2_0\">The name of the JavaScript  function that will handle errors.</p>",
                "type": "string"
            },
            {
                "name": "onevent",
                "description": "<p class=\"changed_added_2_0\">The name of the JavaScript  function that will handle UI events.</p>",
                "type": "string"
            },
            {
                "name": "render",
                "description": "<p class=\"changed_added_2_0\">Evaluates to  Collection<String>. The search expressions to  components that will participate in the \"render\" portion  of the Request Processing Lifecycle. See the javadoc for  `SearchKeywordResolver` for the complete list of  keywords. If a literal is specified the identifiers must  be space delimited. If not specified, the  default value of \"@none\" is assumed. For example, `@this  clientIdOne clientIdTwo`.</p>",
                "type": "string"
            },
            {
                "name": "resetValues",
                "description": "<p class=\"changed_added_2_2\">Reset specific input values.  Interpret the value of the `render` attribute as  a space separated list of client identifiers suitable for  passing directly to `UIViewRoot.resetValues()`.  The implementation must cause an `ActionListener`  to be attached to the `ActionSource` component  in which this tag is nested that calls  `UIViewRoot.resetValues()` passing the value of  the `render` attribute as the argument.</p>",
                "type": "boolean"
            }
        ]
    },
    "f:attribute": {
        "name": "f:attribute",
        "description": "Add an attribute to the UIComponent associated with the closest  parent UIComponent tag.</p>",
        "attributes": [
            {
                "name": "name",
                "description": "The name of the component attribute to be set.</p>",
                "type": "string"
            },
            {
                "name": "value",
                "description": "The value of the component attribute to be set.</p>",
                "type": "string"
            }
        ]
    },
    "f:attributes": {
        "name": "f:attributes",
        "description": "<p class=\"changed_added_2_2\">  Add attributes to the UIComponent associated with the closest  parent UIComponent tag.  For each `Map.Entry` in the `Map<String, Object>`  referenced by the value attribute of this tag, take the following action.  If `parent.getAttributes().containsKey(entry.getKey())` returns  `true`, take no action for this entry. Otherwise, if  `entry.getValue()` is a `ValueExpression` call  `parent.setValueExpression(entry.getKey(), entry.getValue())`.  Otherwise, call `parent.getAttributes.put(entry.getKey(), entry.getValue()).`  </p>",
        "attributes": [
            {
                "name": "value",
                "description": "<p class=\"changed_added_2_2\">An EL `ValueExpression` that evaluates to a `Map<String, Object>`.</p>",
                "type": "string"
            }
        ]
    },
    "f:convertDateTime": {
        "name": "f:convertDateTime",
        "description": "Register a  DateTimeConverter instance on the UIComponent associated  with the closest parent UIComponent tag.</p>",
        "attributes": [
            {
                "name": "binding",
                "description": "A ValueExpression that evaluates to an instance of  jakarta.faces.convert.DateTimeConverter.</p>",
                "type": "string"
            },
            {
                "name": "dateStyle",
                "description": "Predefined  formatting style which determines how the date component  of a date string is to be formatted and parsed. Applied  only if type is \"date\", \"both\", \"localDate\",  \"localDateTime\", or \"zonedDateTime\". Valid values  are \"default\", \"short\", \"medium\", \"long\", and \"full\".  Default value is \"default\". If a `java.time`  formatter is being used, yet the dateStyle is set to \"default\",  the value \"medium\" is assumed.</p>",
                "type": "string"
            },
            {
                "name": "for",
                "description": "<p class=\"changed_added_2_0\">If present, this attribute  refers  to the value of one of the exposed attached objects within the  composite component inside of which this tag is nested.</p>",
                "type": "string"
            },
            {
                "name": "locale",
                "description": "Locale whose predefined styles for dates and times are used  during formatting or parsing. If not specified, the Locale  returned by FacesContext.getViewRoot().getLocale() will be used.  Value must be either a VB expression that evaluates to a  java.util.Locale instance, or a String that is valid to pass as  the first argument to the constructor java.util.Locale(String  language, String country). The empty string is passed as the  second argument.</p>",
                "type": "string"
            },
            {
                "name": "pattern",
                "description": "Custom formatting pattern which determines how the  date/time string should be formatted and parsed.</p>",
                "type": "string"
            },
            {
                "name": "timeStyle",
                "description": "Predefined  formatting style which determines how the time component of a  date string is to be formatted and  parsed. Applied only if type is \"time\", \"both\",  \"localTime\" or  \"offsetTime\".  Valid values are \"default\", \"short\", \"medium\", \"long\",  and \"full\". Default value is \"default\". If a `java.time`  formatter is being used, yet the timeStyle is set to \"default\",  the value \"medium\" is assumed.</p>",
                "type": "string"
            },
            {
                "name": "timeZone",
                "description": "Time zone in which to interpret any time information in the date  String. Value must be either a ValueExpression that evaluates to  a java.util.TimeZone instance, or a String that is a timezone ID  as described in the javadocs for  java.util.TimeZone.getTimeZone().</p>",
                "type": "string"
            },
            {
                "name": "type",
                "description": "Specifies what  contents the string value will be formatted to include, or  parsed expecting. Valid values are \"date\", \"time\",  \"both\", \"localDate\",  \"localDateTime\", \"localTime\", \"offsetTime\",  \"offsetDateTime\", and \"zonedDateTime\". The values starting  with \"local\", \"offset\" and \"zoned\" correspond to Java SE 8  Date Time API classes in package `java.time` with  the name derived by upper casing the first letter. For  example, `java.time.LocalDate` for the value  \"localDate\". Default value is \"date\".</p>",
                "type": "string"
            }
        ]
    },
    "f:convertNumber": {
        "name": "f:convertNumber",
        "description": "Register a NumberConverter instance on the UIComponent associated  with the closest parent UIComponent tag.",
        "attributes": [
            {
                "name": "binding",
                "description": "A ValueExpression that evaluates to an instance of  jakarta.faces.convert.NumberConverter.</p>",
                "type": "string"
            },
            {
                "name": "currencyCode",
                "description": "ISO 4217 currency code, applied only when  formatting currencies.</p>",
                "type": "string"
            },
            {
                "name": "currencySymbol",
                "description": "Currency symbol, applied only when formatting  currencies.</p>",
                "type": "string"
            },
            {
                "name": "for",
                "description": "<p class=\"changed_added_2_0\">If present, this attribute  refers  to the value of one of the exposed attached objects within the  composite component inside of which this tag is nested.</p>",
                "type": "string"
            },
            {
                "name": "groupingUsed",
                "description": "Flag specifying whether formatted output will  contain grouping separators. Expressions must  evaluate to a boolean. Default value  is true.</p>",
                "type": "boolean"
            },
            {
                "name": "integerOnly",
                "description": "Flag specifying whether only the integer part  of the value will be formatted and parsed.  Expressions must evaluate to a boolean.  Default value is false.</p>",
                "type": "boolean"
            },
            {
                "name": "locale",
                "description": "Locale  whose  predefined styles for numbers are used during formatting  and parsing. If not specified, the Locale returned by  FacesContext.getViewRoot().getLocale() will be used.  Expressions must evaluate to a java.util.Locale or a String that is valid to  pass as the first argument to the constructor  java.util.Locale(String language, String country). The  empty string is passed as the second argument.</p>",
                "type": "string"
            },
            {
                "name": "maxFractionDigits",
                "description": "Maximum number of digits that will be formatted  in the fractional portion of the output. Expressions  must evaluate to an int.</p>",
                "type": "string"
            },
            {
                "name": "maxIntegerDigits",
                "description": "Maximum number of digits that will be formatted  in the integer portion of the output. Expressions  must evaluate to an int.</p>",
                "type": "string"
            },
            {
                "name": "minFractionDigits",
                "description": "Minimum number of digits that will be formatted  in the fractional portion of the output. Expressions  must evaluate to an int.</p>",
                "type": "string"
            },
            {
                "name": "minIntegerDigits",
                "description": "Minimum number of digits that will be formatted  in the integer portion of the output. Expressions  must evaluate to an int.</p>",
                "type": "string"
            },
            {
                "name": "pattern",
                "description": "Custom formatting pattern which determins how the  number string should be formatted and parsed.</p>",
                "type": "string"
            },
            {
                "name": "type",
                "description": "Specifies how the number string will be formatted  and parsed. Valid values are \"number\", \"currency\",  and \"percent\". Default value is \"number\".</p>",
                "type": "string"
            }
        ]
    },
    "f:converter": {
        "name": "f:converter",
        "description": "Register a named Converter instance on the UIComponent  associated with the closest parent UIComponent tag.</p>",
        "attributes": [
            {
                "name": "binding",
                "description": "A ValueExpression that evaluates to an object that  implements jakarta.faces.convert.Converter.</p>",
                "type": "string"
            },
            {
                "name": "converterId",
                "description": "Converter identifier of the Converter instance to be  created and registered.",
                "type": "string"
            },
            {
                "name": "for",
                "description": "<p class=\"changed_added_2_0\">If present, this attribute  refers  to the value of one of the exposed attached objects within the  composite component inside of which this tag is nested.</p>",
                "type": "string"
            }
        ]
    },
    "f:event": {
        "name": "f:event",
        "description": "<p class=\"changed_added_2_0\">Allow Jakarta Faces page authors to  install `ComponentSystemEventListener`  instances  on a component in a page.</p>",
        "attributes": [
            {
                "name": "listener",
                "description": "<p class=\"changed_modified_2_0_rev_a\">The expression must  evaluate to a public method that takes a  `ComponentSystemEvent` parameter, with a return  type of void, or to a public method that takes no  arguments with a return type of void. In the latter case,  the method has no way of easily knowing where the event  came from, but this can be useful in cases where a  notification is needed that \"an event happened\".</p>",
                "type": "string"
            },
            {
                "name": "type",
                "description": "<p class=\"changed_added_2_0\">Name of the event for which  to install a listener. The following table lists the  valid values for this attribute, and the corresponding  event type for which the listener action is  registered.</p>",
                "type": "string"
            }
        ]
    },
    "f:facet": {
        "name": "f:facet",
        "description": "Register a named  facet on the UIComponent associated with the closest parent  UIComponent tag.</p>",
        "attributes": [
            {
                "name": "name",
                "description": "Name of the facet to be created.</p>",
                "type": "string"
            }
        ]
    },
    "f:importConstants": {
        "name": "f:importConstants",
        "description": "<p class=\"changed_added_2_3\">  Used inside of the metadata facet of a view, this tag will import a mapping of all constant field values of the given type in the current view.  Constant field values are all `public static final` fields of the given type.  The map key represents the constant field name as `String`.  The map value represents the actual constant field value.  This works for classes, interfaces and enums.  </p>",
        "attributes": [
            {
                "name": "type",
                "description": "The fully qualified name of the type to import the constant field values for.  </p>",
                "type": "string"
            },
            {
                "name": "var",
                "description": "Name of request scope attribute under which constants will be exposed as a Map.  Defaults to the simple name of the given type.  </p>",
                "type": "string"
            }
        ]
    },
    "f:loadBundle": {
        "name": "f:loadBundle",
        "description": "Load a resource bundle localized for the Locale of the current  view, and expose it as a java.util.Map in the request attributes  of the current request under the key specified by the value of the  \"var\" attribute of this tag. The Map must behave such that if a  get() call is made for a key that does not exist in the Map, the  literal string ???KEY??? is returned from the Map, where KEY is  the key being looked up in the Map, instead of a  MissingResourceException being thrown. If the ResourceBundle does  not exist, a TagAttributeException must be thrown.</p>",
        "attributes": [
            {
                "name": "basename",
                "description": "Base name of the resource bundle  to be loaded.</p>",
                "type": "string"
            },
            {
                "name": "var",
                "description": "Name of a request scope attribute under which  the resource bundle will be exposed as a Map.</p>",
                "type": "string"
            }
        ]
    },
    "f:metadata": {
        "name": "f:metadata",
        "description": "<p class=\"changed_added_2_0\">Declare the metadata  facet for this view. This must be a child of the  `<f:view>`. This tag  must reside within the top level XHTML file for the given  viewId, or in a  template client, but not in a template. The  implementation must insure that the direct child of the  facet is a `UIPanel`, even if there  is only one child of the facet. The implementation must set  the id of the `UIPanel` to be the  value of the  `UIViewRoot.METADATA_FACET_NAME`  symbolic constant.</p>",
        "attributes": []
    },
    "f:param": {
        "name": "f:param",
        "description": "Add a child UIParameter  component to the UIComponent associated with the closest parent  UIComponent tag.</p>",
        "attributes": [
            {
                "name": "binding",
                "description": "ValueExpression to a backing bean  property bound to the component instance for  the UIComponent created by this tag.</p>",
                "type": "string"
            },
            {
                "name": "disable",
                "description": "Flag enabling or disabling the inclusion of the  parameter. This flag is  consulted by renderers that consider the  `UIParameter` component associated with this  `<f:param>` during their rendering.  Such renderers include `jakarta.faces.Output  jakarta.faces.Link` and  `jakarta.faces.OutcomeTarget  jakarta.faces.Link`.</p>",
                "type": "string"
            },
            {
                "name": "id",
                "description": "Component identifier of the UIParameter component  to be created.</p>",
                "type": "string"
            },
            {
                "name": "name",
                "description": "Name of the parameter to be created.</p>",
                "type": "string"
            },
            {
                "name": "value",
                "description": "Value of the parameter to be set.</p>",
                "type": "string"
            }
        ]
    },
    "f:passThroughAttribute": {
        "name": "f:passThroughAttribute",
        "description": "<p class=\"changed_added_2_2\">Add an attribute to the  `passThroughAttributes Map` of the `UIComponent`  associated with the closest parent `UIComponent` tag.</p>",
        "attributes": [
            {
                "name": "name",
                "description": "<p class=\"changed_added_2_2\">The name  of the pass through attribute. An attribute with this name,  and the corresponding value will appear on the outer most  markup element in the rendered markup for the component, as  specified in the overview for the HTML_BASIC RenderKit. If  the name of this attribute conflicts with  `Renderer` specific attribute, the value  specified here supercedes the one that would otherwise be  rendered by the `Renderer`</p>",
                "type": "string"
            },
            {
                "name": "value",
                "description": "<p class=\"changed_added_2_2\">The value  of the pass through attribute. </p>",
                "type": "string"
            }
        ]
    },
    "f:passThroughAttributes": {
        "name": "f:passThroughAttributes",
        "description": "<p class=\"changed_added_2_2\">An EL `ValueExpression` that evaluates to a `Map<String, Object>`.</p>",
        "attributes": [
            {
                "name": "value",
                "description": "<p class=\"changed_added_2_2\">An EL `ValueExpression` that evaluates to a `Map<String, Object>`.</p>",
                "type": "string"
            }
        ]
    },
    "f:phaseListener": {
        "name": "f:phaseListener",
        "description": "Register a PhaseListener instance on the UIViewRoot in which  this tag is nested.</p>",
        "attributes": [
            {
                "name": "binding",
                "description": "Value binding expression that evaluates to an object that  implements jakarta.faces.event.PhaseListener.</p>",
                "type": "string"
            },
            {
                "name": "type",
                "description": "Fully qualified Java class name of a PhaseListener to be  created and registered.</p>",
                "type": "string"
            }
        ]
    },
    "f:selectItem": {
        "name": "f:selectItem",
        "description": "Add a child UISelectItem component to the UIComponent  associated with the closest parent UIComponent tag.</p>",
        "attributes": [
            {
                "name": "binding",
                "description": "Value binding expression to a backing bean  property bound to the component instance for  the UIComponent created by this tag.</p>",
                "type": "string"
            },
            {
                "name": "id",
                "description": "Component identifier of the UISelectItem  component to be created.</p>",
                "type": "string"
            },
            {
                "name": "itemDescription",
                "description": "Description of this option, for use in  development tools.</p>",
                "type": "string"
            },
            {
                "name": "itemDisabled",
                "description": "Flag indicating whether the option created  by this component is disabled. Expressions  must evaluate to a boolean. Default value  is false.</p>",
                "type": "boolean"
            },
            {
                "name": "itemEscaped",
                "description": "Flag indicating that characters that are sensitive in  the value of the `itemLabel`  attribute must be escaped. This flag is set to \"true\" by  default.</p>",
                "type": "string"
            },
            {
                "name": "itemLabel",
                "description": "Label to be displayed to the user  for this option.</p>",
                "type": "string"
            },
            {
                "name": "itemValue",
                "description": "Value to be returned to the server if this  option is selected by the user.</p>",
                "type": "string"
            },
            {
                "name": "noSelectionOption",
                "description": "Flag indicating whether the option created by this  component represents the special \"no selection\"  option. Expressions must evaluate to a boolean.  Default value is false.</p>",
                "type": "boolean"
            },
            {
                "name": "value",
                "description": "Value binding expression pointing at a  SelectItem instance containing the  information for this option.</p>",
                "type": "string"
            }
        ]
    },
    "f:selectItems": {
        "name": "f:selectItems",
        "description": "Add a  child UISelectItems component to the UIComponent associated  with the closed parent UIComponent tag.</p>",
        "attributes": [
            {
                "name": "binding",
                "description": "Value binding expression to a backing bean  property bound to the component instance for  the UIComponent created by this tag.</p>",
                "type": "string"
            },
            {
                "name": "id",
                "description": "Component identifier of the UISelectItems  component to be created.",
                "type": "string"
            },
            {
                "name": "itemDescription",
                "description": "<p class=\"changed_added_2_0\">evaluates to a String that  will  serve as the description to be shown for the item.</p>",
                "type": "string"
            },
            {
                "name": "itemDisabled",
                "description": "<p class=\"changed_added_2_0\">evaluates to a boolean that  will  determine if the item value is selectable or not.</p>",
                "type": "boolean"
            },
            {
                "name": "itemLabel",
                "description": "<p class=\"changed_added_2_0\">evaluates to a String that  will  serve as the label to be shown for the item.</p>",
                "type": "string"
            },
            {
                "name": "itemLabelEscaped",
                "description": "<p class=\"changed_added_2_0\">evaluates to a boolean that will determine if the rendered markup for the item receives normal Faces HTML escaping or not. If not specified, the runtime must behave as if the value were `true`.</p>",
                "type": "boolean"
            },
            {
                "name": "itemValue",
                "description": "<p class=\"changed_added_2_0\">This attribute lets you refer  to a property of the current member of the collection  referenced by the \"value\" attribute, using the value of the  \"var\" attribute as the base. For example,  #{n.id}.</p>",
                "type": "string"
            },
            {
                "name": "noSelectionValue",
                "description": "<p class=\"changed_added_2_0\">Is either an EL  expression pointing to the element in the value collection  whose value should be marked as a &#8220;no selection&#8221;  item, or a literal string that exactly matches the value of  the item in the collection that must be marked as the  &#8220;no selection&#8221; item. If the user selects such  an item **and** the field is marked as  required, then it will not pass validation.</p>",
                "type": "boolean"
            },
            {
                "name": "value",
                "description": "Value expression pointing at any `Collection`  or array. The member elements may be instances of  `SelectItem` or any Java Object. In the  case where the member elements are plain Java Objects,  several additional attributes must be used by the page  author to correctly identify the data to the enclosing  `UISelectOne` or `UISelectMany`  component, as shown in the following example.",
                "type": "string"
            },
            {
                "name": "var",
                "description": "<p class=\"changed_added_2_0\">Expose the value from the  `value` attribute under this request  scoped key so that it  may be referred to in EL for the value of other attributes.</p>",
                "type": "string"
            }
        ]
    },
    "f:selectItemGroup": {
        "name": "f:selectItemGroup",
        "description": "<p class=\"changed_added_4_0\">  **UISelectItemGroup** is a component that may be nested inside a `UISelectMany` or `UISelectOne` component,  and causes the addition of one `SelectItemGroup` of one or more `SelectItem` instances to the list of available options in the parent component.  This component accepts only children of type `UISelectItems` or `UISelectItem`.  </p>",
        "attributes": [
            {
                "name": "id",
                "description": "Component identifier of the `UISelectItemGroup` component to be created.",
                "type": "string"
            },
            {
                "name": "binding",
                "description": "Value binding expression to a backing bean property bound to the component instance for the `UIComponent` created by this tag.",
                "type": "string"
            },
            {
                "name": "itemLabel",
                "description": "Label to be displayed to the user for this option group.",
                "type": "string"
            }
        ]
    },
    "f:selectItemGroups": {
        "name": "f:selectItemGroups",
        "description": "<p class=\"changed_added_4_0\">  **UISelectItemGroups** is a component that may be nested inside a `UISelectMany` or `UISelectOne` component,  and causes the addition of one or more `SelectItemGroup` of one or more `SelectItem` instances to the list of available options in the parent component.  This component accepts only children of type `UISelectItems` or `UISelectItem`.  </p>",
        "attributes": [
            {
                "name": "id",
                "description": "Component identifier of the `UISelectItemGroups` component to be created.",
                "type": "string"
            },
            {
                "name": "binding",
                "description": "Value binding expression to a backing bean property bound to the component instance for the `UIComponent` created by this tag.",
                "type": "string"
            },
            {
                "name": "value",
                "description": "Value expression pointing at any array or `Iterable`.  The member elements may be instances of any type which is acceptable by the `value` attribute of any nested `UISelectItems` or `UISelectItem` component.",
                "type": "string"
            },
            {
                "name": "var",
                "description": "Expose the currently iterated member element from the `value` attribute under this request scoped key,  so that it may be referred to in EL for the value of other attributes of any nested component.",
                "type": "string"
            },
            {
                "name": "itemLabel",
                "description": "Label to be displayed to the user for this option group.",
                "type": "string"
            },
            {
                "name": "itemDisabled",
                "description": "Flag indicating whether the option group created by this component is disabled.  Expressions must evaluate to a `boolean`.  Default value is `false`.",
                "type": "boolean"
            }
        ]
    },
    "f:setPropertyActionListener": {
        "name": "f:setPropertyActionListener",
        "description": "Register an ActionListener instance on the UIComponent  associated with the closest parent UIComponent tag.  This actionListener will cause the value given by the \"value\"  attribute to be set into the ValueExpression given by the \"target\"  attribute.</p>",
        "attributes": [
            {
                "name": "for",
                "description": "<p class=\"changed_added_2_0\">If present, this attribute  refers  to the value of one of the exposed attached objects within the  composite component inside of which this tag is nested.</p>",
                "type": "string"
            },
            {
                "name": "target",
                "description": "ValueExpression that is the destination of the value  attribute.</p>",
                "type": "string"
            },
            {
                "name": "value",
                "description": "ValueExpression to be stored as the value of the target  attribute.</p>",
                "type": "string"
            }
        ]
    },
    "f:subview": {
        "name": "f:subview",
        "description": "<p class=\"changed_modified_4_0\">Naming Container tag for all Jakarta Faces core and  component tags. It is particularly useful when a nested section included via  <ui:include> or any tag that dynamically includes another  page is included more than once, potentially causing duplicate component IDs.  Each of those nested sections can then be wrapped in its own <f:subview>  with each an unique id.</p>",
        "attributes": [
            {
                "name": "binding",
                "description": "Value binding expression to a backing bean  property bound to the component instance for  the UIComponent created by this tag.</p>",
                "type": "string"
            },
            {
                "name": "id",
                "description": "Component identifier of the UINamingContainer  component to be created.</p>",
                "type": "string"
            },
            {
                "name": "rendered",
                "description": "Flag indicating whether this component (and its  children) should be rendered. Expressions must  evaluate to a boolean.</p>",
                "type": "boolean"
            }
        ]
    },
    "f:validateBean": {
        "name": "f:validateBean",
        "description": "A validator that  delegates the validation of the local value to the Bean  Validation API. The validationGroups attribute serves as a  filter that instructs the Bean Validation API which  contraints to enforce. If there are any constraint  violations reported by Bean Validation, the value is  considered invalid. An  instance of this validator can participate in class-level  validation provided the preconditions mentioned in  `<f:validateWholeBean />` are met. Please  see the documentation for `<f:validateWholeBean  />` and  `jakarta.faces.validator.BeanValidator.validate()` for  the specification and usage example.</p>",
        "attributes": [
            {
                "name": "binding",
                "description": "A ValueExpression that evaluates to an instance of  BeanValidator.</p>",
                "type": "string"
            },
            {
                "name": "disabled",
                "description": "<p class=\"changed_added_2_0\">A boolean value  enabling page level determination of whether or not this  validator is enabled on the enclosing component.</p>",
                "type": "boolean"
            },
            {
                "name": "for",
                "description": "<p class=\"changed_added_2_0\">If present, this attribute  refers  to the value of one of the exposed attached objects within the  composite component inside of which this tag is nested.</p>",
                "type": "string"
            },
            {
                "name": "validationGroups",
                "description": "A comma-separated list of validation groups. A validation group  is a fully-qualified class name.</p>",
                "type": "string"
            }
        ]
    },
    "f:validateDoubleRange": {
        "name": "f:validateDoubleRange",
        "description": "Register a DoubleRangeValidator instance on the  UIComponent associated with the closest parent  UIComponent tag.</p>",
        "attributes": [
            {
                "name": "binding",
                "description": "A ValueExpression that evaluates to an instance of  DoubleRangeValidator.</p>",
                "type": "string"
            },
            {
                "name": "disabled",
                "description": "<p class=\"changed_added_2_0\">A boolean value  enabling page level determination of whether or not this  validator is enabled on the enclosing component.</p>",
                "type": "boolean"
            },
            {
                "name": "for",
                "description": "<p class=\"changed_added_2_0\">If present, this attribute  refers  to the value of one of the exposed attached objects within the  composite component inside of which this tag is nested.</p>",
                "type": "string"
            },
            {
                "name": "maximum",
                "description": "Maximum value allowed for this component.</p>",
                "type": "string"
            },
            {
                "name": "minimum",
                "description": "Minimum value allowed for this component.</p>",
                "type": "string"
            }
        ]
    },
    "f:validateLength": {
        "name": "f:validateLength",
        "description": "Register a LengthValidator instance on the  UIComponent associated with the closest parent  UIComponent tag.</p>",
        "attributes": [
            {
                "name": "binding",
                "description": "A ValueExpression that evaluates to an instance of  LengthValidator.</p>",
                "type": "string"
            },
            {
                "name": "disabled",
                "description": "<p class=\"changed_added_2_0\">A boolean value  enabling page level determination of whether or not this  validator is enabled on the enclosing component.</p>",
                "type": "boolean"
            },
            {
                "name": "for",
                "description": "<p class=\"changed_added_2_0\">If present, this attribute  refers  to the value of one of the exposed attached objects within the  composite component inside of which this tag is nested.</p>",
                "type": "string"
            },
            {
                "name": "maximum",
                "description": "Maximum length allowed for this component.</p>",
                "type": "string"
            },
            {
                "name": "minimum",
                "description": "Minimum length allowed for this component.</p>",
                "type": "string"
            }
        ]
    },
    "f:validateLongRange": {
        "name": "f:validateLongRange",
        "description": "Register a LongRangeValidator instance on the  UIComponent associated with the closest parent  UIComponent tag.</p>",
        "attributes": [
            {
                "name": "binding",
                "description": "A ValueExpression that evaluates to an instance of  LongRangeValidator.",
                "type": "string"
            },
            {
                "name": "disabled",
                "description": "<p class=\"changed_added_2_0\">A boolean value  enabling page level determination of whether or not this  validator is enabled on the enclosing component.</p>",
                "type": "boolean"
            },
            {
                "name": "for",
                "description": "<p class=\"changed_added_2_0\">If present, this attribute  refers  to the value of one of the exposed attached objects within the  composite component inside of which this tag is nested.</p>",
                "type": "string"
            },
            {
                "name": "maximum",
                "description": "Maximum value allowed for this component.</p>",
                "type": "string"
            },
            {
                "name": "minimum",
                "description": "Minimum value allowed for this component.</p>",
                "type": "string"
            }
        ]
    },
    "f:validateRegex": {
        "name": "f:validateRegex",
        "description": "A validator that uses the pattern attribute to validate the  wrapping component. The entire pattern is matched against  the String value of the component. If it matches, it's  valid.",
        "attributes": [
            {
                "name": "binding",
                "description": "A ValueExpression that evaluates to an instance of  RegexValidator.</p>",
                "type": "string"
            },
            {
                "name": "for",
                "description": "<p class=\"changed_added_2_0\">If present, this attribute  refers  to the value of one of the exposed attached objects within the  composite component inside of which this tag is nested.</p>",
                "type": "string"
            },
            {
                "name": "disabled",
                "description": "<p class=\"changed_added_2_0\">A boolean value  enabling page level determination of whether or not this  validator is enabled on the enclosing component.</p>",
                "type": "boolean"
            },
            {
                "name": "pattern",
                "description": "A regular expression pattern. Remember that, like in  all Java strings, backslash must be escaped with another  backslash.</p>",
                "type": "string"
            }
        ]
    },
    "f:validateRequired": {
        "name": "f:validateRequired",
        "description": "<p class=\"changed_added_2_0\">A validator that enforces  the presence of a value. It has the same affect as setting the  required attribute on a UIInput to true.</p>",
        "attributes": [
            {
                "name": "binding",
                "description": "A ValueExpression that evaluates to an instance of  RequiredValidator.",
                "type": "string"
            },
            {
                "name": "disabled",
                "description": "<p class=\"changed_added_2_0\">A boolean value  enabling page level determination of whether or not this  validator is enabled on the enclosing component.</p>",
                "type": "boolean"
            },
            {
                "name": "for",
                "description": "<p class=\"changed_added_2_0\">If present, this attribute  refers  to the value of one of the exposed attached objects within the  composite component inside of which this tag is nested.</p>",
                "type": "string"
            }
        ]
    },
    "f:validateWholeBean": {
        "name": "f:validateWholeBean",
        "description": "<p class=\"changed_added_2_3\">Support multi-field validation  by enabling class-level bean validation on CDI based backing  beans. This feature causes a temporary copy of the bean  referenced by the `value` attribute, for the sole  purpose of populating the bean with field values already  validated by `<f:validateBean />` and then  performing class-level validation on the copy. Regardless  of the result of the class-level validation, the copy is  discarded. This feature must explicitly be enabled by  setting the application parameter specified in the javadoc  for the symbolic constant  `jakarta.faces.validator.BeanValidator.ENABLE_VALIDATE_WHOLE_BEAN_PARAM_NAME`.  If this parameter is not set, or is set to false, this tag  must be a no-op. A non-normative example follows the  specification of the feature.</p>",
        "attributes": [
            {
                "name": "disabled",
                "description": "<p class=\"changed_added_2_3\">A boolean value enabling or  disabling this validation component.</p>",
                "type": "boolean"
            },
            {
                "name": "id",
                "description": "<p class=\"changed_added_2_3\">Component identifier of the  UIInput component to be created.</p>",
                "type": "string"
            },
            {
                "name": "validationGroups",
                "description": "<p class=\"changed_added_2_3\">A comma-separated list of  validation groups. A validation group is a  fully-qualified class name.</p>",
                "type": "string"
            },
            {
                "name": "value",
                "description": "<p class=\"changed_added_2_3\">A ValueExpression referencing the bean to be validated.</p>",
                "type": "string"
            }
        ]
    },
    "f:validator": {
        "name": "f:validator",
        "description": "Register  a named  Validator instance on the UIComponent associated with the  closest parent UIComponent tag.</p>",
        "attributes": [
            {
                "name": "binding",
                "description": "A ValueExpression that evaluates to an object that implements  the jakarta.faces.validator.Validator interface.</p>",
                "type": "string"
            },
            {
                "name": "disabled",
                "description": "<p class=\"changed_added_2_0\">A boolean value  enabling page level determination of whether or not this  validator is enabled on the enclosing component.</p>",
                "type": "boolean"
            },
            {
                "name": "for",
                "description": "<p class=\"changed_added_2_0\">If present, this attribute  refers  to the value of one of the exposed attached objects within the  composite component inside of which this tag is nested.</p>",
                "type": "string"
            },
            {
                "name": "validatorId",
                "description": "Validator identifier of the Validator  to be created and registered.</p>",
                "type": "string"
            }
        ]
    },
    "f:valueChangeListener": {
        "name": "f:valueChangeListener",
        "description": "Register a ValueChangeListener instance on the UIComponent  associated with the closest parent UIComponent tag.</p>",
        "attributes": [
            {
                "name": "binding",
                "description": "Value binding expression that evaluates to an object that  implements jakarta.faces.event.ValueChangeListener.</p>",
                "type": "string"
            },
            {
                "name": "for",
                "description": "<p class=\"changed_added_2_0\">If present, this attribute  refers  to the value of one of the exposed attached objects within the  composite component inside of which this tag is nested.</p>",
                "type": "string"
            },
            {
                "name": "type",
                "description": "Fully qualified Java class name of a  ValueChangeListener to be created and registered.</p>",
                "type": "string"
            }
        ]
    },
    "f:view": {
        "name": "f:view",
        "description": "Container for all Jakarta Faces  core and component tags used on a  page.</p>",
        "attributes": [
            {
                "name": "afterPhase",
                "description": "MethodBinding pointing to a method that takes a  jakarta.faces.event.PhaseEvent and returns void. This  method will be called after every phase except for  restore view on an initial request.</p>",
                "type": "string"
            },
            {
                "name": "beforePhase",
                "description": "MethodBinding pointing to a method that takes a  jakarta.faces.event.PhaseEvent and returns void. This method  will be called before every phase except for restore view.</p>",
                "type": "string"
            },
            {
                "name": "contentType",
                "description": "<p class=\"changed_modified_2_0_rev_a\">Specifies the  content-type of the response.</p>",
                "type": "string"
            },
            {
                "name": "contracts",
                "description": "<p class=\"changed_added_2_2 changed_modified_2_3\">A comma separated list of  resource library contracts that may be used from within  the Facelets chain. If this attribute is present, it  must only be on the outer-most file in the chain of  files that started ultimately with a call to  `ViewDeclarationLanguage.createView()`. Any  use of this attribute on a non-outer-most file is undefined.</p>",
                "type": "string"
            },
            {
                "name": "encoding",
                "description": "<p class=\"changed_modified_2_0_rev_a\">Specifies the  character encoding that should be used for the  response.</p>",
                "type": "string"
            },
            {
                "name": "locale",
                "description": "Locale to use for localizing this page. Expressions  must evaluate to a java.util.Locale or to a String  that is converted to a Locale.</p>",
                "type": "string"
            },
            {
                "name": "renderKitId",
                "description": "Identifier for the RenderKit to use for  rendering this page.",
                "type": "string"
            },
            {
                "name": "transient",
                "description": "<p class=\"changed_added_2_2\">If  `true`, this view must not participate in  state saving or restoring. Note that transient views  may not be used with `@ViewScoped` managed  beans. The implementation must call  `setTransient()` on the  `UIViewRoot`, passing the value of the  attribute as specified in the markup.</p>",
                "type": "boolean"
            }
        ]
    },
    "f:viewAction": {
        "name": "f:viewAction",
        "description": "<p class=\"changed_added_2_2\">This action component specifies  an application-specific command (or action), using an EL  method expression, to be invoked during one of the Faces  lifecycle phases, by default <em>Invoke Application</em>.</p>",
        "attributes": [
            {
                "name": "action",
                "description": "MethodExpression representing the application action  to invoke when this component is activated by the user. The  expression must evaluate to a public method that takes no  parameters, and returns an Object (the toString() of which  is called to derive the logical outcome) which is passed to  the NavigationHandler for this application.</p>",
                "type": "string"
            },
            {
                "name": "actionListener",
                "description": "MethodExpression representing an action listener method that  will be notified when this component is activated by the user.  The expression must evaluate to a public method that takes an  ActionEvent parameter, with a return type of void, or to a public method that takes no  arguments with a return type of void. In the latter case, the  method has no way of easily knowing where the event came from,  but this can be useful in cases where a notification is needed  that \"some action happened\".",
                "type": "string"
            },
            {
                "name": "immediate",
                "description": "Flag indicating that, if this component is activated  by the user, notifications should be delivered to  interested listeners and actions immediately (that is,  during Apply Request Values phase) rather than waiting  until Invoke Application phase.</p>",
                "type": "boolean"
            },
            {
                "name": "onPostback",
                "description": "View actions are most commonly used on the initial  view request. Therefore, view actions do not operate on  postback, by default. This attribute enables a view action  to operate on postback.</p>",
                "type": "boolean"
            },
            {
                "name": "phase",
                "description": "Specifies the phase in which the action invocation  should occur using the name of the phase constant in the  PhaseId class (the case does not matter). The value must  be one of APPLY_REQUEST_VALUES, PROCESS_VALIDATIONS,  UPDATE_MODEL_VALUES, or INVOKE_APPLICATION. The default  is INVOKE_APPLICATION.</p>",
                "type": "string"
            },
            {
                "name": "rendered",
                "description": "Like all children of `<f:metadata>`,  a view action has no visual representation in the view.  This attribute has exactly the same effect on a view action  as the `rendered` attribute has on a visual  component. Specifically, if the value of this attribute  evaluates to `false` the component has no  effect.</p>",
                "type": "boolean"
            }
        ]
    },
    "f:viewParam": {
        "name": "f:viewParam",
        "description": "<p class=\"changed_added_2_0\">Used inside of the  metadata facet of a view, this tag causes a UIViewParameter  to be attached as metadata for the current view. Because  `UIViewParameter` extends `UIInput`  all of the attributes and nested child content for any  `UIInput` tags are valid on this tag as well.</p>",
        "attributes": [
            {
                "name": "binding",
                "description": "The ValueExpression linking this component to a property in a  backing bean.</p>",
                "type": "string"
            },
            {
                "name": "converter",
                "description": "Converter instance registered with this component.</p>",
                "type": "string"
            },
            {
                "name": "converterMessage",
                "description": "A ValueExpression enabled attribute that, if present, will be  used as the text of the converter message, replacing any message  that comes from the converter.</p>",
                "type": "string"
            },
            {
                "name": "for",
                "description": "<p class=\"changed_added_2_0\">If present, this  attribute refers to the value of one of the exposed  attached objects within the composite component inside  of which this tag is nested.</p>",
                "type": "string"
            },
            {
                "name": "id",
                "description": "The component identifier for this component. This value must be  unique within the closest parent component that is a naming  container.</p>",
                "type": "string"
            },
            {
                "name": "name",
                "description": "<p class=\"changed_modified_2_0_rev_a\">The name  of the request parameter from which the value for this  component is retrieved on an initial request or to  override the stored value on a postback.</p>",
                "type": "string"
            },
            {
                "name": "required",
                "description": "Flag indicating that the user is required to provide a submitted  value for this input component.</p>",
                "type": "string"
            },
            {
                "name": "requiredMessage",
                "description": "A ValueExpression enabled attribute that, if present, will be  used as the text of the validation message for the \"required\"  facility, if the \"required\" facility is used.</p>",
                "type": "string"
            },
            {
                "name": "validator",
                "description": "MethodExpression representing a validator method that will be  called  during Process Validations to perform correctness checks on the  value of this component. The expression must evaluate to a  public  method that takes FacesContext, UIComponent, and Object  parameters,  with a return type of void.</p>",
                "type": "string"
            },
            {
                "name": "validatorMessage",
                "description": "A ValueExpression enabled attribute that, if present, will be  used as the text of the validator message, replacing any  message that comes from the validator.</p>",
                "type": "string"
            },
            {
                "name": "value",
                "description": "A ValueExpression to which the value of the request parameter, as  determined by the name attribute, is bound. The resolved value of this  expression is used when encoding the view parameter into a bookmarkable link or  redirect URL with view parameter encoding enabled. If this attribute is omitted,  the value of the request parameter will instead be the local value of the  UIViewParameter.</p>",
                "type": "string"
            },
            {
                "name": "valueChangeListener",
                "description": "MethodExpression representing a value change listener method  that will be notified when a new value has been set for this  input component. The expression must evaluate to a public  method that takes a `ValueChangeEvent`  parameter,  with a return type of void, or  to a public method that takes no arguments with a return type  of void. In the latter case, the method has no way of easily  knowing what the new value is, but this can be useful in cases  where a notification is needed that \"this value  changed\".",
                "type": "string"
            },
            {
                "name": "maxlength",
                "description": "The maximum number of characters that may  be entered in this field.",
                "type": "string"
            }
        ]
    },
    "f:websocket": {
        "name": "f:websocket",
        "description": "<p class=\"changed_added_2_3\">Registers a websocket push  connection in client side by rendering the necessary scripts.  Push messages can be sent from server side via  `jakarta.faces.push.PushContext` interface. See also  `jakarta.faces.push.Push` API documentation for an  elaborate instruction on how to use  `<f:websocket>`. </p>",
        "attributes": [
            {
                "name": "binding",
                "description": "<p class=\"changed_added_2_3\">  Value binding expression to a backing bean property bound to the component instance for the `UIComponent` created by this tag.  </p>",
                "type": "string"
            },
            {
                "name": "id",
                "description": "<p class=\"changed_added_2_3\">  Component identifier of the `UIWebsocket` component to be created.  </p>",
                "type": "string"
            },
            {
                "name": "channel",
                "description": "<p class=\"changed_added_2_3\">  The name of the websocket channel.  It may not be an EL expression and it may only contain alphanumeric characters, hyphens, underscores and periods.  All open websockets on the same channel name will receive the same push notification from the server.  </p>",
                "type": "string"
            },
            {
                "name": "scope",
                "description": "<p class=\"changed_added_2_3\">  The scope of the websocket channel.  It may not be an EL expression and allowed values are `application`, `session` and `view`, case insensitive.  When the value is `application`, then all channels with the same name throughout the application will receive the same push message.  When the value is `session`, then only the channels with the same name in the current user session will receive the same push message.  When the value is `view`, then only the channel in the current view will receive the push message.  The default scope is `application`.  When the `user` attribute is specified, then the default scope is `session`.  </p>",
                "type": "string"
            },
            {
                "name": "user",
                "description": "<p class=\"changed_added_2_3\">  The user identifier of the websocket channel, so that user-targeted push messages can be sent.  It must implement `Serializable` and preferably have low memory footprint.  Suggestion: use `#{request.remoteUser}` or `#{someLoggedInUser.id}`.  All open websockets on the same channel and user will receive the same push message from the server.  </p>",
                "type": "string"
            },
            {
                "name": "onopen",
                "description": "<p class=\"changed_added_2_3\">  The JavaScript event handler function that is invoked when the websocket is opened.  The function will be invoked with one argument: the channel name.  </p>",
                "type": "string"
            },
            {
                "name": "onmessage",
                "description": "<p class=\"changed_added_2_3\">  The JavaScript event handler function that is invoked when a push message is received from the server.  The function will be invoked with three arguments: the push message, the channel name and the raw `MessageEvent` itself.  </p>",
                "type": "string"
            },
            {
                "name": "onerror",
                "description": "<p class=\"changed_added_4_0\">  The JavaScript event handler function that is invoked when a connection error has occurred and the websocket will attempt to reconnect.  The function will be invoked with three arguments: the error reason code, the channel name and the raw `CloseEvent` itself.  Note that this will not be invoked on final close of the websocket, even when the final close is caused by an error.  See also  RFC 6455 section 7.4.1  and  CloseCodes  API for an elaborate list of all close codes.  </p>",
                "type": "string"
            },
            {
                "name": "onclose",
                "description": "<p class=\"changed_added_2_3\">  The JavaScript event handler function that is invoked when the websocket is closed and will not anymore attempt to reconnect.  The function will be invoked with three arguments: the close reason code, the channel name and the raw `CloseEvent` itself.  Note that this will also be invoked when the close is caused by an error and that you can inspect the close reason code if an actual connection error occurred and which one (i.e. when the code is not 1000 or 1008).  See also  RFC 6455 section 7.4.1  and  CloseCodes  API for an elaborate list of all close codes.  </p>",
                "type": "string"
            },
            {
                "name": "connected",
                "description": "<p class=\"changed_added_2_3\">  Whether to (auto)connect the websocket or not.  Defaults to `true`.  It's interpreted as a JavaScript instruction whether to open or close the websocket push connection.  This attribute is implicitly re-evaluated on every ajax request by a `PreRenderViewEvent` listener on the `UIViewRoot`.  You can also explicitly set it to `false` and then manually control in JavaScript by `faces.push.open(clientId)` and `faces.push.close(clientId)`.  </p>",
                "type": "boolean"
            },
            {
                "name": "rendered",
                "description": "<p class=\"changed_added_2_3\">  Whether to render the websocket scripts or not.  Defaults to `true`.  This attribute is implicitly re-evaluated on every ajax request by a `PreRenderViewEvent` listener on the `UIViewRoot`.  If the value changes to `false` while the websocket is already opened, then the websocket will implicitly be closed.  </p>",
                "type": "boolean"
            }
        ]
    },
    "h:button": {
        "name": "h:button",
        "description": "Render an HTML \"input\" element of type \"button\".  The value of the component is rendered as the button text and the outcome of the  component is used to determine the target URL which is activated by onclick. If  \"image\" attribute is specified, render it as the value of the \"src\" attribute after  passing it to the `getResourceURL()` method of the `ViewHandler`  for this application, and passing the result through the `encodeResourceURL()`  method of the `ExternalContext`. Any child `UIParameter` components  are appended to the String to be used as the target URL as query parameters before rendering.  The entire target URL string must be passed through a call to the `encodeResourceURL()`  method of the `ExternalContext`. The name of the `UIParameter` goes on the  left hand side, and the value of the `UIParameter` on the right hand side. The name  and the value must be URLEncoded. Each `UIParameter` instance is separeted by an  ampersand, as dictated in the URL spec. The final encoded result will be written out to the  onclick attribute of the button as \"window.location.href = '<encoded HREF value>'\".  If the developer has specified a custom onlclick the window.location.href name/value  pair will be appended at the end of the developer specified script.  If the \"fragment\" attribute is specified, the value will be included at the end  of the resulting URL preceded by a hash mark. If the \"styleClass\" attribute is specified,  render its value as the value of the \"class\" attribute. If the \"id\" attribute is specified,  follow the same steps as mentioned in the \"General  Notes on Encoding\" regarding the \"id\" attribute for UIInput components. If the  \"disabled\" attribute is specified, do not render the \"onclick\" element and assign the  \"disabled\" attribute a value of true.",
        "attributes": [
            {
                "name": "role",
                "description": "<p class=\"changed_added_2_2\">Per the WAI-ARIA spec and its  relationship to HTML5 (Section title ARIA Role Attriubute),  every HTML element may have a \"role\" attribute whose value  must be passed through unmodified on the element on which it  is declared in the final rendered markup. The attribute, if  specified, must have a value that is a string literal that is,  or an EL Expression that evaluates to, a set of  space-separated tokens representing the various WAI-ARIA roles  that the element belongs to.  </p>",
                "type": "string"
            },
            {
                "name": "disableClientWindow",
                "description": "<p class=\"changed_added_2_2\">Disable appending the `ClientWindow` on the rendering of this element.</p>",
                "type": "boolean"
            }
        ]
    },
    "h:link": {
        "name": "h:link",
        "description": "Render an HTML \"a\" anchor element. The value of the  component is rendered as the anchor text and the outcome of the component is used  to determine the target URL rendered in the \"href\" attribute. Any  child `UIParameter` components are appended to the String to be  output as the value of the \"href\" attribute as query parameters  before rendering. The entire \"href\" string must be passed through  a call to the `encodeResourceURL()` method of the  `ExternalContext`. The name of the `UIParameter` goes on  the left hand side, and the value of the `UIParameter` on the right  hand side. The name and the value must be URLEncoded. Each  `UIParameter` instance is separated by an ampersand, as dictated in  the URL spec. If the \"fragment\" attribute is specified, the value will be  included at the end of the resulting URL preceded by a hash mark.  If the \"styleClass\" attribute is specified, render  its value as the value of the \"class\" attribute. If the \"id\" attribute  is specified, follow the same steps as mentioned in the  \"General  Notes on Encoding\" regarding the \"id\" attribute for UIInput components.  If the \"disabled\" attribute is specified, do not render the HTML \"a\"  anchor element or the \"href\" element. Instead, render a \"span\" element.  If the \"styleClass\" attribute is specified, render its value as the value  of the \"class\" attribute on the \"span\". Render any pass-through attributes  on the \"span\".",
        "attributes": [
            {
                "name": "role",
                "description": "<p class=\"changed_added_2_2\">Per the WAI-ARIA spec and its  relationship to HTML5 (Section title ARIA Role Attriubute),  every HTML element may have a \"role\" attribute whose value  must be passed through unmodified on the element on which it  is declared in the final rendered markup. The attribute, if  specified, must have a value that is a string literal that is,  or an EL Expression that evaluates to, a set of  space-separated tokens representing the various WAI-ARIA roles  that the element belongs to.  </p>",
                "type": "string"
            },
            {
                "name": "disableClientWindow",
                "description": "<p class=\"changed_added_2_2\">Disable appending the `ClientWindow` on the rendering of this element.</p>",
                "type": "boolean"
            }
        ]
    },
    "h:head": {
        "name": "h:head",
        "description": "Render the markup for a `<head>` element.</p>",
        "attributes": []
    },
    "h:body": {
        "name": "h:body",
        "description": "Render the markup for a `<body>` element.</p>",
        "attributes": [
            {
                "name": "role",
                "description": "<p class=\"changed_added_2_2\">Per the WAI-ARIA spec and its  relationship to HTML5 (Section title ARIA Role Attriubute),  every HTML element may have a \"role\" attribute whose value  must be passed through unmodified on the element on which it  is declared in the final rendered markup. The attribute, if  specified, must have a value that is a string literal that is,  or an EL Expression that evaluates to, a set of  space-separated tokens representing the various WAI-ARIA roles  that the element belongs to.  </p>",
                "type": "string"
            }
        ]
    },
    "h:commandButton": {
        "name": "h:commandButton",
        "description": "Alternate textual description of the  element rendered by this component.  This attribute is ignored when the `image` attribute is not specified.",
        "attributes": [
            {
                "name": "role",
                "description": "<p class=\"changed_added_2_2\">Per the WAI-ARIA spec and its  relationship to HTML5 (Section title ARIA Role Attriubute),  every HTML element may have a \"role\" attribute whose value  must be passed through unmodified on the element on which it  is declared in the final rendered markup. The attribute, if  specified, must have a value that is a string literal that is,  or an EL Expression that evaluates to, a set of  space-separated tokens representing the various WAI-ARIA roles  that the element belongs to.  </p>",
                "type": "string"
            },
            {
                "name": "action",
                "description": "MethodExpression representing the application action to invoke  when this component is activated by the user. The expression  must evaluate to a public method that takes no parameters, and  returns an Object (the toString() of which is called to derive  the logical outcome) which is passed to the NavigationHandler  for this application.",
                "type": "string"
            },
            {
                "name": "actionListener",
                "description": "MethodExpression representing an action listener method that  will be notified when this component is activated by the user.  The expression must evaluate to a public method that takes an  ActionEvent parameter, with a return type of void, or to a public method that takes no  arguments with a return type of void. In the latter case, the  method has no way of easily knowing where the event came from,  but this can be useful in cases where a notification is needed  that \"some action happened\".  </p>",
                "type": "string"
            },
            {
                "name": "id",
                "description": "The component identifier for this component. This value must be  unique within the closest parent component that is a naming  container.",
                "type": "string"
            },
            {
                "name": "immediate",
                "description": "Flag indicating that, if this component is activated by the  user,  notifications should be delivered to interested listeners and  actions  immediately (that is, during Apply Request Values phase) rather  than  waiting until Invoke Application phase.",
                "type": "boolean"
            },
            {
                "name": "rendered",
                "description": "Flag indicating whether or not this component should be rendered  (during Render Response Phase), or processed on any subsequent  form submit. The default value for this property is true.",
                "type": "boolean"
            },
            {
                "name": "value",
                "description": "The current value of this component.",
                "type": "string"
            },
            {
                "name": "accesskey",
                "description": "Access key that, when pressed, transfers focus  to this element.",
                "type": "string"
            },
            {
                "name": "alt",
                "description": "Alternate textual description of the  element rendered by this component.  This attribute is ignored when the `image` attribute is not specified.",
                "type": "string"
            },
            {
                "name": "dir",
                "description": "Direction indication for text that does not inherit  directionality.  Valid values are \"LTR\" (left-to-right) and \"RTL\"  (right-to-left).",
                "type": "string"
            },
            {
                "name": "disabled",
                "description": "Flag indicating that this element must never receive focus or  be included in a subsequent submit. A value of false causes  no attribute to be rendered, while a value of true causes the  attribute to be rendered as disabled=\"disabled\".",
                "type": "boolean"
            },
            {
                "name": "image",
                "description": "Absolute or relative URL of the  image to be displayed for this  button. If specified, this  \"input\" element will be of type  \"image\". Otherwise, it will be  of the type specified by the  \"type\" property with a label  specified by the \"value\"  property. Note  that if the value of this  attribute starts with \"/\", the  rendered value for this  attribute will be prefixed with  the context-root for this  application.  </p>",
                "type": "string"
            },
            {
                "name": "label",
                "description": "A localized user presentable name for this component.",
                "type": "string"
            },
            {
                "name": "lang",
                "description": "Code describing the language used in the generated markup  for this component.",
                "type": "string"
            },
            {
                "name": "onblur",
                "description": "Javascript code executed when this element loses focus.",
                "type": "string"
            },
            {
                "name": "onchange",
                "description": "Javascript code executed when this element loses focus  and its value has been modified since gaining focus.",
                "type": "string"
            },
            {
                "name": "onclick",
                "description": "Javascript code executed when a pointer button is  clicked over this element.",
                "type": "string"
            },
            {
                "name": "ondblclick",
                "description": "Javascript code executed when a pointer button is  double clicked over this element.",
                "type": "string"
            },
            {
                "name": "onfocus",
                "description": "Javascript code executed when this element receives focus.",
                "type": "string"
            },
            {
                "name": "onkeydown",
                "description": "Javascript code executed when a key is  pressed down over this element.",
                "type": "string"
            },
            {
                "name": "onkeypress",
                "description": "Javascript code executed when a key is  pressed and released over this element.",
                "type": "string"
            },
            {
                "name": "onkeyup",
                "description": "Javascript code executed when a key is  released over this element.",
                "type": "string"
            },
            {
                "name": "onmousedown",
                "description": "Javascript code executed when a pointer button is  pressed down over this element.",
                "type": "string"
            },
            {
                "name": "onmousemove",
                "description": "Javascript code executed when a pointer button is  moved within this element.",
                "type": "string"
            },
            {
                "name": "onmouseout",
                "description": "Javascript code executed when a pointer button is  moved away from this element.",
                "type": "string"
            },
            {
                "name": "onmouseover",
                "description": "Javascript code executed when a pointer button is  moved onto this element.",
                "type": "string"
            },
            {
                "name": "onmouseup",
                "description": "Javascript code executed when a pointer button is  released over this element.",
                "type": "string"
            },
            {
                "name": "onselect",
                "description": "Javascript code executed when text within this  element is selected by the user.",
                "type": "string"
            },
            {
                "name": "readonly",
                "description": "Flag indicating that this component will prohibit changes by  the user. The element may receive focus unless it has also  been disabled. A value of false causes  no attribute to be rendered, while a value of true causes the  attribute to be rendered as readonly=\"readonly\".",
                "type": "boolean"
            },
            {
                "name": "style",
                "description": "CSS style(s) to be applied when this component is rendered.",
                "type": "string"
            },
            {
                "name": "styleClass",
                "description": "Space-separated list of CSS style class(es) to be applied when  this element is rendered. This value must be passed through  as the \"class\" attribute on generated markup.",
                "type": "string"
            },
            {
                "name": "tabindex",
                "description": "Position of this element in the tabbing order  for the current document. This value must be  an integer between 0 and 32767.",
                "type": "string"
            },
            {
                "name": "title",
                "description": "Advisory title information about markup elements generated  for this component.",
                "type": "string"
            },
            {
                "name": "type",
                "description": "Type of button to create. Valid values are \"submit\", \"button\",  and \"reset\". If not specified, or not a valid value, the default  value is \"submit\".",
                "type": "string"
            },
            {
                "name": "binding",
                "description": "The ValueExpression linking this component to a property in a  backing bean",
                "type": "string"
            }
        ]
    },
    "h:commandLink": {
        "name": "h:commandLink",
        "description": "Render an HTML \"a\"  anchor  element that acts like a form submit button when  clicked.</p>",
        "attributes": [
            {
                "name": "role",
                "description": "<p class=\"changed_added_2_2\">Per the WAI-ARIA spec and its  relationship to HTML5 (Section title ARIA Role Attriubute),  every HTML element may have a \"role\" attribute whose value  must be passed through unmodified on the element on which it  is declared in the final rendered markup. The attribute, if  specified, must have a value that is a string literal that is,  or an EL Expression that evaluates to, a set of  space-separated tokens representing the various WAI-ARIA roles  that the element belongs to.  </p>",
                "type": "string"
            },
            {
                "name": "action",
                "description": "MethodExpression representing the application action to invoke  when this component is activated by the user. The expression  must evaluate to a public method that takes no parameters, and  returns an Object (the toString() of which is called to derive  the logical outcome) which is passed to the NavigationHandler  for this application.",
                "type": "string"
            },
            {
                "name": "actionListener",
                "description": "MethodExpression representing an action listener method that  will be notified when this component is activated by the user.  The expression must evaluate to a public method that takes an  ActionEvent parameter, with a return type of void, or to a public method that takes no  arguments with a return type of void. In the latter case, the  method has no way of easily knowing where the event came from,  but this can be useful in cases where a notification is needed  that \"some action happened\".  </p>",
                "type": "string"
            },
            {
                "name": "id",
                "description": "The component identifier for this component. This value must be  unique within the closest parent component that is a naming  container.",
                "type": "string"
            },
            {
                "name": "immediate",
                "description": "Flag indicating that, if this component is activated by the  user,  notifications should be delivered to interested listeners and  actions  immediately (that is, during Apply Request Values phase) rather  than  waiting until Invoke Application phase.",
                "type": "boolean"
            },
            {
                "name": "rendered",
                "description": "Flag indicating whether or not this component should be rendered  (during Render Response Phase), or processed on any subsequent  form submit. The default value for this property is true.",
                "type": "boolean"
            },
            {
                "name": "value",
                "description": "The current value of this component.",
                "type": "string"
            },
            {
                "name": "accesskey",
                "description": "Access key that, when pressed, transfers focus  to this element.",
                "type": "string"
            },
            {
                "name": "charset",
                "description": "The character encoding of the resource designated  by this hyperlink.",
                "type": "string"
            },
            {
                "name": "coords",
                "description": "The position and shape of the hot spot on the screen  (for use in client-side image maps).",
                "type": "string"
            },
            {
                "name": "dir",
                "description": "Direction indication for text that does not inherit  directionality.  Valid values are \"LTR\" (left-to-right) and \"RTL\"  (right-to-left).",
                "type": "string"
            },
            {
                "name": "disabled",
                "description": "Flag indicating that this element must never  receive focus or be included in a subsequent  submit.",
                "type": "boolean"
            },
            {
                "name": "hreflang",
                "description": "The language code of the resource designated  by this hyperlink.",
                "type": "string"
            },
            {
                "name": "lang",
                "description": "Code describing the language used in the generated markup  for this component.",
                "type": "string"
            },
            {
                "name": "onblur",
                "description": "Javascript code executed when this element loses focus.",
                "type": "string"
            },
            {
                "name": "onclick",
                "description": "Javascript code executed when a pointer button is  clicked over this element.",
                "type": "string"
            },
            {
                "name": "ondblclick",
                "description": "Javascript code executed when a pointer button is  double clicked over this element.",
                "type": "string"
            },
            {
                "name": "onfocus",
                "description": "Javascript code executed when this element receives focus.",
                "type": "string"
            },
            {
                "name": "onkeydown",
                "description": "Javascript code executed when a key is  pressed down over this element.",
                "type": "string"
            },
            {
                "name": "onkeypress",
                "description": "Javascript code executed when a key is  pressed and released over this element.",
                "type": "string"
            },
            {
                "name": "onkeyup",
                "description": "Javascript code executed when a key is  released over this element.",
                "type": "string"
            },
            {
                "name": "onmousedown",
                "description": "Javascript code executed when a pointer button is  pressed down over this element.",
                "type": "string"
            },
            {
                "name": "onmousemove",
                "description": "Javascript code executed when a pointer button is  moved within this element.",
                "type": "string"
            },
            {
                "name": "onmouseout",
                "description": "Javascript code executed when a pointer button is  moved away from this element.",
                "type": "string"
            },
            {
                "name": "onmouseover",
                "description": "Javascript code executed when a pointer button is  moved onto this element.",
                "type": "string"
            },
            {
                "name": "onmouseup",
                "description": "Javascript code executed when a pointer button is  released over this element.",
                "type": "string"
            },
            {
                "name": "rel",
                "description": "The relationship from the current document  to the anchor specified by this hyperlink.  The value of this attribute is a space-separated  list of link types.",
                "type": "string"
            },
            {
                "name": "rev",
                "description": "A reverse link from the anchor specified  by this hyperlink to the current document.  The value of this attribute is a space-separated  list of link types.",
                "type": "string"
            },
            {
                "name": "shape",
                "description": "The shape of the hot spot on the screen  (for use in client-side image maps). Valid  values are: default (entire region); rect  (rectangular region); circle (circular region);  and poly (polygonal region).",
                "type": "string"
            },
            {
                "name": "style",
                "description": "CSS style(s) to be applied when this component is rendered.",
                "type": "string"
            },
            {
                "name": "styleClass",
                "description": "Space-separated list of CSS style class(es) to be applied when  this element is rendered. This value must be passed through  as the \"class\" attribute on generated markup.",
                "type": "string"
            },
            {
                "name": "tabindex",
                "description": "Position of this element in the tabbing order  for the current document. This value must be  an integer between 0 and 32767.",
                "type": "string"
            },
            {
                "name": "target",
                "description": "Name of a frame where the resource  retrieved via this hyperlink is to  be displayed.",
                "type": "string"
            },
            {
                "name": "title",
                "description": "Advisory title information about markup elements generated  for this component.",
                "type": "string"
            },
            {
                "name": "type",
                "description": "The content type of the resource designated  by this hyperlink.",
                "type": "string"
            },
            {
                "name": "binding",
                "description": "The ValueExpression linking this component to a property in a  backing bean",
                "type": "string"
            }
        ]
    },
    "h:commandScript": {
        "name": "h:commandScript",
        "description": "Name of JavaScript function to be declared, e.g. `name=\"functionName\"`.  This can be a namespaced function name, e.g. `name=\"ez.functionName\"`.",
        "attributes": [
            {
                "name": "id",
                "description": "The component identifier for this component.  This value must be unique within the closest parent component that is a naming container.",
                "type": "string"
            },
            {
                "name": "name",
                "description": "Name of JavaScript function to be declared, e.g. `name=\"functionName\"`.  This can be a namespaced function name, e.g. `name=\"ez.functionName\"`.",
                "type": "string"
            },
            {
                "name": "autorun",
                "description": "Whether to execute declared JavaScript function during `load` event of the `window`.  Defaults to `false`.",
                "type": "string"
            },
            {
                "name": "action",
                "description": "MethodExpression representing the application action to invoke when this component is activated by the user.  The expression must evaluate to a public method that takes no parameters,  and returns an `Object`.  The `toString()` of the returned `Object` is called to derive the logical outcome.  This outcome is passed to the `NavigationHandler` for this application.",
                "type": "string"
            },
            {
                "name": "actionListener",
                "description": "MethodExpression representing an action listener method that will be notified when this component is activated by the user.  The expression must evaluate to a public method that takes an `ActionEvent` parameter,  with a return type of `void`,  or to a public method that takes no arguments with a return type of `void`.  In the latter case,  the method has no way of easily knowing where the event came from,  but this can be useful in cases where a notification is needed that \"some action happened\".",
                "type": "string"
            },
            {
                "name": "execute",
                "description": "This is a space separated list of client identifiers of components  that will participate in the \"execute\" portion of the Request Processing Lifecycle.  If a literal is specified the identifiers must be space delimited.  Any of the keywords \"@this\", \"@form\", \"@all\", \"@none\" may be specified in the identifier list.  If not specified, the default value of \"@this\" is assumed.  For example, `@this clientIdOne clientIdTwo`.",
                "type": "string"
            },
            {
                "name": "render",
                "description": "This is a space separated list of client identifiers of components  that will participate in the \"render\" portion of the Request Processing Lifecycle.  If a literal is specified the identifiers must be space delimited.  Any of the keywords \"@this\", \"@form\", \"@all\", \"@none\" may be specified in the identifier list.  If not specified, the default value of \"@none\" is assumed.  For example, `@this clientIdOne clientIdTwo`.",
                "type": "string"
            },
            {
                "name": "resetValues",
                "description": "Reset specific input values.  Interpret the value of the `render` attribute as a space separated list of client identifiers  suitable for passing directly to `UIViewRoot.resetValues()`.  The implementation must cause an `ActionListener` to be attached to the `ActionSource`  component in which this tag is nested that calls `UIViewRoot.resetValues()` passing the value  of the `render` attribute as the argument.",
                "type": "boolean"
            },
            {
                "name": "onevent",
                "description": "The name of the JavaScript function that will handle UI events.",
                "type": "string"
            },
            {
                "name": "onerror",
                "description": "The name of the JavaScript function that will handle errors.",
                "type": "string"
            },
            {
                "name": "immediate",
                "description": "Flag indicating that, if this component is activated by the user, notifications should be delivered to  interested listeners and actions immediately (that is, during Apply Request Values phase) rather than  waiting until Invoke Application phase.",
                "type": "boolean"
            },
            {
                "name": "rendered",
                "description": "Flag indicating whether or not this component should be rendered (during Render Response Phase),  or processed on any subsequent form submit. Defaults to `true`.",
                "type": "boolean"
            },
            {
                "name": "binding",
                "description": "The ValueExpression linking this component to a property in a backing bean.",
                "type": "string"
            }
        ]
    },
    "h:dataTable": {
        "name": "h:dataTable",
        "description": "Renders an HTML \"table\" element compliant with the HTML 401  specification. Render the \"caption\" facet, if present, inside a  \"caption\" element immediately below the \"table\" element. If the  \"captionClass\" attribute is specified, render its value as the  value of the \"class\" attribute on the \"caption\" element. If the  \"captionStyle\" attribute is specified, render its value as the  value of the \"style\" attribute on the \"caption\" element.</p>",
        "attributes": [
            {
                "name": "first",
                "description": "Zero-relative row number of the first row to be displayed. If  this  property is set to zero, rendering will begin with the first row  of  the underlying data.",
                "type": "string"
            },
            {
                "name": "id",
                "description": "The component identifier for this component. This value must be  unique within the closest parent component that is a naming  container.",
                "type": "string"
            },
            {
                "name": "rendered",
                "description": "Flag indicating whether or not this component should be rendered  (during Render Response Phase), or processed on any subsequent  form submit. The default value for this property is true.",
                "type": "boolean"
            },
            {
                "name": "rows",
                "description": "The number of rows to display, starting with the one identified  by the  \"first\" property. If this value is set to zero, all available  rows in  the underlying data model will be displayed.",
                "type": "string"
            },
            {
                "name": "value",
                "description": "The current value of this component.",
                "type": "string"
            },
            {
                "name": "var",
                "description": "Name of a request-scope attribute under which the model data for  the  row selected by the current value of the \"rowIndex\" property  (i.e.  also the current value of the \"rowData\" property) will be  exposed.",
                "type": "string"
            },
            {
                "name": "bgcolor",
                "description": "Name or code of the background color for this table.",
                "type": "string"
            },
            {
                "name": "bodyrows",
                "description": "Comma separated list of row indices for which a new  \"tbody\" element should be started (and any  previously opened one should be ended).",
                "type": "string"
            },
            {
                "name": "border",
                "description": "Width (in pixels) of the border to be drawn  around this table.",
                "type": "string"
            },
            {
                "name": "captionClass",
                "description": "Space-separated list of CSS style class(es) that will be  applied to any caption generated for this table.",
                "type": "string"
            },
            {
                "name": "captionStyle",
                "description": "CSS style(s) to be applied when this caption is rendered.",
                "type": "string"
            },
            {
                "name": "cellpadding",
                "description": "Definition of how much space the user agent should  leave between the border of each cell and its contents.",
                "type": "string"
            },
            {
                "name": "cellspacing",
                "description": "Definition of how much space the user agent should  leave between the left side of the table and the  leftmost column, the top of the table and the top of  the top side of the topmost row, and so on for the  right and bottom of the table. It also specifies  the amount of space to leave between cells.",
                "type": "string"
            },
            {
                "name": "columnClasses",
                "description": "Comma-delimited list of CSS style classes that will be applied  to the columns of this table. A space separated list of  classes may also be specified for any individual column. If  the number of elements in this list is less than the number of  actual column children of the UIData, no \"class\"  attribute is output for each column greater than the number of  elements in the list. If the number of elements in the list  is greater than the number of actual column children of the  UIData, the elements at the posisiton in the list  after the last column are ignored.",
                "type": "string"
            },
            {
                "name": "dir",
                "description": "Direction indication for text that does not inherit  directionality.  Valid values are \"LTR\" (left-to-right) and \"RTL\"  (right-to-left).",
                "type": "string"
            },
            {
                "name": "footerClass",
                "description": "Space-separated list of CSS style class(es) that will be  applied to any footer generated for this table.",
                "type": "string"
            },
            {
                "name": "frame",
                "description": "Code specifying which sides of the frame surrounding  this table will be visible. Valid values are:  none (no sides, default value); above (top side only);  below (bottom side only); hsides (top and bottom sides  only); vsides (right and left sides only); lhs (left  hand side only); rhs (right hand side only); box  (all four sides); and border (all four sides).",
                "type": "string"
            },
            {
                "name": "headerClass",
                "description": "Space-separated list of CSS style class(es) that will be  applied to any header generated for this table.",
                "type": "string"
            },
            {
                "name": "lang",
                "description": "Code describing the language used in the generated markup  for this component.",
                "type": "string"
            },
            {
                "name": "onclick",
                "description": "Javascript code executed when a pointer button is  clicked over this element.",
                "type": "string"
            },
            {
                "name": "ondblclick",
                "description": "Javascript code executed when a pointer button is  double clicked over this element.",
                "type": "string"
            },
            {
                "name": "onkeydown",
                "description": "Javascript code executed when a key is  pressed down over this element.",
                "type": "string"
            },
            {
                "name": "onkeypress",
                "description": "Javascript code executed when a key is  pressed and released over this element.",
                "type": "string"
            },
            {
                "name": "onkeyup",
                "description": "Javascript code executed when a key is  released over this element.",
                "type": "string"
            },
            {
                "name": "onmousedown",
                "description": "Javascript code executed when a pointer button is  pressed down over this element.",
                "type": "string"
            },
            {
                "name": "onmousemove",
                "description": "Javascript code executed when a pointer button is  moved within this element.",
                "type": "string"
            },
            {
                "name": "onmouseout",
                "description": "Javascript code executed when a pointer button is  moved away from this element.",
                "type": "string"
            },
            {
                "name": "onmouseover",
                "description": "Javascript code executed when a pointer button is  moved onto this element.",
                "type": "string"
            },
            {
                "name": "onmouseup",
                "description": "Javascript code executed when a pointer button is  released over this element.",
                "type": "string"
            },
            {
                "name": "rowClasses",
                "description": "Comma-delimited list of CSS style classes that will be applied  to the rows of this table. A space separated list of classes  may also be specified for any individual row. Thes styles are  applied, in turn, to each row in the table. For example, if  the list has two elements, the first style class in the list  is applied to the first row, the second to the second row, the  first to the third row, the second to the fourth row, etc. In  other words, we keep iterating through the list until we reach  the end, and then we start at the beginning again.",
                "type": "string"
            },
            {
                "name": "rules",
                "description": "Code specifying which rules will appear between cells  within this table. Valid values are: none (no rules,  default value); groups (between row groups); rows  (between rows only); cols (between columns only); and  all (between all rows and columns).",
                "type": "string"
            },
            {
                "name": "style",
                "description": "CSS style(s) to be applied when this component is rendered.",
                "type": "string"
            },
            {
                "name": "styleClass",
                "description": "Space-separated list of CSS style class(es) to be applied when  this element is rendered. This value must be passed through  as the \"class\" attribute on generated markup.",
                "type": "string"
            },
            {
                "name": "summary",
                "description": "Summary of this table's purpose and structure, for  user agents rendering to non-visual media such as  speech and Braille.",
                "type": "string"
            },
            {
                "name": "title",
                "description": "Advisory title information about markup elements generated  for this component.",
                "type": "string"
            },
            {
                "name": "width",
                "description": "Width of the entire table, for visual user agents.",
                "type": "string"
            },
            {
                "name": "binding",
                "description": "The ValueExpression linking this component to a property in a  backing bean",
                "type": "string"
            },
            {
                "name": "role",
                "description": "<p class=\"changed_added_2_2\">Per the WAI-ARIA spec and its  relationship to HTML5 (Section title ARIA Role Attriubute),  every HTML element may have a \"role\" attribute whose value  must be passed through unmodified on the element on which it  is declared in the final rendered markup. The attribute, if  specified, must have a value that is a string literal that is,  or an EL Expression that evaluates to, a set of  space-separated tokens representing the various WAI-ARIA roles  that the element belongs to.  </p>",
                "type": "string"
            }
        ]
    },
    "h:form": {
        "name": "h:form",
        "description": "Renders an HTML \"form\" element.",
        "attributes": [
            {
                "name": "id",
                "description": "The component identifier for this component. This value must be  unique within the closest parent component that is a naming  container.",
                "type": "string"
            },
            {
                "name": "prependId",
                "description": "Flag indicating whether or not this form should prepend its id  to its descendent's id during the clientId generation process.  If this flag is not set, the default value is true.",
                "type": "boolean"
            },
            {
                "name": "rendered",
                "description": "Flag indicating whether or not this component should be rendered  (during Render Response Phase), or processed on any subsequent  form submit. The default value for this property is true.",
                "type": "boolean"
            },
            {
                "name": "accept",
                "description": "List of content types that a server processing this form  will handle correctly",
                "type": "string"
            },
            {
                "name": "acceptcharset",
                "description": "List of character encodings for input data  that are accepted by the server processing  this form.",
                "type": "string"
            },
            {
                "name": "dir",
                "description": "Direction indication for text that does not inherit  directionality.  Valid values are \"LTR\" (left-to-right) and \"RTL\"  (right-to-left).",
                "type": "string"
            },
            {
                "name": "enctype",
                "description": "Content type used to submit the form to the server. If not  specified, the default value is  \"application/x-www-form-urlencoded\".",
                "type": "string"
            },
            {
                "name": "lang",
                "description": "Code describing the language used in the generated markup  for this component.",
                "type": "string"
            },
            {
                "name": "onclick",
                "description": "Javascript code executed when a pointer button is  clicked over this element.",
                "type": "string"
            },
            {
                "name": "ondblclick",
                "description": "Javascript code executed when a pointer button is  double clicked over this element.",
                "type": "string"
            },
            {
                "name": "onkeydown",
                "description": "Javascript code executed when a key is  pressed down over this element.",
                "type": "string"
            },
            {
                "name": "onkeypress",
                "description": "Javascript code executed when a key is  pressed and released over this element.",
                "type": "string"
            },
            {
                "name": "onkeyup",
                "description": "Javascript code executed when a key is  released over this element.",
                "type": "string"
            },
            {
                "name": "onmousedown",
                "description": "Javascript code executed when a pointer button is  pressed down over this element.",
                "type": "string"
            },
            {
                "name": "onmousemove",
                "description": "Javascript code executed when a pointer button is  moved within this element.",
                "type": "string"
            },
            {
                "name": "onmouseout",
                "description": "Javascript code executed when a pointer button is  moved away from this element.",
                "type": "string"
            },
            {
                "name": "onmouseover",
                "description": "Javascript code executed when a pointer button is  moved onto this element.",
                "type": "string"
            },
            {
                "name": "onmouseup",
                "description": "Javascript code executed when a pointer button is  released over this element.",
                "type": "string"
            },
            {
                "name": "onreset",
                "description": "Javascript code executed when this form is reset.",
                "type": "string"
            },
            {
                "name": "onsubmit",
                "description": "Javascript code executed when this form is submitted.",
                "type": "string"
            },
            {
                "name": "style",
                "description": "CSS style(s) to be applied when this component is rendered.",
                "type": "string"
            },
            {
                "name": "styleClass",
                "description": "Space-separated list of CSS style class(es) to be applied when  this element is rendered. This value must be passed through  as the \"class\" attribute on generated markup.",
                "type": "string"
            },
            {
                "name": "target",
                "description": "Name of a frame where the response  retrieved after this form submit is to  be displayed.",
                "type": "string"
            },
            {
                "name": "title",
                "description": "Advisory title information about markup elements generated  for this component.",
                "type": "string"
            },
            {
                "name": "binding",
                "description": "The ValueExpression linking this component to a property in a  backing bean",
                "type": "string"
            },
            {
                "name": "role",
                "description": "<p class=\"changed_added_2_2\">Per the WAI-ARIA spec and its  relationship to HTML5 (Section title ARIA Role Attriubute),  every HTML element may have a \"role\" attribute whose value  must be passed through unmodified on the element on which it  is declared in the final rendered markup. The attribute, if  specified, must have a value that is a string literal that is,  or an EL Expression that evaluates to, a set of  space-separated tokens representing the various WAI-ARIA roles  that the element belongs to.  </p>",
                "type": "string"
            }
        ]
    },
    "h:graphicImage": {
        "name": "h:graphicImage",
        "description": "Renders an HTML \"img\"  element. Render the clientId as the value of the \"id\"  attribute.</p>",
        "attributes": [
            {
                "name": "id",
                "description": "The component identifier for this component. This value must be  unique within the closest parent component that is a naming  container.",
                "type": "string"
            },
            {
                "name": "rendered",
                "description": "Flag indicating whether or not this component should be rendered  (during Render Response Phase), or processed on any subsequent  form submit. The default value for this property is true.",
                "type": "boolean"
            },
            {
                "name": "url",
                "description": "Context-relative URL to retrieve the resource associated with  this component. This is an alias for the \"value\" property.",
                "type": "string"
            },
            {
                "name": "value",
                "description": "The current value of this component.",
                "type": "string"
            },
            {
                "name": "alt",
                "description": "Alternate textual description of the  element rendered by this component.",
                "type": "string"
            },
            {
                "name": "dir",
                "description": "Direction indication for text that does not inherit  directionality.  Valid values are \"LTR\" (left-to-right) and \"RTL\"  (right-to-left).",
                "type": "string"
            },
            {
                "name": "height",
                "description": "Override for the height of this image.",
                "type": "string"
            },
            {
                "name": "ismap",
                "description": "Flag indicating that this image is to be used as a server side  image map. Such an image must be enclosed within a hyperlink  (\"a\"). A value of false causes no attribute to be rendered,  while a value of true causes the attribute to be rendered as  ismap=\"ismap\".",
                "type": "boolean"
            },
            {
                "name": "lang",
                "description": "Code describing the language used in the generated markup  for this component.",
                "type": "string"
            },
            {
                "name": "library",
                "description": "The <em>libraryName</em>  for this resource.</p>",
                "type": "string"
            },
            {
                "name": "longdesc",
                "description": "URI to a long description of the image  represented by this element.",
                "type": "string"
            },
            {
                "name": "name",
                "description": "The <em>resourceName</em>  for this resource.</p>",
                "type": "string"
            },
            {
                "name": "onclick",
                "description": "Javascript code executed when a pointer button is  clicked over this element.",
                "type": "string"
            },
            {
                "name": "ondblclick",
                "description": "Javascript code executed when a pointer button is  double clicked over this element.",
                "type": "string"
            },
            {
                "name": "onkeydown",
                "description": "Javascript code executed when a key is  pressed down over this element.",
                "type": "string"
            },
            {
                "name": "onkeypress",
                "description": "Javascript code executed when a key is  pressed and released over this element.",
                "type": "string"
            },
            {
                "name": "onkeyup",
                "description": "Javascript code executed when a key is  released over this element.",
                "type": "string"
            },
            {
                "name": "onmousedown",
                "description": "Javascript code executed when a pointer button is  pressed down over this element.",
                "type": "string"
            },
            {
                "name": "onmousemove",
                "description": "Javascript code executed when a pointer button is  moved within this element.",
                "type": "string"
            },
            {
                "name": "onmouseout",
                "description": "Javascript code executed when a pointer button is  moved away from this element.",
                "type": "string"
            },
            {
                "name": "onmouseover",
                "description": "Javascript code executed when a pointer button is  moved onto this element.",
                "type": "string"
            },
            {
                "name": "onmouseup",
                "description": "Javascript code executed when a pointer button is  released over this element.",
                "type": "string"
            },
            {
                "name": "style",
                "description": "CSS style(s) to be applied when this component is rendered.",
                "type": "string"
            },
            {
                "name": "styleClass",
                "description": "Space-separated list of CSS style class(es) to be applied when  this element is rendered. This value must be passed through  as the \"class\" attribute on generated markup.",
                "type": "string"
            },
            {
                "name": "title",
                "description": "Advisory title information about markup elements generated  for this component.",
                "type": "string"
            },
            {
                "name": "usemap",
                "description": "The name of a client side image map (an HTML \"map\"  element) for which this element provides the image.",
                "type": "string"
            },
            {
                "name": "width",
                "description": "Override for the width of this image.",
                "type": "string"
            },
            {
                "name": "binding",
                "description": "The ValueExpression linking this component to a property in a  backing bean",
                "type": "string"
            },
            {
                "name": "role",
                "description": "<p class=\"changed_added_2_2\">Per the WAI-ARIA spec and its  relationship to HTML5 (Section title ARIA Role Attriubute),  every HTML element may have a \"role\" attribute whose value  must be passed through unmodified on the element on which it  is declared in the final rendered markup. The attribute, if  specified, must have a value that is a string literal that is,  or an EL Expression that evaluates to, a set of  space-separated tokens representing the various WAI-ARIA roles  that the element belongs to.  </p>",
                "type": "string"
            }
        ]
    },
    "h:inputHidden": {
        "name": "h:inputHidden",
        "description": "Renders an HTML \"input\" element of type  \"hidden\".</p>",
        "attributes": [
            {
                "name": "converter",
                "description": "Converter instance registered with this component.",
                "type": "string"
            },
            {
                "name": "converterMessage",
                "description": "A ValueExpression enabled attribute that, if present, will be  used as the text of the converter message, replacing any message  that comes from the converter.",
                "type": "string"
            },
            {
                "name": "id",
                "description": "The component identifier for this component. This value must be  unique within the closest parent component that is a naming  container.",
                "type": "string"
            },
            {
                "name": "immediate",
                "description": "Flag indicating that this component's value must be  converted and validated immediately (that is, during  Apply Request Values phase), rather than waiting  until Process Validations phase.",
                "type": "boolean"
            },
            {
                "name": "rendered",
                "description": "Flag indicating whether or not this component should be rendered  (during Render Response Phase), or processed on any subsequent  form submit. The default value for this property is true.",
                "type": "boolean"
            },
            {
                "name": "required",
                "description": "Flag indicating that the user is required to provide a submitted  value for this input component.",
                "type": "boolean"
            },
            {
                "name": "requiredMessage",
                "description": "A ValueExpression enabled attribute that, if present, will be  used as the text of the validation message for the \"required\"  facility, if the \"required\" facility is used.",
                "type": "string"
            },
            {
                "name": "validator",
                "description": "MethodExpression representing a validator method that will be  called  during Process Validations to perform correctness checks on the  value of this component. The expression must evaluate to a  public  method that takes FacesContext, UIComponent, and Object  parameters,  with a return type of void.",
                "type": "string"
            },
            {
                "name": "validatorMessage",
                "description": "A ValueExpression enabled attribute that, if present, will be  used as the text of the validator message, replacing any  message that comes from the validator.",
                "type": "string"
            },
            {
                "name": "value",
                "description": "The current value of this component.",
                "type": "string"
            },
            {
                "name": "valueChangeListener",
                "description": "MethodExpression representing a value change listener method  that will be notified when a new value has been set for this  input component. The expression must evaluate to a public  method that takes a `ValueChangeEvent`  parameter,  with a return type of void, or  to a public method that takes no arguments with a return type  of void. In the latter case, the method has no way of easily  knowing what the new value is, but this can be useful in cases  where a notification is needed that \"this value  changed\".  </p>",
                "type": "string"
            },
            {
                "name": "binding",
                "description": "The ValueExpression linking this component to a property in a  backing bean",
                "type": "string"
            }
        ]
    },
    "h:inputSecret": {
        "name": "h:inputSecret",
        "description": "Renders an HTML \"input\" element of \"type\" \"password\".</p>",
        "attributes": [
            {
                "name": "converter",
                "description": "Converter instance registered with this component.",
                "type": "string"
            },
            {
                "name": "converterMessage",
                "description": "A ValueExpression enabled attribute that, if present, will be  used as the text of the converter message, replacing any message  that comes from the converter.",
                "type": "string"
            },
            {
                "name": "id",
                "description": "The component identifier for this component. This value must be  unique within the closest parent component that is a naming  container.",
                "type": "string"
            },
            {
                "name": "immediate",
                "description": "Flag indicating that this component's value must be  converted and validated immediately (that is, during  Apply Request Values phase), rather than waiting  until Process Validations phase.",
                "type": "boolean"
            },
            {
                "name": "rendered",
                "description": "Flag indicating whether or not this component should be rendered  (during Render Response Phase), or processed on any subsequent  form submit. The default value for this property is true.",
                "type": "boolean"
            },
            {
                "name": "required",
                "description": "Flag indicating that the user is required to provide a submitted  value for this input component.",
                "type": "boolean"
            },
            {
                "name": "requiredMessage",
                "description": "A ValueExpression enabled attribute that, if present, will be  used as the text of the validation message for the \"required\"  facility, if the \"required\" facility is used.",
                "type": "string"
            },
            {
                "name": "validator",
                "description": "MethodExpression representing a validator method that will be  called  during Process Validations to perform correctness checks on the  value of this component. The expression must evaluate to a  public  method that takes FacesContext, UIComponent, and Object  parameters,  with a return type of void.",
                "type": "string"
            },
            {
                "name": "validatorMessage",
                "description": "A ValueExpression enabled attribute that, if present, will be  used as the text of the validator message, replacing any  message that comes from the validator.",
                "type": "string"
            },
            {
                "name": "value",
                "description": "The current value of this component.",
                "type": "string"
            },
            {
                "name": "valueChangeListener",
                "description": "MethodExpression representing a value change listener method  that will be notified when a new value has been set for this  input component. The expression must evaluate to a public  method that takes a `ValueChangeEvent`  parameter,  with a return type of void, or  to a public method that takes no arguments with a return type  of void. In the latter case, the method has no way of easily  knowing what the new value is, but this can be useful in cases  where a notification is needed that \"this value  changed\".  </p>",
                "type": "string"
            },
            {
                "name": "accesskey",
                "description": "Access key that, when pressed, transfers focus  to this element.",
                "type": "string"
            },
            {
                "name": "autocomplete",
                "description": "If the value of this attribute is \"off\", render \"off\" as the  value  of the attribute. This indicates that the browser should  disable its autocomplete feature for this component. This is  useful for components that perform autocompletion and do not  want the browser interfering. If this attribute is not set or  the value  is \"on\", render nothing.",
                "type": "string"
            },
            {
                "name": "dir",
                "description": "Direction indication for text that does not inherit  directionality.  Valid values are \"LTR\" (left-to-right) and \"RTL\"  (right-to-left).",
                "type": "string"
            },
            {
                "name": "disabled",
                "description": "Flag indicating that this element must never receive focus or  be included in a subsequent submit. A value of false causes  no attribute to be rendered, while a value of true causes the  attribute to be rendered as disabled=\"disabled\".",
                "type": "boolean"
            },
            {
                "name": "label",
                "description": "A localized user presentable name for this component.",
                "type": "string"
            },
            {
                "name": "lang",
                "description": "Code describing the language used in the generated markup  for this component.",
                "type": "string"
            },
            {
                "name": "maxlength",
                "description": "The maximum number of characters that may  be entered in this field.",
                "type": "string"
            },
            {
                "name": "onblur",
                "description": "Javascript code executed when this element loses focus.",
                "type": "string"
            },
            {
                "name": "onchange",
                "description": "Javascript code executed when this element loses focus  and its value has been modified since gaining focus.",
                "type": "string"
            },
            {
                "name": "onclick",
                "description": "Javascript code executed when a pointer button is  clicked over this element.",
                "type": "string"
            },
            {
                "name": "ondblclick",
                "description": "Javascript code executed when a pointer button is  double clicked over this element.",
                "type": "string"
            },
            {
                "name": "onfocus",
                "description": "Javascript code executed when this element receives focus.",
                "type": "string"
            },
            {
                "name": "onkeydown",
                "description": "Javascript code executed when a key is  pressed down over this element.",
                "type": "string"
            },
            {
                "name": "onkeypress",
                "description": "Javascript code executed when a key is  pressed and released over this element.",
                "type": "string"
            },
            {
                "name": "onkeyup",
                "description": "Javascript code executed when a key is  released over this element.",
                "type": "string"
            },
            {
                "name": "onmousedown",
                "description": "Javascript code executed when a pointer button is  pressed down over this element.",
                "type": "string"
            },
            {
                "name": "onmousemove",
                "description": "Javascript code executed when a pointer button is  moved within this element.",
                "type": "string"
            },
            {
                "name": "onmouseout",
                "description": "Javascript code executed when a pointer button is  moved away from this element.",
                "type": "string"
            },
            {
                "name": "onmouseover",
                "description": "Javascript code executed when a pointer button is  moved onto this element.",
                "type": "string"
            },
            {
                "name": "onmouseup",
                "description": "Javascript code executed when a pointer button is  released over this element.",
                "type": "string"
            },
            {
                "name": "onselect",
                "description": "Javascript code executed when text within this  element is selected by the user.",
                "type": "string"
            },
            {
                "name": "readonly",
                "description": "Flag indicating that this component will prohibit changes by  the user. The element may receive focus unless it has also  been disabled. A value of false causes  no attribute to be rendered, while a value of true causes the  attribute to be rendered as readonly=\"readonly\".",
                "type": "boolean"
            },
            {
                "name": "redisplay",
                "description": "Flag indicating that any existing value  in this field should be rendered when the  form is created. Because this is a potential  security risk, password values are not  displayed by default.",
                "type": "boolean"
            },
            {
                "name": "size",
                "description": "The number of characters used to determine  the width of this field.",
                "type": "string"
            },
            {
                "name": "style",
                "description": "CSS style(s) to be applied when this component is rendered.",
                "type": "string"
            },
            {
                "name": "styleClass",
                "description": "Space-separated list of CSS style class(es) to be applied when  this element is rendered. This value must be passed through  as the \"class\" attribute on generated markup.",
                "type": "string"
            },
            {
                "name": "tabindex",
                "description": "Position of this element in the tabbing order  for the current document. This value must be  an integer between 0 and 32767.",
                "type": "string"
            },
            {
                "name": "title",
                "description": "Advisory title information about markup elements generated  for this component.",
                "type": "string"
            },
            {
                "name": "binding",
                "description": "The ValueExpression linking this component to a property in a  backing bean",
                "type": "string"
            },
            {
                "name": "role",
                "description": "<p class=\"changed_added_2_2\">Per the WAI-ARIA spec and its  relationship to HTML5 (Section title ARIA Role Attriubute),  every HTML element may have a \"role\" attribute whose value  must be passed through unmodified on the element on which it  is declared in the final rendered markup. The attribute, if  specified, must have a value that is a string literal that is,  or an EL Expression that evaluates to, a set of  space-separated tokens representing the various WAI-ARIA roles  that the element belongs to.  </p>",
                "type": "string"
            }
        ]
    },
    "h:inputText": {
        "name": "h:inputText",
        "description": "Renders an HTML \"input\"  element of \"type\" \"text\".</p>",
        "attributes": [
            {
                "name": "converter",
                "description": "Converter instance registered with this component.",
                "type": "string"
            },
            {
                "name": "converterMessage",
                "description": "A ValueExpression enabled attribute that, if present, will be  used as the text of the converter message, replacing any message  that comes from the converter.",
                "type": "string"
            },
            {
                "name": "id",
                "description": "The component identifier for this component. This value must be  unique within the closest parent component that is a naming  container.",
                "type": "string"
            },
            {
                "name": "immediate",
                "description": "Flag indicating that this component's value must be  converted and validated immediately (that is, during  Apply Request Values phase), rather than waiting  until Process Validations phase.",
                "type": "boolean"
            },
            {
                "name": "rendered",
                "description": "Flag indicating whether or not this component should be rendered  (during Render Response Phase), or processed on any subsequent  form submit. The default value for this property is true.",
                "type": "boolean"
            },
            {
                "name": "required",
                "description": "Flag indicating that the user is required to provide a submitted  value for this input component.",
                "type": "boolean"
            },
            {
                "name": "requiredMessage",
                "description": "A ValueExpression enabled attribute that, if present, will be  used as the text of the validation message for the \"required\"  facility, if the \"required\" facility is used.",
                "type": "string"
            },
            {
                "name": "validator",
                "description": "MethodExpression representing a validator method that will be  called  during Process Validations to perform correctness checks on the  value of this component. The expression must evaluate to a  public  method that takes FacesContext, UIComponent, and Object  parameters,  with a return type of void.",
                "type": "string"
            },
            {
                "name": "validatorMessage",
                "description": "A ValueExpression enabled attribute that, if present, will be  used as the text of the validator message, replacing any  message that comes from the validator.",
                "type": "string"
            },
            {
                "name": "type",
                "description": "Controls the data type and associated control of the element.  Default value is `text`.  If a value is specified for which already a more specific component exist, such as  `hidden`, `password`, `checkbox`, `radio`, `file`, `submit`, `image`, `reset` and `button`,  and the ProjectStage is set to Development, then the renderer must add a warning message stating that the more specific component should be preferred.",
                "type": "string"
            },
            {
                "name": "value",
                "description": "The current value of this component.",
                "type": "string"
            },
            {
                "name": "valueChangeListener",
                "description": "MethodExpression representing a value change listener method  that will be notified when a new value has been set for this  input component. The expression must evaluate to a public  method that takes a `ValueChangeEvent`  parameter,  with a return type of void, or  to a public method that takes no arguments with a return type  of void. In the latter case, the method has no way of easily  knowing what the new value is, but this can be useful in cases  where a notification is needed that \"this value  changed\".  </p>",
                "type": "string"
            },
            {
                "name": "accesskey",
                "description": "Access key that, when pressed, transfers focus  to this element.",
                "type": "string"
            },
            {
                "name": "alt",
                "description": "Alternate textual description of the  element rendered by this component.",
                "type": "string"
            },
            {
                "name": "autocomplete",
                "description": "If the value of this attribute is \"off\", render \"off\" as the  value  of the attribute. This indicates that the browser should  disable its autocomplete feature for this component. This is  useful for components that perform autocompletion and do not  want the browser interfering. If this attribute is not set or  the value  is \"on\", render nothing.",
                "type": "string"
            },
            {
                "name": "dir",
                "description": "Direction indication for text that does not inherit  directionality.  Valid values are \"LTR\" (left-to-right) and \"RTL\"  (right-to-left).",
                "type": "string"
            },
            {
                "name": "disabled",
                "description": "Flag indicating that this element must never receive focus or  be included in a subsequent submit. A value of false causes  no attribute to be rendered, while a value of true causes the  attribute to be rendered as disabled=\"disabled\".",
                "type": "boolean"
            },
            {
                "name": "label",
                "description": "A localized user presentable name for this component.",
                "type": "string"
            },
            {
                "name": "lang",
                "description": "Code describing the language used in the generated markup  for this component.",
                "type": "string"
            },
            {
                "name": "maxlength",
                "description": "The maximum number of characters that may  be entered in this field.",
                "type": "string"
            },
            {
                "name": "onblur",
                "description": "Javascript code executed when this element loses focus.",
                "type": "string"
            },
            {
                "name": "onchange",
                "description": "Javascript code executed when this element loses focus  and its value has been modified since gaining focus.",
                "type": "string"
            },
            {
                "name": "onclick",
                "description": "Javascript code executed when a pointer button is  clicked over this element.",
                "type": "string"
            },
            {
                "name": "ondblclick",
                "description": "Javascript code executed when a pointer button is  double clicked over this element.",
                "type": "string"
            },
            {
                "name": "onfocus",
                "description": "Javascript code executed when this element receives focus.",
                "type": "string"
            },
            {
                "name": "onkeydown",
                "description": "Javascript code executed when a key is  pressed down over this element.",
                "type": "string"
            },
            {
                "name": "onkeypress",
                "description": "Javascript code executed when a key is  pressed and released over this element.",
                "type": "string"
            },
            {
                "name": "onkeyup",
                "description": "Javascript code executed when a key is  released over this element.",
                "type": "string"
            },
            {
                "name": "onmousedown",
                "description": "Javascript code executed when a pointer button is  pressed down over this element.",
                "type": "string"
            },
            {
                "name": "onmousemove",
                "description": "Javascript code executed when a pointer button is  moved within this element.",
                "type": "string"
            },
            {
                "name": "onmouseout",
                "description": "Javascript code executed when a pointer button is  moved away from this element.",
                "type": "string"
            },
            {
                "name": "onmouseover",
                "description": "Javascript code executed when a pointer button is  moved onto this element.",
                "type": "string"
            },
            {
                "name": "onmouseup",
                "description": "Javascript code executed when a pointer button is  released over this element.",
                "type": "string"
            },
            {
                "name": "onselect",
                "description": "Javascript code executed when text within this  element is selected by the user.",
                "type": "string"
            },
            {
                "name": "readonly",
                "description": "Flag indicating that this component will prohibit changes by  the user. The element may receive focus unless it has also  been disabled. A value of false causes  no attribute to be rendered, while a value of true causes the  attribute to be rendered as readonly=\"readonly\".",
                "type": "boolean"
            },
            {
                "name": "size",
                "description": "The number of characters used to determine  the width of this field.",
                "type": "string"
            },
            {
                "name": "style",
                "description": "CSS style(s) to be applied when this component is rendered.",
                "type": "string"
            },
            {
                "name": "styleClass",
                "description": "Space-separated list of CSS style class(es) to be applied when  this element is rendered. This value must be passed through  as the \"class\" attribute on generated markup.",
                "type": "string"
            },
            {
                "name": "tabindex",
                "description": "Position of this element in the tabbing order  for the current document. This value must be  an integer between 0 and 32767.",
                "type": "string"
            },
            {
                "name": "title",
                "description": "Advisory title information about markup elements generated  for this component.",
                "type": "string"
            },
            {
                "name": "binding",
                "description": "The ValueExpression linking this component to a property in a  backing bean",
                "type": "string"
            },
            {
                "name": "role",
                "description": "<p class=\"changed_added_2_2\">Per the WAI-ARIA spec and its  relationship to HTML5 (Section title ARIA Role Attriubute),  every HTML element may have a \"role\" attribute whose value  must be passed through unmodified on the element on which it  is declared in the final rendered markup. The attribute, if  specified, must have a value that is a string literal that is,  or an EL Expression that evaluates to, a set of  space-separated tokens representing the various WAI-ARIA roles  that the element belongs to.  </p>",
                "type": "string"
            }
        ]
    },
    "h:inputTextarea": {
        "name": "h:inputTextarea",
        "description": "Renders an HTML \"textarea\" element.</p>",
        "attributes": [
            {
                "name": "converter",
                "description": "Converter instance registered with this component.",
                "type": "string"
            },
            {
                "name": "converterMessage",
                "description": "A ValueExpression enabled attribute that, if present, will be  used as the text of the converter message, replacing any message  that comes from the converter.",
                "type": "string"
            },
            {
                "name": "id",
                "description": "The component identifier for this component. This value must be  unique within the closest parent component that is a naming  container.",
                "type": "string"
            },
            {
                "name": "immediate",
                "description": "Flag indicating that this component's value must be  converted and validated immediately (that is, during  Apply Request Values phase), rather than waiting  until Process Validations phase.",
                "type": "boolean"
            },
            {
                "name": "rendered",
                "description": "Flag indicating whether or not this component should be rendered  (during Render Response Phase), or processed on any subsequent  form submit. The default value for this property is true.",
                "type": "boolean"
            },
            {
                "name": "required",
                "description": "Flag indicating that the user is required to provide a submitted  value for this input component.",
                "type": "boolean"
            },
            {
                "name": "requiredMessage",
                "description": "A ValueExpression enabled attribute that, if present, will be  used as the text of the validation message for the \"required\"  facility, if the \"required\" facility is used.",
                "type": "string"
            },
            {
                "name": "validator",
                "description": "MethodExpression representing a validator method that will be  called  during Process Validations to perform correctness checks on the  value of this component. The expression must evaluate to a  public  method that takes FacesContext, UIComponent, and Object  parameters,  with a return type of void.",
                "type": "string"
            },
            {
                "name": "validatorMessage",
                "description": "A ValueExpression enabled attribute that, if present, will be  used as the text of the validator message, replacing any  message that comes from the validator.",
                "type": "string"
            },
            {
                "name": "value",
                "description": "The current value of this component.",
                "type": "string"
            },
            {
                "name": "valueChangeListener",
                "description": "MethodExpression representing a value change listener method  that will be notified when a new value has been set for this  input component. The expression must evaluate to a public  method that takes a `ValueChangeEvent`  parameter,  with a return type of void, or  to a public method that takes no arguments with a return type  of void. In the latter case, the method has no way of easily  knowing what the new value is, but this can be useful in cases  where a notification is needed that \"this value  changed\".  </p>",
                "type": "string"
            },
            {
                "name": "accesskey",
                "description": "Access key that, when pressed, transfers focus  to this element.",
                "type": "string"
            },
            {
                "name": "cols",
                "description": "The number of columns to be displayed.",
                "type": "string"
            },
            {
                "name": "dir",
                "description": "Direction indication for text that does not inherit  directionality.  Valid values are \"LTR\" (left-to-right) and \"RTL\"  (right-to-left).",
                "type": "string"
            },
            {
                "name": "disabled",
                "description": "Flag indicating that this element must never receive focus or  be included in a subsequent submit. A value of false causes  no attribute to be rendered, while a value of true causes the  attribute to be rendered as disabled=\"disabled\".",
                "type": "boolean"
            },
            {
                "name": "label",
                "description": "A localized user presentable name for this component.",
                "type": "string"
            },
            {
                "name": "lang",
                "description": "Code describing the language used in the generated markup  for this component.",
                "type": "string"
            },
            {
                "name": "onblur",
                "description": "Javascript code executed when this element loses focus.",
                "type": "string"
            },
            {
                "name": "onchange",
                "description": "Javascript code executed when this element loses focus  and its value has been modified since gaining focus.",
                "type": "string"
            },
            {
                "name": "onclick",
                "description": "Javascript code executed when a pointer button is  clicked over this element.",
                "type": "string"
            },
            {
                "name": "ondblclick",
                "description": "Javascript code executed when a pointer button is  double clicked over this element.",
                "type": "string"
            },
            {
                "name": "onfocus",
                "description": "Javascript code executed when this element receives focus.",
                "type": "string"
            },
            {
                "name": "onkeydown",
                "description": "Javascript code executed when a key is  pressed down over this element.",
                "type": "string"
            },
            {
                "name": "onkeypress",
                "description": "Javascript code executed when a key is  pressed and released over this element.",
                "type": "string"
            },
            {
                "name": "onkeyup",
                "description": "Javascript code executed when a key is  released over this element.",
                "type": "string"
            },
            {
                "name": "onmousedown",
                "description": "Javascript code executed when a pointer button is  pressed down over this element.",
                "type": "string"
            },
            {
                "name": "onmousemove",
                "description": "Javascript code executed when a pointer button is  moved within this element.",
                "type": "string"
            },
            {
                "name": "onmouseout",
                "description": "Javascript code executed when a pointer button is  moved away from this element.",
                "type": "string"
            },
            {
                "name": "onmouseover",
                "description": "Javascript code executed when a pointer button is  moved onto this element.",
                "type": "string"
            },
            {
                "name": "onmouseup",
                "description": "Javascript code executed when a pointer button is  released over this element.",
                "type": "string"
            },
            {
                "name": "onselect",
                "description": "Javascript code executed when text within this  element is selected by the user.",
                "type": "string"
            },
            {
                "name": "readonly",
                "description": "Flag indicating that this component will prohibit changes by  the user. The element may receive focus unless it has also  been disabled. A value of false causes  no attribute to be rendered, while a value of true causes the  attribute to be rendered as readonly=\"readonly\".",
                "type": "boolean"
            },
            {
                "name": "rows",
                "description": "The number of rows to be displayed.",
                "type": "string"
            },
            {
                "name": "style",
                "description": "CSS style(s) to be applied when this component is rendered.",
                "type": "string"
            },
            {
                "name": "styleClass",
                "description": "Space-separated list of CSS style class(es) to be applied when  this element is rendered. This value must be passed through  as the \"class\" attribute on generated markup.",
                "type": "string"
            },
            {
                "name": "tabindex",
                "description": "Position of this element in the tabbing order  for the current document. This value must be  an integer between 0 and 32767.",
                "type": "string"
            },
            {
                "name": "title",
                "description": "Advisory title information about markup elements generated  for this component.",
                "type": "string"
            },
            {
                "name": "binding",
                "description": "The ValueExpression linking this component to a property in a  backing bean",
                "type": "string"
            },
            {
                "name": "role",
                "description": "<p class=\"changed_added_2_2\">Per the WAI-ARIA spec and its  relationship to HTML5 (Section title ARIA Role Attriubute),  every HTML element may have a \"role\" attribute whose value  must be passed through unmodified on the element on which it  is declared in the final rendered markup. The attribute, if  specified, must have a value that is a string literal that is,  or an EL Expression that evaluates to, a set of  space-separated tokens representing the various WAI-ARIA roles  that the element belongs to.  </p>",
                "type": "string"
            }
        ]
    },
    "h:message": {
        "name": "h:message",
        "description": "Render a single message for a specific component.</p>",
        "attributes": [
            {
                "name": "for",
                "description": "Client identifier of the component for which to display  messages.",
                "type": "string"
            },
            {
                "name": "id",
                "description": "The component identifier for this component. This value must be  unique within the closest parent component that is a naming  container.",
                "type": "string"
            },
            {
                "name": "rendered",
                "description": "Flag indicating whether or not this component should be rendered  (during Render Response Phase), or processed on any subsequent  form submit. The default value for this property is true.",
                "type": "boolean"
            },
            {
                "name": "showDetail",
                "description": "Flag indicating whether the detail portion of displayed messages  should be included. Default value is \"true\".",
                "type": "boolean"
            },
            {
                "name": "showSummary",
                "description": "Flag indicating whether the summary portion of displayed  messages  should be included. Default value is \"false\".",
                "type": "boolean"
            },
            {
                "name": "dir",
                "description": "Direction indication for text that does not inherit  directionality.  Valid values are \"LTR\" (left-to-right) and \"RTL\"  (right-to-left).",
                "type": "string"
            },
            {
                "name": "errorClass",
                "description": "CSS style class to apply to any message  with a severity class of \"ERROR\".",
                "type": "string"
            },
            {
                "name": "errorStyle",
                "description": "CSS style(s) to apply to any message  with a severity class of \"ERROR\".",
                "type": "string"
            },
            {
                "name": "fatalClass",
                "description": "CSS style class to apply to any message  with a severity class of \"FATAL\".",
                "type": "string"
            },
            {
                "name": "fatalStyle",
                "description": "CSS style(s) to apply to any message  with a severity class of \"FATAL\".",
                "type": "string"
            },
            {
                "name": "infoClass",
                "description": "CSS style class to apply to any message  with a severity class of \"INFO\".",
                "type": "string"
            },
            {
                "name": "infoStyle",
                "description": "CSS style(s) to apply to any message  with a severity class of \"INFO\".",
                "type": "string"
            },
            {
                "name": "lang",
                "description": "Code describing the language used in the generated markup  for this component.",
                "type": "string"
            },
            {
                "name": "style",
                "description": "CSS style(s) to be applied when this component is rendered.",
                "type": "string"
            },
            {
                "name": "styleClass",
                "description": "Space-separated list of CSS style class(es) to be applied when  this element is rendered. This value must be passed through  as the \"class\" attribute on generated markup.",
                "type": "string"
            },
            {
                "name": "title",
                "description": "Advisory title information about markup elements generated  for this component.",
                "type": "string"
            },
            {
                "name": "tooltip",
                "description": "Flag indicating whether the detail portion of the  message should be displayed as a tooltip.",
                "type": "boolean"
            },
            {
                "name": "warnClass",
                "description": "CSS style class to apply to any message  with a severity class of \"WARN\".",
                "type": "string"
            },
            {
                "name": "warnStyle",
                "description": "CSS style(s) to apply to any message  with a severity class of \"WARN\".",
                "type": "string"
            },
            {
                "name": "binding",
                "description": "The ValueExpression linking this component to a property in a  backing bean",
                "type": "string"
            },
            {
                "name": "role",
                "description": "<p class=\"changed_added_2_2\">Per the WAI-ARIA spec and its  relationship to HTML5 (Section title ARIA Role Attriubute),  every HTML element may have a \"role\" attribute whose value  must be passed through unmodified on the element on which it  is declared in the final rendered markup. The attribute, if  specified, must have a value that is a string literal that is,  or an EL Expression that evaluates to, a set of  space-separated tokens representing the various WAI-ARIA roles  that the element belongs to.  </p>",
                "type": "string"
            }
        ]
    },
    "h:messages": {
        "name": "h:messages",
        "description": "The  same as for the  Message renderer, but output all the messages. If an \"id\" attribute has been  specified,  it must be rendered on the outermost markup corresponding to this  component. If the value of the \"layout\" attribute is  \"table\", render nested \"table\", \"tr\", and \"td\" elements, in that  order. If the value of the \"layout\" attribute is \"list\", or the  \"layout\" attribute is not specified, render nested \"ul\", \"li\"  elements, in that order. Output the value of the \"style\" attribute  as the value of the \"style\" attribute, output the value of the  \"styleClass\" attribute as the value of the \"class\" attribute, and  output the dir and lang attributes. Output these values on the  \"table\" element or the \"ul\" element. Output the values of the  \"errorStyle\", \"fatalStyle\", \"infoStyle\", \"warnStyle\" attributes as  the value of the \"style\" attribute on either the \"tr\" element or  the \"li\" element. Output the values of the \"errorClass\",  \"fatalClass\", \"infoClass\", \"warnClass\" attributes as the value of  the \"class\" attribute on either the \"tr\" element or the \"li\"  element. The component is a `UIMessages`, and  there is  no \"for\" attribute. Therefore, use either `null`  to  obtain the messages from the `FacesContext`  or the empty  string if the components \"globalOnly\" property is  `true`. If the layout was \"table\" close out  the table  elements, otherwise, close out the list elements.</p>",
        "attributes": [
            {
                "name": "for",
                "description": "Client identifier of the component for which to display  messages. This  attribute is mutually exclusive with globalOnly and take  precedence  if used.",
                "type": "string"
            },
            {
                "name": "globalOnly",
                "description": "Flag indicating that only global messages (that is, messages not  associated with any client identifier) are to be displayed.  Default value is \"false\".",
                "type": "boolean"
            },
            {
                "name": "id",
                "description": "The component identifier for this component. This value must be  unique within the closest parent component that is a naming  container.",
                "type": "string"
            },
            {
                "name": "rendered",
                "description": "Flag indicating whether or not this component should be rendered  (during Render Response Phase), or processed on any subsequent  form submit. The default value for this property is true.",
                "type": "boolean"
            },
            {
                "name": "showDetail",
                "description": "Flag indicating whether the detail portion of displayed messages  should be included. Default value is \"false\".",
                "type": "boolean"
            },
            {
                "name": "showSummary",
                "description": "Flag indicating whether the summary portion of displayed  messages  should be included. Default value is \"true\".",
                "type": "boolean"
            },
            {
                "name": "dir",
                "description": "Direction indication for text that does not inherit  directionality.  Valid values are \"LTR\" (left-to-right) and \"RTL\"  (right-to-left).",
                "type": "string"
            },
            {
                "name": "errorClass",
                "description": "CSS style class to apply to any message  with a severity class of \"ERROR\".",
                "type": "string"
            },
            {
                "name": "errorStyle",
                "description": "CSS style(s) to apply to any message  with a severity class of \"ERROR\".",
                "type": "string"
            },
            {
                "name": "fatalClass",
                "description": "CSS style class to apply to any message  with a severity class of \"FATAL\".",
                "type": "string"
            },
            {
                "name": "fatalStyle",
                "description": "CSS style(s) to apply to any message  with a severity class of \"FATAL\".",
                "type": "string"
            },
            {
                "name": "infoClass",
                "description": "CSS style class to apply to any message  with a severity class of \"INFO\".",
                "type": "string"
            },
            {
                "name": "infoStyle",
                "description": "CSS style(s) to apply to any message  with a severity class of \"INFO\".",
                "type": "string"
            },
            {
                "name": "lang",
                "description": "Code describing the language used in the generated markup  for this component.",
                "type": "string"
            },
            {
                "name": "layout",
                "description": "The type of layout markup to use when rendering  error messages. Valid values are \"table\" (an HTML  table) and \"list\" (an HTML list). If not specified,  the default value is \"list\".",
                "type": "string"
            },
            {
                "name": "style",
                "description": "CSS style(s) to be applied when this component is rendered.",
                "type": "string"
            },
            {
                "name": "styleClass",
                "description": "Space-separated list of CSS style class(es) to be applied when  this element is rendered. This value must be passed through  as the \"class\" attribute on generated markup.",
                "type": "string"
            },
            {
                "name": "title",
                "description": "Advisory title information about markup elements generated  for this component.",
                "type": "string"
            },
            {
                "name": "tooltip",
                "description": "Flag indicating whether the detail portion of the  message should be displayed as a tooltip.",
                "type": "boolean"
            },
            {
                "name": "warnClass",
                "description": "CSS style class to apply to any message  with a severity class of \"WARN\".",
                "type": "string"
            },
            {
                "name": "warnStyle",
                "description": "CSS style(s) to apply to any message  with a severity class of \"WARN\".",
                "type": "string"
            },
            {
                "name": "binding",
                "description": "The ValueExpression linking this component to a property in a  backing bean",
                "type": "string"
            }
        ]
    },
    "h:outputFormat": {
        "name": "h:outputFormat",
        "description": "Render parameterized text. Obtain the  `style`, `styleClass`,  `dir`, and  `lang` attributees from this component. If  any are  present, render a \"span\" element. Output the  `styleClass` attribute (if present) as the  value of the  `class` attribute. Output the `style`  attribute as the value of the `style`  attribute.  Output the `dir` and `lang`  attributes as  pass through attributes. Accrue a list of the values of all child  `UIParameter` components of this component.  If there  are one or more accumulated parameter values, convert the list of  parameter values to an `Object` array, call  `MessageFormat.format()`, passing the  `value` of this component as the first  argument, and  the array of parameter values as the second argument, and render  the result. Otherwise, render the `value` of  this  component unmodified.</p>",
        "attributes": [
            {
                "name": "converter",
                "description": "Converter instance registered with this component.",
                "type": "string"
            },
            {
                "name": "id",
                "description": "The component identifier for this component. This value must be  unique within the closest parent component that is a naming  container.",
                "type": "string"
            },
            {
                "name": "rendered",
                "description": "Flag indicating whether or not this component should be rendered  (during Render Response Phase), or processed on any subsequent  form submit. The default value for this property is true.",
                "type": "boolean"
            },
            {
                "name": "value",
                "description": "The current value of this component.",
                "type": "string"
            },
            {
                "name": "dir",
                "description": "Direction indication for text that does not inherit  directionality.  Valid values are \"LTR\" (left-to-right) and \"RTL\"  (right-to-left).",
                "type": "string"
            },
            {
                "name": "escape",
                "description": "Flag indicating that characters that are sensitive  in HTML and XML markup must be escaped. This flag  is set to \"true\" by default.",
                "type": "boolean"
            },
            {
                "name": "lang",
                "description": "Code describing the language used in the generated markup  for this component.",
                "type": "string"
            },
            {
                "name": "style",
                "description": "CSS style(s) to be applied when this component is rendered.",
                "type": "string"
            },
            {
                "name": "styleClass",
                "description": "Space-separated list of CSS style class(es) to be applied when  this element is rendered. This value must be passed through  as the \"class\" attribute on generated markup.",
                "type": "string"
            },
            {
                "name": "title",
                "description": "Advisory title information about markup elements generated  for this component.",
                "type": "string"
            },
            {
                "name": "binding",
                "description": "The ValueExpression linking this component to a property in a  backing bean",
                "type": "string"
            },
            {
                "name": "role",
                "description": "<p class=\"changed_added_2_2\">Per the WAI-ARIA spec and its  relationship to HTML5 (Section title ARIA Role Attriubute),  every HTML element may have a \"role\" attribute whose value  must be passed through unmodified on the element on which it  is declared in the final rendered markup. The attribute, if  specified, must have a value that is a string literal that is,  or an EL Expression that evaluates to, a set of  space-separated tokens representing the various WAI-ARIA roles  that the element belongs to.  </p>",
                "type": "string"
            }
        ]
    },
    "h:outputLabel": {
        "name": "h:outputLabel",
        "description": "Renders an HTML \"label\" element. Render the current value  of the component as label text if it is specified. If a \"for\"  attribute is  specified, find the component specified by the value of the \"for\"  attribute, and render its client id as the value of the \"for\"  attribute.  If \"styleClass\" attribute is specified, render its value as the  value  of the \"class\" attribute.",
        "attributes": [
            {
                "name": "converter",
                "description": "Converter instance registered with this component.",
                "type": "string"
            },
            {
                "name": "id",
                "description": "The component identifier for this component. This value must be  unique within the closest parent component that is a naming  container.",
                "type": "string"
            },
            {
                "name": "rendered",
                "description": "Flag indicating whether or not this component should be rendered  (during Render Response Phase), or processed on any subsequent  form submit. The default value for this property is true.",
                "type": "boolean"
            },
            {
                "name": "value",
                "description": "The current value of this component.",
                "type": "string"
            },
            {
                "name": "accesskey",
                "description": "Access key that, when pressed, transfers focus  to this element.",
                "type": "string"
            },
            {
                "name": "dir",
                "description": "Direction indication for text that does not inherit  directionality.  Valid values are \"LTR\" (left-to-right) and \"RTL\"  (right-to-left).",
                "type": "string"
            },
            {
                "name": "escape",
                "description": "Flag indicating that characters that are sensitive  in HTML and XML markup must be escaped. If omitted, this  flag is assumed to be \"true\".",
                "type": "boolean"
            },
            {
                "name": "for",
                "description": "Client identifier of the component for which this element  is a label.",
                "type": "string"
            },
            {
                "name": "lang",
                "description": "Code describing the language used in the generated markup  for this component.",
                "type": "string"
            },
            {
                "name": "onblur",
                "description": "Javascript code executed when this element loses focus.",
                "type": "string"
            },
            {
                "name": "onclick",
                "description": "Javascript code executed when a pointer button is  clicked over this element.",
                "type": "string"
            },
            {
                "name": "ondblclick",
                "description": "Javascript code executed when a pointer button is  double clicked over this element.",
                "type": "string"
            },
            {
                "name": "onfocus",
                "description": "Javascript code executed when this element receives focus.",
                "type": "string"
            },
            {
                "name": "onkeydown",
                "description": "Javascript code executed when a key is  pressed down over this element.",
                "type": "string"
            },
            {
                "name": "onkeypress",
                "description": "Javascript code executed when a key is  pressed and released over this element.",
                "type": "string"
            },
            {
                "name": "onkeyup",
                "description": "Javascript code executed when a key is  released over this element.",
                "type": "string"
            },
            {
                "name": "onmousedown",
                "description": "Javascript code executed when a pointer button is  pressed down over this element.",
                "type": "string"
            },
            {
                "name": "onmousemove",
                "description": "Javascript code executed when a pointer button is  moved within this element.",
                "type": "string"
            },
            {
                "name": "onmouseout",
                "description": "Javascript code executed when a pointer button is  moved away from this element.",
                "type": "string"
            },
            {
                "name": "onmouseover",
                "description": "Javascript code executed when a pointer button is  moved onto this element.",
                "type": "string"
            },
            {
                "name": "onmouseup",
                "description": "Javascript code executed when a pointer button is  released over this element.",
                "type": "string"
            },
            {
                "name": "style",
                "description": "CSS style(s) to be applied when this component is rendered.",
                "type": "string"
            },
            {
                "name": "styleClass",
                "description": "Space-separated list of CSS style class(es) to be applied when  this element is rendered. This value must be passed through  as the \"class\" attribute on generated markup.",
                "type": "string"
            },
            {
                "name": "tabindex",
                "description": "Position of this element in the tabbing order  for the current document. This value must be  an integer between 0 and 32767.",
                "type": "string"
            },
            {
                "name": "title",
                "description": "Advisory title information about markup elements generated  for this component.",
                "type": "string"
            },
            {
                "name": "binding",
                "description": "The ValueExpression linking this component to a property in a  backing bean",
                "type": "string"
            },
            {
                "name": "role",
                "description": "<p class=\"changed_added_2_2\">Per the WAI-ARIA spec and its  relationship to HTML5 (Section title ARIA Role Attriubute),  every HTML element may have a \"role\" attribute whose value  must be passed through unmodified on the element on which it  is declared in the final rendered markup. The attribute, if  specified, must have a value that is a string literal that is,  or an EL Expression that evaluates to, a set of  space-separated tokens representing the various WAI-ARIA roles  that the element belongs to.  </p>",
                "type": "string"
            }
        ]
    },
    "h:outputLink": {
        "name": "h:outputLink",
        "description": "Render an HTML \"a\" anchor element. The value of the  component is rendered as the value of the \"href\" attribute. Any  child UIParameter components are appended to the String to be  output as the value of the \"href\" attribute as query parameters  before rendering. The entire \"href\" string must be passed through  a call to the `encodeResourceURL()` method of  the  `ExternalContext`. The name of the  UIParameter goes on  the left hand side, and the value of the UIParameter on the right  hand side. The name and the value must be URLEncoded. Each  UIParameter instance is separeted by an ampersand, as dictated in  the URL spec. If the \"styleClass\" attribute is specified, render  its value as the value of the \"class\" attribute. If the \"id\"  attribute  is specified, follow the same steps as mentioned in the  \"General  Notes on Encoding\" regarding the \"id\" attribute for  UIInput components.  If the \"disabled\" attribute is specified, do not render the HTML \"a\"  anchor element or the \"href\" element. Instead, render a \"span\"  element.  If the \"styleClass\" attribute is specified, render its value as the  value  of the \"class\" attribute on the \"span\". Render any pass-through  attributes  on the \"span\".",
        "attributes": [
            {
                "name": "converter",
                "description": "Converter instance registered with this component.",
                "type": "string"
            },
            {
                "name": "id",
                "description": "The component identifier for this component. This value must be  unique within the closest parent component that is a naming  container.",
                "type": "string"
            },
            {
                "name": "rendered",
                "description": "Flag indicating whether or not this component should be rendered  (during Render Response Phase), or processed on any subsequent  form submit. The default value for this property is true.",
                "type": "boolean"
            },
            {
                "name": "value",
                "description": "The current value of this component.",
                "type": "string"
            },
            {
                "name": "accesskey",
                "description": "Access key that, when pressed, transfers focus  to this element.",
                "type": "string"
            },
            {
                "name": "charset",
                "description": "The character encoding of the resource designated  by this hyperlink.",
                "type": "string"
            },
            {
                "name": "coords",
                "description": "The position and shape of the hot spot on the screen  (for use in client-side image maps).",
                "type": "string"
            },
            {
                "name": "dir",
                "description": "Direction indication for text that does not inherit  directionality.  Valid values are \"LTR\" (left-to-right) and \"RTL\"  (right-to-left).",
                "type": "string"
            },
            {
                "name": "disabled",
                "description": "Flag indicating that this element must never  receive focus or be included in a subsequent  submit.",
                "type": "boolean"
            },
            {
                "name": "hreflang",
                "description": "The language code of the resource designated  by this hyperlink.",
                "type": "string"
            },
            {
                "name": "lang",
                "description": "Code describing the language used in the generated markup  for this component.",
                "type": "string"
            },
            {
                "name": "onblur",
                "description": "Javascript code executed when this element loses focus.",
                "type": "string"
            },
            {
                "name": "onclick",
                "description": "Javascript code executed when a pointer button is  clicked over this element.",
                "type": "string"
            },
            {
                "name": "ondblclick",
                "description": "Javascript code executed when a pointer button is  double clicked over this element.",
                "type": "string"
            },
            {
                "name": "onfocus",
                "description": "Javascript code executed when this element receives focus.",
                "type": "string"
            },
            {
                "name": "onkeydown",
                "description": "Javascript code executed when a key is  pressed down over this element.",
                "type": "string"
            },
            {
                "name": "onkeypress",
                "description": "Javascript code executed when a key is  pressed and released over this element.",
                "type": "string"
            },
            {
                "name": "onkeyup",
                "description": "Javascript code executed when a key is  released over this element.",
                "type": "string"
            },
            {
                "name": "onmousedown",
                "description": "Javascript code executed when a pointer button is  pressed down over this element.",
                "type": "string"
            },
            {
                "name": "onmousemove",
                "description": "Javascript code executed when a pointer button is  moved within this element.",
                "type": "string"
            },
            {
                "name": "onmouseout",
                "description": "Javascript code executed when a pointer button is  moved away from this element.",
                "type": "string"
            },
            {
                "name": "onmouseover",
                "description": "Javascript code executed when a pointer button is  moved onto this element.",
                "type": "string"
            },
            {
                "name": "onmouseup",
                "description": "Javascript code executed when a pointer button is  released over this element.",
                "type": "string"
            },
            {
                "name": "rel",
                "description": "The relationship from the current document  to the anchor specified by this hyperlink.  The value of this attribute is a space-separated  list of link types.",
                "type": "string"
            },
            {
                "name": "rev",
                "description": "A reverse link from the anchor specified  by this hyperlink to the current document.  The value of this attribute is a space-separated  list of link types.",
                "type": "string"
            },
            {
                "name": "shape",
                "description": "The shape of the hot spot on the screen  (for use in client-side image maps). Valid  values are: default (entire region); rect  (rectangular region); circle (circular region);  and poly (polygonal region).",
                "type": "string"
            },
            {
                "name": "style",
                "description": "CSS style(s) to be applied when this component is rendered.",
                "type": "string"
            },
            {
                "name": "styleClass",
                "description": "Space-separated list of CSS style class(es) to be applied when  this element is rendered. This value must be passed through  as the \"class\" attribute on generated markup.",
                "type": "string"
            },
            {
                "name": "tabindex",
                "description": "Position of this element in the tabbing order  for the current document. This value must be  an integer between 0 and 32767.",
                "type": "string"
            },
            {
                "name": "target",
                "description": "Name of a frame where the resource  retrieved via this hyperlink is to  be displayed.",
                "type": "string"
            },
            {
                "name": "title",
                "description": "Advisory title information about markup elements generated  for this component.",
                "type": "string"
            },
            {
                "name": "type",
                "description": "The content type of the resource designated  by this hyperlink.",
                "type": "string"
            },
            {
                "name": "binding",
                "description": "The ValueExpression linking this component to a property in a  backing bean",
                "type": "string"
            },
            {
                "name": "role",
                "description": "<p class=\"changed_added_2_2\">Per the WAI-ARIA spec and its  relationship to HTML5 (Section title ARIA Role Attriubute),  every HTML element may have a \"role\" attribute whose value  must be passed through unmodified on the element on which it  is declared in the final rendered markup. The attribute, if  specified, must have a value that is a string literal that is,  or an EL Expression that evaluates to, a set of  space-separated tokens representing the various WAI-ARIA roles  that the element belongs to.  </p>",
                "type": "string"
            }
        ]
    },
    "h:outputStylesheet": {
        "name": "h:outputStylesheet",
        "description": "Render the markup for a `<link>` element that  renders the style `Resource` specified by the optional  `name` and `library` attributes.</p>",
        "attributes": [
            {
                "name": "role",
                "description": "<p class=\"changed_added_2_2\">Per the WAI-ARIA spec and its  relationship to HTML5 (Section title ARIA Role Attriubute),  every HTML element may have a \"role\" attribute whose value  must be passed through unmodified on the element on which it  is declared in the final rendered markup. The attribute, if  specified, must have a value that is a string literal that is,  or an EL Expression that evaluates to, a set of  space-separated tokens representing the various WAI-ARIA roles  that the element belongs to.  </p>",
                "type": "string"
            }
        ]
    },
    "h:outputText": {
        "name": "h:outputText",
        "description": "If the \"styleClass\", \"style\", \"dir\" or \"lang\"  attributes are present, render a \"span\" element. If the  \"styleClass\" attribute is present, render its value as the value  of the \"class\" attribute. If the \"style\" attribute is present,  pass it thru. If the \"escape\" attribute is not present, or it is  present and its value is \"true\" all angle brackets should be  converted to the ampersand xx semicolon syntax when rendering the  value of the \"value\" attribute as the value of the component. If  the \"escape\" attribute is present and is \"false\" the value of the  component should be rendered as text without escaping.",
        "attributes": [
            {
                "name": "converter",
                "description": "Converter instance registered with this component.",
                "type": "string"
            },
            {
                "name": "id",
                "description": "The component identifier for this component. This value must be  unique within the closest parent component that is a naming  container.",
                "type": "string"
            },
            {
                "name": "rendered",
                "description": "Flag indicating whether or not this component should be rendered  (during Render Response Phase), or processed on any subsequent  form submit. The default value for this property is true.",
                "type": "boolean"
            },
            {
                "name": "value",
                "description": "The current value of this component.",
                "type": "string"
            },
            {
                "name": "dir",
                "description": "Direction indication for text that does not inherit  directionality.  Valid values are \"LTR\" (left-to-right) and \"RTL\"  (right-to-left).",
                "type": "string"
            },
            {
                "name": "escape",
                "description": "Flag indicating that characters that are sensitive  in HTML and XML markup must be escaped. This flag  is set to \"true\" by default.",
                "type": "boolean"
            },
            {
                "name": "lang",
                "description": "Code describing the language used in the generated markup  for this component.",
                "type": "string"
            },
            {
                "name": "style",
                "description": "CSS style(s) to be applied when this component is rendered.",
                "type": "string"
            },
            {
                "name": "styleClass",
                "description": "Space-separated list of CSS style class(es) to be applied when  this element is rendered. This value must be passed through  as the \"class\" attribute on generated markup.",
                "type": "string"
            },
            {
                "name": "title",
                "description": "Advisory title information about markup elements generated  for this component.",
                "type": "string"
            },
            {
                "name": "binding",
                "description": "The ValueExpression linking this component to a property in a  backing bean",
                "type": "string"
            },
            {
                "name": "role",
                "description": "<p class=\"changed_added_2_2\">Per the WAI-ARIA spec and its  relationship to HTML5 (Section title ARIA Role Attriubute),  every HTML element may have a \"role\" attribute whose value  must be passed through unmodified on the element on which it  is declared in the final rendered markup. The attribute, if  specified, must have a value that is a string literal that is,  or an EL Expression that evaluates to, a set of  space-separated tokens representing the various WAI-ARIA roles  that the element belongs to.  </p>",
                "type": "string"
            }
        ]
    },
    "h:outputScript": {
        "name": "h:outputScript",
        "description": "Render the markup for a `<script>` element that  renders the script `Resource` specified by the optional  `name` attribute and `library` attributes.</p>",
        "attributes": [
            {
                "name": "role",
                "description": "<p class=\"changed_added_2_2\">Per the WAI-ARIA spec and its  relationship to HTML5 (Section title ARIA Role Attriubute),  every HTML element may have a \"role\" attribute whose value  must be passed through unmodified on the element on which it  is declared in the final rendered markup. The attribute, if  specified, must have a value that is a string literal that is,  or an EL Expression that evaluates to, a set of  space-separated tokens representing the various WAI-ARIA roles  that the element belongs to.  </p>",
                "type": "string"
            }
        ]
    },
    "h:panelGrid": {
        "name": "h:panelGrid",
        "description": "Renders an HTML \"table\" element, conforming to the  rules in the HTML 401 specification. Render the \"caption\" facet,  if present, inside a \"caption\" element immediately below the \"table\"  element.  If the \"captionClass\" attribute is specified, render its value as  the value  of the \"class\" attribute on the \"caption\" element. If the  \"captionStyle\" attribute  is specified, render its value as the value of the \"style\" attribute  on the \"caption\" element. If the \"styleClass\" attribute is  specified, render  its value as the value of the \"class\" attribute. Render the  pass-through  attributes in the table below. Render the \"header\" facet, if  present, inside of  \"thead\", \"tr\", and \"th\" elements, nested in that order. If the  \"headerClass\" attribute is specifed, render its value as the value  of the \"class\" attribute on the \"th\" element. Render \"colgroup\"  as the value of the \"scope\" attribute. Render the value of the  \"columns\" attribute as the value of the \"colspan\" attribute on the  \"th\" element. Render the \"footer\" facet if present, using similar  logic to the rendering of the \"header\", but replacing \"thead\" with  \"tfoot\", \"th\" with \"td\", and \"headerClass\" with \"footerClass\".  Render the children of the `UIPanel`  component inside  of a \"tbody\" element. Render the children based on the value of  the \"columns\" attribute, creating a new row each time a \"columns\"  worth of children have been rendered. For the start of each row,  render a \"tr\" element. Output the value of the \"rowClasses\" per  the attribute description below. For each child, output a \"td\"  element, attaching the value of the \"columnClasses\" attribute per  the attribute description below. Recursively encode each child.  Close out the \"td\" element. When done with the row, close out the  \"tr\" element. If a child has \"rendered==false\" it is not rendered,  and the column counter must not be incremented.",
        "attributes": [
            {
                "name": "id",
                "description": "The component identifier for this component. This value must be  unique within the closest parent component that is a naming  container.",
                "type": "string"
            },
            {
                "name": "rendered",
                "description": "Flag indicating whether or not this component should be rendered  (during Render Response Phase), or processed on any subsequent  form submit. The default value for this property is true.",
                "type": "boolean"
            },
            {
                "name": "bgcolor",
                "description": "Name or code of the background color for this table.",
                "type": "string"
            },
            {
                "name": "bodyrows",
                "description": "Comma separated list of row indices for which a new  \"tbody\" element should be started (and any  previously opened one should be ended).",
                "type": "string"
            },
            {
                "name": "border",
                "description": "Width (in pixels) of the border to be drawn  around this table.",
                "type": "string"
            },
            {
                "name": "captionClass",
                "description": "Space-separated list of CSS style class(es) that will be  applied to any caption generated for this table.",
                "type": "string"
            },
            {
                "name": "captionStyle",
                "description": "CSS style(s) to be applied when this caption is rendered.",
                "type": "string"
            },
            {
                "name": "cellpadding",
                "description": "Definition of how much space the user agent should  leave between the border of each cell and its contents.",
                "type": "string"
            },
            {
                "name": "cellspacing",
                "description": "Definition of how much space the user agent should  leave between the left side of the table and the  leftmost column, the top of the table and the top of  the top side of the topmost row, and so on for the  right and bottom of the table. It also specifies  the amount of space to leave between cells.",
                "type": "string"
            },
            {
                "name": "columnClasses",
                "description": "Comma-delimited list of CSS style classes that will be applied  to the columns of this table. A space separated list of  classes may also be specified for any individual column. If  the number of elements in this list is less than the number of  actual column children of the UIData, no \"class\"  attribute is output for each column greater than the number of  elements in the list. If the number of elements in the list  is greater than the number of actual column children of the  UIData, the elements at the posisiton in the list  after the last column are ignored.",
                "type": "string"
            },
            {
                "name": "columns",
                "description": "The number of columns to render before  starting a new row.",
                "type": "string"
            },
            {
                "name": "dir",
                "description": "Direction indication for text that does not inherit  directionality.  Valid values are \"LTR\" (left-to-right) and \"RTL\"  (right-to-left).",
                "type": "string"
            },
            {
                "name": "footerClass",
                "description": "Space-separated list of CSS style class(es) that will be  applied to any footer generated for this table.",
                "type": "string"
            },
            {
                "name": "frame",
                "description": "Code specifying which sides of the frame surrounding  this table will be visible. Valid values are:  none (no sides, default value); above (top side only);  below (bottom side only); hsides (top and bottom sides  only); vsides (right and left sides only); lhs (left  hand side only); rhs (right hand side only); box  (all four sides); and border (all four sides).",
                "type": "string"
            },
            {
                "name": "headerClass",
                "description": "Space-separated list of CSS style class(es) that will be  applied to any header generated for this table.",
                "type": "string"
            },
            {
                "name": "lang",
                "description": "Code describing the language used in the generated markup  for this component.",
                "type": "string"
            },
            {
                "name": "onclick",
                "description": "Javascript code executed when a pointer button is  clicked over this element.",
                "type": "string"
            },
            {
                "name": "ondblclick",
                "description": "Javascript code executed when a pointer button is  double clicked over this element.",
                "type": "string"
            },
            {
                "name": "onkeydown",
                "description": "Javascript code executed when a key is  pressed down over this element.",
                "type": "string"
            },
            {
                "name": "onkeypress",
                "description": "Javascript code executed when a key is  pressed and released over this element.",
                "type": "string"
            },
            {
                "name": "onkeyup",
                "description": "Javascript code executed when a key is  released over this element.",
                "type": "string"
            },
            {
                "name": "onmousedown",
                "description": "Javascript code executed when a pointer button is  pressed down over this element.",
                "type": "string"
            },
            {
                "name": "onmousemove",
                "description": "Javascript code executed when a pointer button is  moved within this element.",
                "type": "string"
            },
            {
                "name": "onmouseout",
                "description": "Javascript code executed when a pointer button is  moved away from this element.",
                "type": "string"
            },
            {
                "name": "onmouseover",
                "description": "Javascript code executed when a pointer button is  moved onto this element.",
                "type": "string"
            },
            {
                "name": "onmouseup",
                "description": "Javascript code executed when a pointer button is  released over this element.",
                "type": "string"
            },
            {
                "name": "rowClasses",
                "description": "Comma-delimited list of CSS style classes that will be applied  to the rows of this table. A space separated list of classes  may also be specified for any individual row. Thes styles are  applied, in turn, to each row in the table. For example, if  the list has two elements, the first style class in the list  is applied to the first row, the second to the second row, the  first to the third row, the second to the fourth row, etc. In  other words, we keep iterating through the list until we reach  the end, and then we start at the beginning again.",
                "type": "string"
            },
            {
                "name": "rules",
                "description": "Code specifying which rules will appear between cells  within this table. Valid values are: none (no rules,  default value); groups (between row groups); rows  (between rows only); cols (between columns only); and  all (between all rows and columns).",
                "type": "string"
            },
            {
                "name": "style",
                "description": "CSS style(s) to be applied when this component is rendered.",
                "type": "string"
            },
            {
                "name": "styleClass",
                "description": "Space-separated list of CSS style class(es) to be applied when  this element is rendered. This value must be passed through  as the \"class\" attribute on generated markup.",
                "type": "string"
            },
            {
                "name": "summary",
                "description": "Summary of this table's purpose and structure, for  user agents rendering to non-visual media such as  speech and Braille.",
                "type": "string"
            },
            {
                "name": "title",
                "description": "Advisory title information about markup elements generated  for this component.",
                "type": "string"
            },
            {
                "name": "width",
                "description": "Width of the entire table, for visual user agents.",
                "type": "string"
            },
            {
                "name": "binding",
                "description": "The ValueExpression linking this component to a property in a  backing bean",
                "type": "string"
            },
            {
                "name": "role",
                "description": "<p class=\"changed_added_2_2\">Per the WAI-ARIA spec and its  relationship to HTML5 (Section title ARIA Role Attriubute),  every HTML element may have a \"role\" attribute whose value  must be passed through unmodified on the element on which it  is declared in the final rendered markup. The attribute, if  specified, must have a value that is a string literal that is,  or an EL Expression that evaluates to, a set of  space-separated tokens representing the various WAI-ARIA roles  that the element belongs to.  </p>",
                "type": "string"
            }
        ]
    },
    "h:panelGroup": {
        "name": "h:panelGroup",
        "description": "Intended for use in situations when only one  UIComponent child can be nested, such as in the case of facets.  If the \"style\" or \"styleClass\" attributes are present, and the  \"layout\"  attribute is present with a value of \"block\", render a \"div\"  element,  outputting the value of the \"style\" attribute as the value of the  \"style\" attribute and the value of the \"styleClass\" attribute as the  value of the \"class\" attribute. Otherwise, if the \"layout\" attribute  is not present, or the \"layout\" attribute contains a value other  than  \"block\", render a \"span\" element, outputting the value of the  \"style\" attribute as the value of the \"style\" attribute, and the  value  of the \"styleClass\" attribute as the value of the \"class\"  attribute.",
        "attributes": [
            {
                "name": "id",
                "description": "The component identifier for this component. This value must be  unique within the closest parent component that is a naming  container.",
                "type": "string"
            },
            {
                "name": "rendered",
                "description": "Flag indicating whether or not this component should be rendered  (during Render Response Phase), or processed on any subsequent  form submit. The default value for this property is true.",
                "type": "boolean"
            },
            {
                "name": "layout",
                "description": "The type of layout markup to use when rendering this group.  If the value is \"block\" the renderer must produce an HTML  \"div\" element. Otherwise HTML \"span\" element must  be produced.",
                "type": "string"
            },
            {
                "name": "style",
                "description": "CSS style(s) to be applied when this component is rendered.",
                "type": "string"
            },
            {
                "name": "styleClass",
                "description": "Space-separated list of CSS style class(es) to be applied when  this element is rendered. This value must be passed through  as the \"class\" property on generated markup.",
                "type": "string"
            },
            {
                "name": "binding",
                "description": "The ValueExpression linking this component to a property in a  backing bean",
                "type": "string"
            }
        ]
    },
    "h:selectBooleanCheckbox": {
        "name": "h:selectBooleanCheckbox",
        "description": "Renders an HTML \"input\" element of type \"checkbox\".</p>",
        "attributes": [
            {
                "name": "converter",
                "description": "Converter instance registered with this component.",
                "type": "string"
            },
            {
                "name": "converterMessage",
                "description": "A ValueExpression enabled attribute that, if present, will be  used as the text of the converter message, replacing any message  that comes from the converter.",
                "type": "string"
            },
            {
                "name": "id",
                "description": "The component identifier for this component. This value must be  unique within the closest parent component that is a naming  container.",
                "type": "string"
            },
            {
                "name": "immediate",
                "description": "Flag indicating that this component's value must be  converted and validated immediately (that is, during  Apply Request Values phase), rather than waiting  until Process Validations phase.",
                "type": "boolean"
            },
            {
                "name": "rendered",
                "description": "Flag indicating whether or not this component should be rendered  (during Render Response Phase), or processed on any subsequent  form submit. The default value for this property is true.",
                "type": "boolean"
            },
            {
                "name": "required",
                "description": "Flag indicating that the user is required to provide a submitted  value for this input component.",
                "type": "boolean"
            },
            {
                "name": "requiredMessage",
                "description": "A ValueExpression enabled attribute that, if present, will be  used as the text of the validation message for the \"required\"  facility, if the \"required\" facility is used.",
                "type": "string"
            },
            {
                "name": "validator",
                "description": "MethodExpression representing a validator method that will be  called  during Process Validations to perform correctness checks on the  value of this component. The expression must evaluate to a  public  method that takes FacesContext, UIComponent, and Object  parameters,  with a return type of void.",
                "type": "string"
            },
            {
                "name": "validatorMessage",
                "description": "A ValueExpression enabled attribute that, if present, will be  used as the text of the validator message, replacing any  message that comes from the validator.",
                "type": "string"
            },
            {
                "name": "value",
                "description": "The current value of this component.",
                "type": "boolean"
            },
            {
                "name": "valueChangeListener",
                "description": "MethodExpression representing a value change listener method  that will be notified when a new value has been set for this  input component. The expression must evaluate to a public  method that takes a `ValueChangeEvent`  parameter,  with a return type of void, or  to a public method that takes no arguments with a return type  of void. In the latter case, the method has no way of easily  knowing what the new value is, but this can be useful in cases  where a notification is needed that \"this value  changed\".  </p>",
                "type": "string"
            },
            {
                "name": "accesskey",
                "description": "Access key that, when pressed, transfers focus  to this element.",
                "type": "string"
            },
            {
                "name": "dir",
                "description": "Direction indication for text that does not inherit  directionality.  Valid values are \"LTR\" (left-to-right) and \"RTL\"  (right-to-left).",
                "type": "string"
            },
            {
                "name": "disabled",
                "description": "Flag indicating that this element must never receive focus or  be included in a subsequent submit. A value of false causes  no attribute to be rendered, while a value of true causes the  attribute to be rendered as disabled=\"disabled\".",
                "type": "boolean"
            },
            {
                "name": "label",
                "description": "A localized user presentable name for this component.",
                "type": "string"
            },
            {
                "name": "lang",
                "description": "Code describing the language used in the generated markup  for this component.",
                "type": "string"
            },
            {
                "name": "onblur",
                "description": "Javascript code executed when this element loses focus.",
                "type": "string"
            },
            {
                "name": "onchange",
                "description": "Javascript code executed when this element loses focus  and its value has been modified since gaining focus.",
                "type": "string"
            },
            {
                "name": "onclick",
                "description": "Javascript code executed when a pointer button is  clicked over this element.",
                "type": "string"
            },
            {
                "name": "ondblclick",
                "description": "Javascript code executed when a pointer button is  double clicked over this element.",
                "type": "string"
            },
            {
                "name": "onfocus",
                "description": "Javascript code executed when this element receives focus.",
                "type": "string"
            },
            {
                "name": "onkeydown",
                "description": "Javascript code executed when a key is  pressed down over this element.",
                "type": "string"
            },
            {
                "name": "onkeypress",
                "description": "Javascript code executed when a key is  pressed and released over this element.",
                "type": "string"
            },
            {
                "name": "onkeyup",
                "description": "Javascript code executed when a key is  released over this element.",
                "type": "string"
            },
            {
                "name": "onmousedown",
                "description": "Javascript code executed when a pointer button is  pressed down over this element.",
                "type": "string"
            },
            {
                "name": "onmousemove",
                "description": "Javascript code executed when a pointer button is  moved within this element.",
                "type": "string"
            },
            {
                "name": "onmouseout",
                "description": "Javascript code executed when a pointer button is  moved away from this element.",
                "type": "string"
            },
            {
                "name": "onmouseover",
                "description": "Javascript code executed when a pointer button is  moved onto this element.",
                "type": "string"
            },
            {
                "name": "onmouseup",
                "description": "Javascript code executed when a pointer button is  released over this element.",
                "type": "string"
            },
            {
                "name": "onselect",
                "description": "Javascript code executed when text within this  element is selected by the user.",
                "type": "string"
            },
            {
                "name": "readonly",
                "description": "Flag indicating that this component will prohibit changes by  the user. The element may receive focus unless it has also  been disabled. A value of false causes  no attribute to be rendered, while a value of true causes the  attribute to be rendered as readonly=\"readonly\".",
                "type": "boolean"
            },
            {
                "name": "style",
                "description": "CSS style(s) to be applied when this component is rendered.",
                "type": "string"
            },
            {
                "name": "styleClass",
                "description": "Space-separated list of CSS style class(es) to be applied when  this element is rendered. This value must be passed through  as the \"class\" attribute on generated markup.",
                "type": "string"
            },
            {
                "name": "tabindex",
                "description": "Position of this element in the tabbing order  for the current document. This value must be  an integer between 0 and 32767.",
                "type": "string"
            },
            {
                "name": "title",
                "description": "Advisory title information about markup elements generated  for this component.",
                "type": "string"
            },
            {
                "name": "binding",
                "description": "The ValueExpression linking this component to a property in a  backing bean",
                "type": "string"
            },
            {
                "name": "role",
                "description": "<p class=\"changed_added_2_2\">Per the WAI-ARIA spec and its  relationship to HTML5 (Section title ARIA Role Attriubute),  every HTML element may have a \"role\" attribute whose value  must be passed through unmodified on the element on which it  is declared in the final rendered markup. The attribute, if  specified, must have a value that is a string literal that is,  or an EL Expression that evaluates to, a set of  space-separated tokens representing the various WAI-ARIA roles  that the element belongs to.  </p>",
                "type": "string"
            }
        ]
    },
    "h:selectManyCheckbox": {
        "name": "h:selectManyCheckbox",
        "description": "Render an HTML checkbox  list.</p>",
        "attributes": [
            {
                "name": "converter",
                "description": "Converter instance registered with this component.",
                "type": "string"
            },
            {
                "name": "converterMessage",
                "description": "A ValueExpression enabled attribute that, if present, will be  used as the text of the converter message, replacing any message  that comes from the converter.",
                "type": "string"
            },
            {
                "name": "id",
                "description": "The component identifier for this component. This value must be  unique within the closest parent component that is a naming  container.",
                "type": "string"
            },
            {
                "name": "immediate",
                "description": "Flag indicating that this component's value must be  converted and validated immediately (that is, during  Apply Request Values phase), rather than waiting  until Process Validations phase.",
                "type": "boolean"
            },
            {
                "name": "rendered",
                "description": "Flag indicating whether or not this component should be rendered  (during Render Response Phase), or processed on any subsequent  form submit. The default value for this property is true.",
                "type": "boolean"
            },
            {
                "name": "required",
                "description": "Flag indicating that the user is required to provide a submitted  value for this input component.",
                "type": "boolean"
            },
            {
                "name": "requiredMessage",
                "description": "A ValueExpression enabled attribute that, if present, will be  used as the text of the validation message for the \"required\"  facility, if the \"required\" facility is used.",
                "type": "string"
            },
            {
                "name": "validator",
                "description": "MethodExpression representing a validator method that will be  called  during Process Validations to perform correctness checks on the  value of this component. The expression must evaluate to a  public  method that takes FacesContext, UIComponent, and Object  parameters,  with a return type of void.",
                "type": "string"
            },
            {
                "name": "validatorMessage",
                "description": "A ValueExpression enabled attribute that, if present, will be  used as the text of the validator message, replacing any  message that comes from the validator.",
                "type": "string"
            },
            {
                "name": "value",
                "description": "The current value of this component.",
                "type": "string"
            },
            {
                "name": "valueChangeListener",
                "description": "MethodExpression representing a value change listener method  that will be notified when a new value has been set for this  input component. The expression must evaluate to a public  method that takes a `ValueChangeEvent`  parameter,  with a return type of void, or  to a public method that takes no arguments with a return type  of void. In the latter case, the method has no way of easily  knowing what the new value is, but this can be useful in cases  where a notification is needed that \"this value  changed\".  </p>",
                "type": "string"
            },
            {
                "name": "accesskey",
                "description": "Access key that, when pressed, transfers focus  to this element.",
                "type": "string"
            },
            {
                "name": "border",
                "description": "Width (in pixels) of the border to be drawn  around the table containing the options list.  <p class=\"changed_added_4_0\">This attribute is ignored when the \"layout\" attribute equals to \"list\".",
                "type": "string"
            },
            {
                "name": "collectionType",
                "description": "<p class=\"changed_modified_2_0\"> Optional  attribute that is a literal string that is the fully qualified  class name of a concrete class that implements  `java.util.Collection`, or an EL  expression that  evaluates to either 1. such a String, or 2. the  `Class` object itself. </p>",
                "type": "string"
            },
            {
                "name": "dir",
                "description": "Direction indication for text that does not inherit  directionality.  Valid values are \"LTR\" (left-to-right) and \"RTL\"  (right-to-left).",
                "type": "string"
            },
            {
                "name": "disabled",
                "description": "Flag indicating that this element must never receive focus or  be included in a subsequent submit. A value of false causes  no attribute to be rendered, while a value of true causes the  attribute to be rendered as disabled=\"disabled\".",
                "type": "boolean"
            },
            {
                "name": "disabledClass",
                "description": "CSS style class to apply to the rendered label  on disabled options.",
                "type": "string"
            },
            {
                "name": "enabledClass",
                "description": "CSS style class to apply to the rendered label  on enabled options.",
                "type": "string"
            },
            {
                "name": "hideNoSelectionOption",
                "description": "<p class=\"changed_modified_2_0\">  Flag indicating that, if this component is activated by the  user,  The \"no selection option\", if any, must be hidden.</p>",
                "type": "boolean"
            },
            {
                "name": "label",
                "description": "A localized user presentable name for this component.",
                "type": "string"
            },
            {
                "name": "lang",
                "description": "Code describing the language used in the generated markup  for this component.",
                "type": "string"
            },
            {
                "name": "layout",
                "description": "Orientation of the options list to be created.  Valid values are \"pageDirection\" (list is laid  out vertically), or \"lineDirection\" (list is  laid out horizontally). If not specified, the  default value is \"lineDirection\".",
                "type": "string"
            },
            {
                "name": "onblur",
                "description": "Javascript code executed when this element loses focus.",
                "type": "string"
            },
            {
                "name": "onchange",
                "description": "Javascript code executed when this element loses focus  and its value has been modified since gaining focus.",
                "type": "string"
            },
            {
                "name": "onclick",
                "description": "Javascript code executed when a pointer button is  clicked over this element.",
                "type": "string"
            },
            {
                "name": "ondblclick",
                "description": "Javascript code executed when a pointer button is  double clicked over this element.",
                "type": "string"
            },
            {
                "name": "onfocus",
                "description": "Javascript code executed when this element receives focus.",
                "type": "string"
            },
            {
                "name": "onkeydown",
                "description": "Javascript code executed when a key is  pressed down over this element.",
                "type": "string"
            },
            {
                "name": "onkeypress",
                "description": "Javascript code executed when a key is  pressed and released over this element.",
                "type": "string"
            },
            {
                "name": "onkeyup",
                "description": "Javascript code executed when a key is  released over this element.",
                "type": "string"
            },
            {
                "name": "onmousedown",
                "description": "Javascript code executed when a pointer button is  pressed down over this element.",
                "type": "string"
            },
            {
                "name": "onmousemove",
                "description": "Javascript code executed when a pointer button is  moved within this element.",
                "type": "string"
            },
            {
                "name": "onmouseout",
                "description": "Javascript code executed when a pointer button is  moved away from this element.",
                "type": "string"
            },
            {
                "name": "onmouseover",
                "description": "Javascript code executed when a pointer button is  moved onto this element.",
                "type": "string"
            },
            {
                "name": "onmouseup",
                "description": "Javascript code executed when a pointer button is  released over this element.",
                "type": "string"
            },
            {
                "name": "onselect",
                "description": "Javascript code executed when text within this  element is selected by the user.",
                "type": "string"
            },
            {
                "name": "readonly",
                "description": "Flag indicating that this component will prohibit changes by  the user. The element may receive focus unless it has also  been disabled. A value of false causes  no attribute to be rendered, while a value of true causes the  attribute to be rendered as readonly=\"readonly\".",
                "type": "boolean"
            },
            {
                "name": "selectedClass",
                "description": "CSS style class to apply to the rendered label  on selected options.",
                "type": "string"
            },
            {
                "name": "style",
                "description": "CSS style(s) to be applied when this component is rendered.",
                "type": "string"
            },
            {
                "name": "styleClass",
                "description": "Space-separated list of CSS style class(es) to be applied when  this element is rendered. This value must be passed through  as the \"class\" attribute on generated markup.",
                "type": "string"
            },
            {
                "name": "tabindex",
                "description": "Position of this element in the tabbing order  for the current document. This value must be  an integer between 0 and 32767.",
                "type": "string"
            },
            {
                "name": "title",
                "description": "Advisory title information about markup elements generated  for this component.",
                "type": "string"
            },
            {
                "name": "unselectedClass",
                "description": "CSS style class to apply to the rendered label  on unselected options.",
                "type": "string"
            },
            {
                "name": "binding",
                "description": "The ValueExpression linking this component to a property in a  backing bean",
                "type": "string"
            },
            {
                "name": "role",
                "description": "<p class=\"changed_added_2_2\">Per the WAI-ARIA spec and its  relationship to HTML5 (Section title ARIA Role Attriubute),  every HTML element may have a \"role\" attribute whose value  must be passed through unmodified on the element on which it  is declared in the final rendered markup. The attribute, if  specified, must have a value that is a string literal that is,  or an EL Expression that evaluates to, a set of  space-separated tokens representing the various WAI-ARIA roles  that the element belongs to.  </p>",
                "type": "string"
            }
        ]
    },
    "h:selectManyListbox": {
        "name": "h:selectManyListbox",
        "description": "Render an HTML option  list.</p>",
        "attributes": [
            {
                "name": "converter",
                "description": "Converter instance registered with this component.",
                "type": "string"
            },
            {
                "name": "converterMessage",
                "description": "A ValueExpression enabled attribute that, if present, will be  used as the text of the converter message, replacing any message  that comes from the converter.",
                "type": "string"
            },
            {
                "name": "id",
                "description": "The component identifier for this component. This value must be  unique within the closest parent component that is a naming  container.",
                "type": "string"
            },
            {
                "name": "immediate",
                "description": "Flag indicating that this component's value must be  converted and validated immediately (that is, during  Apply Request Values phase), rather than waiting  until Process Validations phase.",
                "type": "boolean"
            },
            {
                "name": "rendered",
                "description": "Flag indicating whether or not this component should be rendered  (during Render Response Phase), or processed on any subsequent  form submit. The default value for this property is true.",
                "type": "boolean"
            },
            {
                "name": "required",
                "description": "Flag indicating that the user is required to provide a submitted  value for this input component.",
                "type": "boolean"
            },
            {
                "name": "requiredMessage",
                "description": "A ValueExpression enabled attribute that, if present, will be  used as the text of the validation message for the \"required\"  facility, if the \"required\" facility is used.",
                "type": "string"
            },
            {
                "name": "validator",
                "description": "MethodExpression representing a validator method that will be  called  during Process Validations to perform correctness checks on the  value of this component. The expression must evaluate to a  public  method that takes FacesContext, UIComponent, and Object  parameters,  with a return type of void.",
                "type": "string"
            },
            {
                "name": "validatorMessage",
                "description": "A ValueExpression enabled attribute that, if present, will be  used as the text of the validator message, replacing any  message that comes from the validator.",
                "type": "string"
            },
            {
                "name": "value",
                "description": "The current value of this component.",
                "type": "string"
            },
            {
                "name": "valueChangeListener",
                "description": "MethodExpression representing a value change listener method  that will be notified when a new value has been set for this  input component. The expression must evaluate to a public  method that takes a `ValueChangeEvent`  parameter,  with a return type of void, or  to a public method that takes no arguments with a return type  of void. In the latter case, the method has no way of easily  knowing what the new value is, but this can be useful in cases  where a notification is needed that \"this value  changed\".  </p>",
                "type": "string"
            },
            {
                "name": "accesskey",
                "description": "Access key that, when pressed, transfers focus  to this element.",
                "type": "string"
            },
            {
                "name": "collectionType",
                "description": "<p class=\"changed_modified_2_0\"> Optional  attribute that is a literal string that is the fully qualified  class name of a concrete class that implements  `java.util.Collection`, or an EL  expression that  evaluates to either 1. such a String, or 2. the  `Class` object itself. </p>",
                "type": "string"
            },
            {
                "name": "dir",
                "description": "Direction indication for text that does not inherit  directionality.  Valid values are \"LTR\" (left-to-right) and \"RTL\"  (right-to-left).",
                "type": "string"
            },
            {
                "name": "disabled",
                "description": "Flag indicating that this element must never receive focus or  be included in a subsequent submit. A value of false causes  no attribute to be rendered, while a value of true causes the  attribute to be rendered as disabled=\"disabled\".",
                "type": "boolean"
            },
            {
                "name": "disabledClass",
                "description": "CSS style class to apply to the rendered label  on disabled options.",
                "type": "string"
            },
            {
                "name": "enabledClass",
                "description": "CSS style class to apply to the rendered label  on enabled options.",
                "type": "string"
            },
            {
                "name": "hideNoSelectionOption",
                "description": "<p class=\"changed_modified_2_0\">  Flag indicating that, if this component is activated by the  user,  The \"no selection option\", if any, must be hidden.</p>",
                "type": "boolean"
            },
            {
                "name": "label",
                "description": "A localized user presentable name for this component.",
                "type": "string"
            },
            {
                "name": "lang",
                "description": "Code describing the language used in the generated markup  for this component.",
                "type": "string"
            },
            {
                "name": "onblur",
                "description": "Javascript code executed when this element loses focus.",
                "type": "string"
            },
            {
                "name": "onchange",
                "description": "Javascript code executed when this element loses focus  and its value has been modified since gaining focus.",
                "type": "string"
            },
            {
                "name": "onclick",
                "description": "Javascript code executed when a pointer button is  clicked over this element.",
                "type": "string"
            },
            {
                "name": "ondblclick",
                "description": "Javascript code executed when a pointer button is  double clicked over this element.",
                "type": "string"
            },
            {
                "name": "onfocus",
                "description": "Javascript code executed when this element receives focus.",
                "type": "string"
            },
            {
                "name": "onkeydown",
                "description": "Javascript code executed when a key is  pressed down over this element.",
                "type": "string"
            },
            {
                "name": "onkeypress",
                "description": "Javascript code executed when a key is  pressed and released over this element.",
                "type": "string"
            },
            {
                "name": "onkeyup",
                "description": "Javascript code executed when a key is  released over this element.",
                "type": "string"
            },
            {
                "name": "onmousedown",
                "description": "Javascript code executed when a pointer button is  pressed down over this element.",
                "type": "string"
            },
            {
                "name": "onmousemove",
                "description": "Javascript code executed when a pointer button is  moved within this element.",
                "type": "string"
            },
            {
                "name": "onmouseout",
                "description": "Javascript code executed when a pointer button is  moved away from this element.",
                "type": "string"
            },
            {
                "name": "onmouseover",
                "description": "Javascript code executed when a pointer button is  moved onto this element.",
                "type": "string"
            },
            {
                "name": "onmouseup",
                "description": "Javascript code executed when a pointer button is  released over this element.",
                "type": "string"
            },
            {
                "name": "readonly",
                "description": "Flag indicating that this component will prohibit changes by  the user. The element may receive focus unless it has also  been disabled. A value of false causes  no attribute to be rendered, while a value of true causes the  attribute to be rendered as readonly=\"readonly\".",
                "type": "boolean"
            },
            {
                "name": "size",
                "description": "Number of available options to be shown at all times.  If not specified, all available options are shown.",
                "type": "string"
            },
            {
                "name": "style",
                "description": "CSS style(s) to be applied when this component is rendered.",
                "type": "string"
            },
            {
                "name": "styleClass",
                "description": "Space-separated list of CSS style class(es) to be applied when  this element is rendered. This value must be passed through  as the \"class\" attribute on generated markup.",
                "type": "string"
            },
            {
                "name": "tabindex",
                "description": "Position of this element in the tabbing order  for the current document. This value must be  an integer between 0 and 32767.",
                "type": "string"
            },
            {
                "name": "title",
                "description": "Advisory title information about markup elements generated  for this component.",
                "type": "string"
            },
            {
                "name": "binding",
                "description": "The ValueExpression linking this component to a property in a  backing bean",
                "type": "string"
            },
            {
                "name": "role",
                "description": "<p class=\"changed_added_2_2\">Per the WAI-ARIA spec and its  relationship to HTML5 (Section title ARIA Role Attriubute),  every HTML element may have a \"role\" attribute whose value  must be passed through unmodified on the element on which it  is declared in the final rendered markup. The attribute, if  specified, must have a value that is a string literal that is,  or an EL Expression that evaluates to, a set of  space-separated tokens representing the various WAI-ARIA roles  that the element belongs to.  </p>",
                "type": "string"
            }
        ]
    },
    "h:selectManyMenu": {
        "name": "h:selectManyMenu",
        "description": "Render an HTML option  list.</p>",
        "attributes": [
            {
                "name": "converter",
                "description": "Converter instance registered with this component.",
                "type": "string"
            },
            {
                "name": "converterMessage",
                "description": "A ValueExpression enabled attribute that, if present, will be  used as the text of the converter message, replacing any message  that comes from the converter.",
                "type": "string"
            },
            {
                "name": "id",
                "description": "The component identifier for this component. This value must be  unique within the closest parent component that is a naming  container.",
                "type": "string"
            },
            {
                "name": "immediate",
                "description": "Flag indicating that this component's value must be  converted and validated immediately (that is, during  Apply Request Values phase), rather than waiting  until Process Validations phase.",
                "type": "boolean"
            },
            {
                "name": "rendered",
                "description": "Flag indicating whether or not this component should be rendered  (during Render Response Phase), or processed on any subsequent  form submit. The default value for this property is true.",
                "type": "boolean"
            },
            {
                "name": "required",
                "description": "Flag indicating that the user is required to provide a submitted  value for this input component.",
                "type": "boolean"
            },
            {
                "name": "requiredMessage",
                "description": "A ValueExpression enabled attribute that, if present, will be  used as the text of the validation message for the \"required\"  facility, if the \"required\" facility is used.",
                "type": "string"
            },
            {
                "name": "validator",
                "description": "MethodExpression representing a validator method that will be  called  during Process Validations to perform correctness checks on the  value of this component. The expression must evaluate to a  public  method that takes FacesContext, UIComponent, and Object  parameters,  with a return type of void.",
                "type": "string"
            },
            {
                "name": "validatorMessage",
                "description": "A ValueExpression enabled attribute that, if present, will be  used as the text of the validator message, replacing any  message that comes from the validator.",
                "type": "string"
            },
            {
                "name": "value",
                "description": "The current value of this component.",
                "type": "string"
            },
            {
                "name": "valueChangeListener",
                "description": "MethodExpression representing a value change listener method  that will be notified when a new value has been set for this  input component. The expression must evaluate to a public  method that takes a `ValueChangeEvent`  parameter,  with a return type of void, or  to a public method that takes no arguments with a return type  of void. In the latter case, the method has no way of easily  knowing what the new value is, but this can be useful in cases  where a notification is needed that \"this value  changed\".  </p>",
                "type": "string"
            },
            {
                "name": "accesskey",
                "description": "Access key that, when pressed, transfers focus  to this element.",
                "type": "string"
            },
            {
                "name": "collectionType",
                "description": "<p class=\"changed_modified_2_0\"> Optional  attribute that is a literal string that is the fully qualified  class name of a concrete class that implements  `java.util.Collection`, or an EL  expression that  evaluates to either 1. such a String, or 2. the  `Class` object itself. </p>",
                "type": "string"
            },
            {
                "name": "dir",
                "description": "Direction indication for text that does not inherit  directionality.  Valid values are \"LTR\" (left-to-right) and \"RTL\"  (right-to-left).",
                "type": "string"
            },
            {
                "name": "disabled",
                "description": "Flag indicating that this element must never receive focus or  be included in a subsequent submit. A value of false causes  no attribute to be rendered, while a value of true causes the  attribute to be rendered as disabled=\"disabled\".",
                "type": "boolean"
            },
            {
                "name": "disabledClass",
                "description": "CSS style class to apply to the rendered label  on disabled options.",
                "type": "string"
            },
            {
                "name": "enabledClass",
                "description": "CSS style class to apply to the rendered label  on enabled options.",
                "type": "string"
            },
            {
                "name": "hideNoSelectionOption",
                "description": "<p class=\"changed_modified_2_0\">  Flag indicating that, if this component is activated by the  user,  The \"no selection option\", if any, must be hidden.</p>",
                "type": "boolean"
            },
            {
                "name": "label",
                "description": "A localized user presentable name for this component.",
                "type": "string"
            },
            {
                "name": "lang",
                "description": "Code describing the language used in the generated markup  for this component.",
                "type": "string"
            },
            {
                "name": "onblur",
                "description": "Javascript code executed when this element loses focus.",
                "type": "string"
            },
            {
                "name": "onchange",
                "description": "Javascript code executed when this element loses focus  and its value has been modified since gaining focus.",
                "type": "string"
            },
            {
                "name": "onclick",
                "description": "Javascript code executed when a pointer button is  clicked over this element.",
                "type": "string"
            },
            {
                "name": "ondblclick",
                "description": "Javascript code executed when a pointer button is  double clicked over this element.",
                "type": "string"
            },
            {
                "name": "onfocus",
                "description": "Javascript code executed when this element receives focus.",
                "type": "string"
            },
            {
                "name": "onkeydown",
                "description": "Javascript code executed when a key is  pressed down over this element.",
                "type": "string"
            },
            {
                "name": "onkeypress",
                "description": "Javascript code executed when a key is  pressed and released over this element.",
                "type": "string"
            },
            {
                "name": "onkeyup",
                "description": "Javascript code executed when a key is  released over this element.",
                "type": "string"
            },
            {
                "name": "onmousedown",
                "description": "Javascript code executed when a pointer button is  pressed down over this element.",
                "type": "string"
            },
            {
                "name": "onmousemove",
                "description": "Javascript code executed when a pointer button is  moved within this element.",
                "type": "string"
            },
            {
                "name": "onmouseout",
                "description": "Javascript code executed when a pointer button is  moved away from this element.",
                "type": "string"
            },
            {
                "name": "onmouseover",
                "description": "Javascript code executed when a pointer button is  moved onto this element.",
                "type": "string"
            },
            {
                "name": "onmouseup",
                "description": "Javascript code executed when a pointer button is  released over this element.",
                "type": "string"
            },
            {
                "name": "readonly",
                "description": "Flag indicating that this component will prohibit changes by  the user. The element may receive focus unless it has also  been disabled. A value of false causes  no attribute to be rendered, while a value of true causes the  attribute to be rendered as readonly=\"readonly\".",
                "type": "boolean"
            },
            {
                "name": "style",
                "description": "CSS style(s) to be applied when this component is rendered.",
                "type": "string"
            },
            {
                "name": "styleClass",
                "description": "Space-separated list of CSS style class(es) to be applied when  this element is rendered. This value must be passed through  as the \"class\" attribute on generated markup.",
                "type": "string"
            },
            {
                "name": "tabindex",
                "description": "Position of this element in the tabbing order  for the current document. This value must be  an integer between 0 and 32767.",
                "type": "string"
            },
            {
                "name": "title",
                "description": "Advisory title information about markup elements generated  for this component.",
                "type": "string"
            },
            {
                "name": "binding",
                "description": "The ValueExpression linking this component to a property in a  backing bean",
                "type": "string"
            },
            {
                "name": "role",
                "description": "<p class=\"changed_added_2_2\">Per the WAI-ARIA spec and its  relationship to HTML5 (Section title ARIA Role Attriubute),  every HTML element may have a \"role\" attribute whose value  must be passed through unmodified on the element on which it  is declared in the final rendered markup. The attribute, if  specified, must have a value that is a string literal that is,  or an EL Expression that evaluates to, a set of  space-separated tokens representing the various WAI-ARIA roles  that the element belongs to.  </p>",
                "type": "string"
            }
        ]
    },
    "h:selectOneListbox": {
        "name": "h:selectOneListbox",
        "description": "Render an HTML option list.</p>",
        "attributes": [
            {
                "name": "converter",
                "description": "Converter instance registered with this component.",
                "type": "string"
            },
            {
                "name": "converterMessage",
                "description": "A ValueExpression enabled attribute that, if present, will be  used as the text of the converter message, replacing any message  that comes from the converter.",
                "type": "string"
            },
            {
                "name": "id",
                "description": "The component identifier for this component. This value must be  unique within the closest parent component that is a naming  container.",
                "type": "string"
            },
            {
                "name": "immediate",
                "description": "Flag indicating that this component's value must be  converted and validated immediately (that is, during  Apply Request Values phase), rather than waiting  until Process Validations phase.",
                "type": "boolean"
            },
            {
                "name": "rendered",
                "description": "Flag indicating whether or not this component should be rendered  (during Render Response Phase), or processed on any subsequent  form submit. The default value for this property is true.",
                "type": "boolean"
            },
            {
                "name": "required",
                "description": "Flag indicating that the user is required to provide a submitted  value for this input component.",
                "type": "boolean"
            },
            {
                "name": "requiredMessage",
                "description": "A ValueExpression enabled attribute that, if present, will be  used as the text of the validation message for the \"required\"  facility, if the \"required\" facility is used.",
                "type": "string"
            },
            {
                "name": "validator",
                "description": "MethodExpression representing a validator method that will be  called  during Process Validations to perform correctness checks on the  value of this component. The expression must evaluate to a  public  method that takes FacesContext, UIComponent, and Object  parameters,  with a return type of void.",
                "type": "string"
            },
            {
                "name": "validatorMessage",
                "description": "A ValueExpression enabled attribute that, if present, will be  used as the text of the validator message, replacing any  message that comes from the validator.",
                "type": "string"
            },
            {
                "name": "value",
                "description": "The current value of this component.",
                "type": "string"
            },
            {
                "name": "valueChangeListener",
                "description": "MethodExpression representing a value change listener method  that will be notified when a new value has been set for this  input component. The expression must evaluate to a public  method that takes a `ValueChangeEvent`  parameter,  with a return type of void, or  to a public method that takes no arguments with a return type  of void. In the latter case, the method has no way of easily  knowing what the new value is, but this can be useful in cases  where a notification is needed that \"this value  changed\".  </p>",
                "type": "string"
            },
            {
                "name": "accesskey",
                "description": "Access key that, when pressed, transfers focus  to this element.",
                "type": "string"
            },
            {
                "name": "dir",
                "description": "Direction indication for text that does not inherit  directionality.  Valid values are \"LTR\" (left-to-right) and \"RTL\"  (right-to-left).",
                "type": "string"
            },
            {
                "name": "disabled",
                "description": "Flag indicating that this element must never receive focus or  be included in a subsequent submit. A value of false causes  no attribute to be rendered, while a value of true causes the  attribute to be rendered as disabled=\"disabled\".",
                "type": "boolean"
            },
            {
                "name": "disabledClass",
                "description": "CSS style class to apply to the rendered label  on disabled options.",
                "type": "string"
            },
            {
                "name": "enabledClass",
                "description": "CSS style class to apply to the rendered label  on enabled options.",
                "type": "string"
            },
            {
                "name": "hideNoSelectionOption",
                "description": "<p class=\"changed_modified_2_0\">  Flag indicating that, if this component is activated by the  user,  The \"no selection option\", if any, must be hidden.</p>",
                "type": "boolean"
            },
            {
                "name": "label",
                "description": "A localized user presentable name for this component.",
                "type": "string"
            },
            {
                "name": "lang",
                "description": "Code describing the language used in the generated markup  for this component.",
                "type": "string"
            },
            {
                "name": "onblur",
                "description": "Javascript code executed when this element loses focus.",
                "type": "string"
            },
            {
                "name": "onchange",
                "description": "Javascript code executed when this element loses focus  and its value has been modified since gaining focus.",
                "type": "string"
            },
            {
                "name": "onclick",
                "description": "Javascript code executed when a pointer button is  clicked over this element.",
                "type": "string"
            },
            {
                "name": "ondblclick",
                "description": "Javascript code executed when a pointer button is  double clicked over this element.",
                "type": "string"
            },
            {
                "name": "onfocus",
                "description": "Javascript code executed when this element receives focus.",
                "type": "string"
            },
            {
                "name": "onkeydown",
                "description": "Javascript code executed when a key is  pressed down over this element.",
                "type": "string"
            },
            {
                "name": "onkeypress",
                "description": "Javascript code executed when a key is  pressed and released over this element.",
                "type": "string"
            },
            {
                "name": "onkeyup",
                "description": "Javascript code executed when a key is  released over this element.",
                "type": "string"
            },
            {
                "name": "onmousedown",
                "description": "Javascript code executed when a pointer button is  pressed down over this element.",
                "type": "string"
            },
            {
                "name": "onmousemove",
                "description": "Javascript code executed when a pointer button is  moved within this element.",
                "type": "string"
            },
            {
                "name": "onmouseout",
                "description": "Javascript code executed when a pointer button is  moved away from this element.",
                "type": "string"
            },
            {
                "name": "onmouseover",
                "description": "Javascript code executed when a pointer button is  moved onto this element.",
                "type": "string"
            },
            {
                "name": "onmouseup",
                "description": "Javascript code executed when a pointer button is  released over this element.",
                "type": "string"
            },
            {
                "name": "readonly",
                "description": "Flag indicating that this component will prohibit changes by  the user. The element may receive focus unless it has also  been disabled. A value of false causes  no attribute to be rendered, while a value of true causes the  attribute to be rendered as readonly=\"readonly\".",
                "type": "boolean"
            },
            {
                "name": "size",
                "description": "Number of available options to be shown at all times.  If not specified, all available options are shown.",
                "type": "string"
            },
            {
                "name": "style",
                "description": "CSS style(s) to be applied when this component is rendered.",
                "type": "string"
            },
            {
                "name": "styleClass",
                "description": "Space-separated list of CSS style class(es) to be applied when  this element is rendered. This value must be passed through  as the \"class\" attribute on generated markup.",
                "type": "string"
            },
            {
                "name": "tabindex",
                "description": "Position of this element in the tabbing order  for the current document. This value must be  an integer between 0 and 32767.",
                "type": "string"
            },
            {
                "name": "title",
                "description": "Advisory title information about markup elements generated  for this component.",
                "type": "string"
            },
            {
                "name": "binding",
                "description": "The ValueExpression linking this component to a property in a  backing bean",
                "type": "string"
            },
            {
                "name": "role",
                "description": "<p class=\"changed_added_2_2\">Per the WAI-ARIA spec and its  relationship to HTML5 (Section title ARIA Role Attriubute),  every HTML element may have a \"role\" attribute whose value  must be passed through unmodified on the element on which it  is declared in the final rendered markup. The attribute, if  specified, must have a value that is a string literal that is,  or an EL Expression that evaluates to, a set of  space-separated tokens representing the various WAI-ARIA roles  that the element belongs to.  </p>",
                "type": "string"
            }
        ]
    },
    "h:selectOneMenu": {
        "name": "h:selectOneMenu",
        "description": "Render an HTML option list.</p>",
        "attributes": [
            {
                "name": "converter",
                "description": "Converter instance registered with this component.",
                "type": "string"
            },
            {
                "name": "converterMessage",
                "description": "A ValueExpression enabled attribute that, if present, will be  used as the text of the converter message, replacing any message  that comes from the converter.",
                "type": "string"
            },
            {
                "name": "id",
                "description": "The component identifier for this component. This value must be  unique within the closest parent component that is a naming  container.",
                "type": "string"
            },
            {
                "name": "immediate",
                "description": "Flag indicating that this component's value must be  converted and validated immediately (that is, during  Apply Request Values phase), rather than waiting  until Process Validations phase.",
                "type": "boolean"
            },
            {
                "name": "rendered",
                "description": "Flag indicating whether or not this component should be rendered  (during Render Response Phase), or processed on any subsequent  form submit. The default value for this property is true.",
                "type": "boolean"
            },
            {
                "name": "required",
                "description": "Flag indicating that the user is required to provide a submitted  value for this input component.",
                "type": "boolean"
            },
            {
                "name": "requiredMessage",
                "description": "A ValueExpression enabled attribute that, if present, will be  used as the text of the validation message for the \"required\"  facility, if the \"required\" facility is used.",
                "type": "string"
            },
            {
                "name": "validator",
                "description": "MethodExpression representing a validator method that will be  called  during Process Validations to perform correctness checks on the  value of this component. The expression must evaluate to a  public  method that takes FacesContext, UIComponent, and Object  parameters,  with a return type of void.",
                "type": "string"
            },
            {
                "name": "validatorMessage",
                "description": "A ValueExpression enabled attribute that, if present, will be  used as the text of the validator message, replacing any  message that comes from the validator.",
                "type": "string"
            },
            {
                "name": "value",
                "description": "The current value of this component.",
                "type": "string"
            },
            {
                "name": "valueChangeListener",
                "description": "MethodExpression representing a value change listener method  that will be notified when a new value has been set for this  input component. The expression must evaluate to a public  method that takes a `ValueChangeEvent`  parameter,  with a return type of void, or  to a public method that takes no arguments with a return type  of void. In the latter case, the method has no way of easily  knowing what the new value is, but this can be useful in cases  where a notification is needed that \"this value  changed\".  </p>",
                "type": "string"
            },
            {
                "name": "accesskey",
                "description": "Access key that, when pressed, transfers focus  to this element.",
                "type": "string"
            },
            {
                "name": "dir",
                "description": "Direction indication for text that does not inherit  directionality.  Valid values are \"LTR\" (left-to-right) and \"RTL\"  (right-to-left).",
                "type": "string"
            },
            {
                "name": "disabled",
                "description": "Flag indicating that this element must never receive focus or  be included in a subsequent submit. A value of false causes  no attribute to be rendered, while a value of true causes the  attribute to be rendered as disabled=\"disabled\".",
                "type": "boolean"
            },
            {
                "name": "disabledClass",
                "description": "CSS style class to apply to the rendered label  on disabled options.",
                "type": "string"
            },
            {
                "name": "enabledClass",
                "description": "CSS style class to apply to the rendered label  on enabled options.",
                "type": "string"
            },
            {
                "name": "hideNoSelectionOption",
                "description": "<p class=\"changed_modified_2_0\">  Flag indicating that, if this component is activated by the  user,  The \"no selection option\", if any, must be hidden.</p>",
                "type": "boolean"
            },
            {
                "name": "label",
                "description": "A localized user presentable name for this component.",
                "type": "string"
            },
            {
                "name": "lang",
                "description": "Code describing the language used in the generated markup  for this component.",
                "type": "string"
            },
            {
                "name": "onblur",
                "description": "Javascript code executed when this element loses focus.",
                "type": "string"
            },
            {
                "name": "onchange",
                "description": "Javascript code executed when this element loses focus  and its value has been modified since gaining focus.",
                "type": "string"
            },
            {
                "name": "onclick",
                "description": "Javascript code executed when a pointer button is  clicked over this element.",
                "type": "string"
            },
            {
                "name": "ondblclick",
                "description": "Javascript code executed when a pointer button is  double clicked over this element.",
                "type": "string"
            },
            {
                "name": "onfocus",
                "description": "Javascript code executed when this element receives focus.",
                "type": "string"
            },
            {
                "name": "onkeydown",
                "description": "Javascript code executed when a key is  pressed down over this element.",
                "type": "string"
            },
            {
                "name": "onkeypress",
                "description": "Javascript code executed when a key is  pressed and released over this element.",
                "type": "string"
            },
            {
                "name": "onkeyup",
                "description": "Javascript code executed when a key is  released over this element.",
                "type": "string"
            },
            {
                "name": "onmousedown",
                "description": "Javascript code executed when a pointer button is  pressed down over this element.",
                "type": "string"
            },
            {
                "name": "onmousemove",
                "description": "Javascript code executed when a pointer button is  moved within this element.",
                "type": "string"
            },
            {
                "name": "onmouseout",
                "description": "Javascript code executed when a pointer button is  moved away from this element.",
                "type": "string"
            },
            {
                "name": "onmouseover",
                "description": "Javascript code executed when a pointer button is  moved onto this element.",
                "type": "string"
            },
            {
                "name": "onmouseup",
                "description": "Javascript code executed when a pointer button is  released over this element.",
                "type": "string"
            },
            {
                "name": "readonly",
                "description": "Flag indicating that this component will prohibit changes by  the user. The element may receive focus unless it has also  been disabled. A value of false causes  no attribute to be rendered, while a value of true causes the  attribute to be rendered as readonly=\"readonly\".",
                "type": "boolean"
            },
            {
                "name": "style",
                "description": "CSS style(s) to be applied when this component is rendered.",
                "type": "string"
            },
            {
                "name": "styleClass",
                "description": "Space-separated list of CSS style class(es) to be applied when  this element is rendered. This value must be passed through  as the \"class\" attribute on generated markup.",
                "type": "string"
            },
            {
                "name": "tabindex",
                "description": "Position of this element in the tabbing order  for the current document. This value must be  an integer between 0 and 32767.",
                "type": "string"
            },
            {
                "name": "title",
                "description": "Advisory title information about markup elements generated  for this component.",
                "type": "string"
            },
            {
                "name": "binding",
                "description": "The ValueExpression linking this component to a property in a  backing bean",
                "type": "string"
            },
            {
                "name": "role",
                "description": "<p class=\"changed_added_2_2\">Per the WAI-ARIA spec and its  relationship to HTML5 (Section title ARIA Role Attriubute),  every HTML element may have a \"role\" attribute whose value  must be passed through unmodified on the element on which it  is declared in the final rendered markup. The attribute, if  specified, must have a value that is a string literal that is,  or an EL Expression that evaluates to, a set of  space-separated tokens representing the various WAI-ARIA roles  that the element belongs to.  </p>",
                "type": "string"
            }
        ]
    },
    "h:selectOneRadio": {
        "name": "h:selectOneRadio",
        "description": "Render a set of html \"input\" elements of type \"radio\".</p>",
        "attributes": [
            {
                "name": "converter",
                "description": "Converter instance registered with this component.",
                "type": "string"
            },
            {
                "name": "converterMessage",
                "description": "A ValueExpression enabled attribute that, if present, will be  used as the text of the converter message, replacing any message  that comes from the converter.",
                "type": "string"
            },
            {
                "name": "id",
                "description": "The component identifier for this component. This value must be  unique within the closest parent component that is a naming  container.",
                "type": "string"
            },
            {
                "name": "immediate",
                "description": "Flag indicating that this component's value must be  converted and validated immediately (that is, during  Apply Request Values phase), rather than waiting  until Process Validations phase.",
                "type": "boolean"
            },
            {
                "name": "rendered",
                "description": "Flag indicating whether or not this component should be rendered  (during Render Response Phase), or processed on any subsequent  form submit. The default value for this property is true.",
                "type": "boolean"
            },
            {
                "name": "required",
                "description": "Flag indicating that the user is required to provide a submitted  value for this input component.",
                "type": "boolean"
            },
            {
                "name": "requiredMessage",
                "description": "A ValueExpression enabled attribute that, if present, will be  used as the text of the validation message for the \"required\"  facility, if the \"required\" facility is used.",
                "type": "string"
            },
            {
                "name": "validator",
                "description": "MethodExpression representing a validator method that will be  called  during Process Validations to perform correctness checks on the  value of this component. The expression must evaluate to a  public  method that takes FacesContext, UIComponent, and Object  parameters,  with a return type of void.",
                "type": "string"
            },
            {
                "name": "validatorMessage",
                "description": "A ValueExpression enabled attribute that, if present, will be  used as the text of the validator message, replacing any  message that comes from the validator.",
                "type": "string"
            },
            {
                "name": "value",
                "description": "The current value of this component.",
                "type": "string"
            },
            {
                "name": "valueChangeListener",
                "description": "MethodExpression representing a value change listener method  that will be notified when a new value has been set for this  input component. The expression must evaluate to a public  method that takes a `ValueChangeEvent`  parameter,  with a return type of void, or  to a public method that takes no arguments with a return type  of void. In the latter case, the method has no way of easily  knowing what the new value is, but this can be useful in cases  where a notification is needed that \"this value  changed\".  </p>",
                "type": "string"
            },
            {
                "name": "accesskey",
                "description": "Access key that, when pressed, transfers focus  to this element.",
                "type": "string"
            },
            {
                "name": "border",
                "description": "Width (in pixels) of the border to be drawn  around the table containing the options list.  <p class=\"changed_added_4_0\">This attribute is ignored when the \"layout\" attribute equals to \"list\".",
                "type": "string"
            },
            {
                "name": "dir",
                "description": "Direction indication for text that does not inherit  directionality.  Valid values are \"LTR\" (left-to-right) and \"RTL\"  (right-to-left).",
                "type": "string"
            },
            {
                "name": "disabled",
                "description": "Flag indicating that this element must never receive focus or  be included in a subsequent submit. A value of false causes  no attribute to be rendered, while a value of true causes the  attribute to be rendered as disabled=\"disabled\".",
                "type": "boolean"
            },
            {
                "name": "disabledClass",
                "description": "CSS style class to apply to the rendered label  on disabled options.",
                "type": "string"
            },
            {
                "name": "enabledClass",
                "description": "CSS style class to apply to the rendered label  on enabled options.",
                "type": "string"
            },
            {
                "name": "hideNoSelectionOption",
                "description": "<p class=\"changed_modified_2_0\">  Flag indicating that, if this component is activated by the  user,  The \"no selection option\", if any, must be hidden.</p>",
                "type": "boolean"
            },
            {
                "name": "label",
                "description": "A localized user presentable name for this component.",
                "type": "string"
            },
            {
                "name": "lang",
                "description": "Code describing the language used in the generated markup  for this component.",
                "type": "string"
            },
            {
                "name": "layout",
                "description": "Orientation of the options list to be created.  Valid values are \"pageDirection\" (list is laid  out vertically), or \"lineDirection\" (list is  laid out horizontally). If not specified, the  default value is \"lineDirection\".",
                "type": "string"
            },
            {
                "name": "onblur",
                "description": "Javascript code executed when this element loses focus.",
                "type": "string"
            },
            {
                "name": "onchange",
                "description": "Javascript code executed when this element loses focus  and its value has been modified since gaining focus.",
                "type": "string"
            },
            {
                "name": "onclick",
                "description": "Javascript code executed when a pointer button is  clicked over this element.",
                "type": "string"
            },
            {
                "name": "ondblclick",
                "description": "Javascript code executed when a pointer button is  double clicked over this element.",
                "type": "string"
            },
            {
                "name": "onfocus",
                "description": "Javascript code executed when this element receives focus.",
                "type": "string"
            },
            {
                "name": "onkeydown",
                "description": "Javascript code executed when a key is  pressed down over this element.",
                "type": "string"
            },
            {
                "name": "onkeypress",
                "description": "Javascript code executed when a key is  pressed and released over this element.",
                "type": "string"
            },
            {
                "name": "onkeyup",
                "description": "Javascript code executed when a key is  released over this element.",
                "type": "string"
            },
            {
                "name": "onmousedown",
                "description": "Javascript code executed when a pointer button is  pressed down over this element.",
                "type": "string"
            },
            {
                "name": "onmousemove",
                "description": "Javascript code executed when a pointer button is  moved within this element.",
                "type": "string"
            },
            {
                "name": "onmouseout",
                "description": "Javascript code executed when a pointer button is  moved away from this element.",
                "type": "string"
            },
            {
                "name": "onmouseover",
                "description": "Javascript code executed when a pointer button is  moved onto this element.",
                "type": "string"
            },
            {
                "name": "onmouseup",
                "description": "Javascript code executed when a pointer button is  released over this element.",
                "type": "string"
            },
            {
                "name": "onselect",
                "description": "Javascript code executed when text within this  element is selected by the user.",
                "type": "string"
            },
            {
                "name": "readonly",
                "description": "Flag indicating that this component will prohibit changes by  the user. The element may receive focus unless it has also  been disabled. A value of false causes  no attribute to be rendered, while a value of true causes the  attribute to be rendered as readonly=\"readonly\".",
                "type": "boolean"
            },
            {
                "name": "style",
                "description": "CSS style(s) to be applied when this component is rendered.",
                "type": "string"
            },
            {
                "name": "styleClass",
                "description": "Space-separated list of CSS style class(es) to be applied when  this element is rendered. This value must be passed through  as the \"class\" attribute on generated markup.",
                "type": "string"
            },
            {
                "name": "tabindex",
                "description": "Position of this element in the tabbing order  for the current document. This value must be  an integer between 0 and 32767.",
                "type": "string"
            },
            {
                "name": "title",
                "description": "Advisory title information about markup elements generated  for this component.",
                "type": "string"
            },
            {
                "name": "binding",
                "description": "The ValueExpression linking this component to a property in a  backing bean",
                "type": "string"
            },
            {
                "name": "role",
                "description": "<p class=\"changed_added_2_2\">Per the WAI-ARIA spec and its  relationship to HTML5 (Section title ARIA Role Attriubute),  every HTML element may have a \"role\" attribute whose value  must be passed through unmodified on the element on which it  is declared in the final rendered markup. The attribute, if  specified, must have a value that is a string literal that is,  or an EL Expression that evaluates to, a set of  space-separated tokens representing the various WAI-ARIA roles  that the element belongs to.  </p>",
                "type": "string"
            }
        ]
    },
    "h:column": {
        "name": "h:column",
        "description": "Renders a UIComponent that represents a single column of  data within a parent `UIData` component.</p>",
        "attributes": [
            {
                "name": "rendered",
                "description": "Flag indicating whether or not this component should be rendered  (during Render Response Phase), or processed on any subsequent  form submit.",
                "type": "boolean"
            },
            {
                "name": "binding",
                "description": "The value binding expression linking this component to a  property in a backing bean",
                "type": "string"
            },
            {
                "name": "id",
                "description": "The component identifier for the associated component",
                "type": "string"
            },
            {
                "name": "footerClass",
                "description": "Space-separated list of CSS style class(es) that will be  applied to any column footer generated for this table.",
                "type": "string"
            },
            {
                "name": "headerClass",
                "description": "Space-separated list of CSS style class(es) that will be  applied to any column header generated for this table.",
                "type": "string"
            },
            {
                "name": "rowHeader",
                "description": "Flag indicating that this column is a row header column and  therefore cells in this column should be rendered with \"th\"  instead of \"td\" and must have the 'scope=\"row\"' attribute.",
                "type": "boolean"
            }
        ]
    },
    "h:inputFile": {
        "name": "h:inputFile",
        "description": "<p class=\"changed_added_2_2\">Renders  an HTML \"input\" element of \"type\" \"file\". The standard HTML_BASIC  RenderKit specifies behavior that assumes Servlet 3.0 or later.  Portlet implementations must override this implementation with a  semantically equivalent one that functions under the constraints  of the Portlet specification.</p>",
        "attributes": [
            {
                "name": "converter",
                "description": "Converter instance registered with this component.",
                "type": "string"
            },
            {
                "name": "converterMessage",
                "description": "A ValueExpression enabled attribute that, if present, will be  used as the text of the converter message, replacing any message  that comes from the converter.",
                "type": "string"
            },
            {
                "name": "id",
                "description": "The component identifier for this component. This value must be  unique within the closest parent component that is a naming  container.",
                "type": "string"
            },
            {
                "name": "immediate",
                "description": "Flag indicating that this component's value must be  converted and validated immediately (that is, during  Apply Request Values phase), rather than waiting  until Process Validations phase.",
                "type": "boolean"
            },
            {
                "name": "rendered",
                "description": "Flag indicating whether or not this component should be rendered  (during Render Response Phase), or processed on any subsequent  form submit. The default value for this property is true.",
                "type": "boolean"
            },
            {
                "name": "required",
                "description": "Flag indicating that the user is required to provide a submitted  value for this input component.",
                "type": "boolean"
            },
            {
                "name": "requiredMessage",
                "description": "A ValueExpression enabled attribute that, if present, will be  used as the text of the validation message for the \"required\"  facility, if the \"required\" facility is used.",
                "type": "string"
            },
            {
                "name": "validator",
                "description": "MethodExpression representing a validator method that will be called  during Process Validations to perform correctness checks on the  value of this component. The expression must evaluate to a public  method that takes FacesContext, UIComponent, and Object parameters,  with a return type of void.",
                "type": "string"
            },
            {
                "name": "value",
                "description": "The current value of this component.  If the `multiple` attribute is set to `true`,  then this must be assignable to `java.util.Collection<jakarta.servlet.http.Part>`,  else this must be assignable to `jakarta.servlet.http.Part`.",
                "type": "string"
            },
            {
                "name": "valueChangeListener",
                "description": "MethodExpression representing a value change listener method  that will be notified when a new value has been set for this  input component. The expression must evaluate to a public  method that takes a `ValueChangeEvent` parameter,  with a return type of void, or  to a public method that takes no arguments with a return type  of void. In the latter case, the method has no way of easily  knowing what the new value is, but this can be useful in cases  where a notification is needed that \"this value  changed\".",
                "type": "string"
            },
            {
                "name": "accept",
                "description": "Comma separated string of mime types of files to filter in client side file browse dialog.  Note: this is not validated in server side.",
                "type": "string"
            },
            {
                "name": "dir",
                "description": "Direction indication for text that does not inherit directionality.  Valid values are \"LTR\" (left-to-right) and \"RTL\" (right-to-left).  These attributes are case sensitive when rendering to XHTML, so  care must be taken to have the correct case.",
                "type": "string"
            },
            {
                "name": "disabled",
                "description": "Flag indicating that this element must never receive focus or  be included in a subsequent submit. A value of false causes  no attribute to be rendered, while a value of true causes the  attribute to be rendered as disabled=\"disabled\".",
                "type": "boolean"
            },
            {
                "name": "label",
                "description": "A localized user presentable name for this component.",
                "type": "string"
            },
            {
                "name": "lang",
                "description": "Code describing the language used in the generated markup  for this component.",
                "type": "string"
            },
            {
                "name": "multiple",
                "description": "Flag indicating that this element must allow multiple file selection. A value  of false causes no attribute to be rendered, while a value of true causes the attribute to be rendered as  multiple=\"multiple\".",
                "type": "string"
            },
            {
                "name": "onblur",
                "description": "Javascript code executed when this element loses focus.",
                "type": "string"
            },
            {
                "name": "onchange",
                "description": "Javascript code executed when this element loses focus  and its value has been modified since gaining focus.",
                "type": "string"
            },
            {
                "name": "onclick",
                "description": "Javascript code executed when a pointer button is  clicked over this element.",
                "type": "string"
            },
            {
                "name": "ondblclick",
                "description": "Javascript code executed when a pointer button is  double clicked over this element.",
                "type": "string"
            },
            {
                "name": "onfocus",
                "description": "Javascript code executed when this element receives focus.",
                "type": "string"
            },
            {
                "name": "onkeydown",
                "description": "Javascript code executed when a key is  pressed down over this element.",
                "type": "string"
            },
            {
                "name": "onkeypress",
                "description": "Javascript code executed when a key is  pressed and released over this element.",
                "type": "string"
            },
            {
                "name": "onkeyup",
                "description": "Javascript code executed when a key is  released over this element.",
                "type": "string"
            },
            {
                "name": "onmousedown",
                "description": "Javascript code executed when a pointer button is  pressed down over this element.",
                "type": "string"
            },
            {
                "name": "onmousemove",
                "description": "Javascript code executed when a pointer button is  moved within this element.",
                "type": "string"
            },
            {
                "name": "onmouseout",
                "description": "Javascript code executed when a pointer button is  moved away from this element.",
                "type": "string"
            },
            {
                "name": "onmouseover",
                "description": "Javascript code executed when a pointer button is  moved onto this element.",
                "type": "string"
            },
            {
                "name": "onmouseup",
                "description": "Javascript code executed when a pointer button is  released over this element.",
                "type": "string"
            },
            {
                "name": "onselect",
                "description": "Javascript code executed when text within this  element is selected by the user.",
                "type": "string"
            },
            {
                "name": "role",
                "description": "<p class=\"changed_added_2_2\">Per the WAI-ARIA spec and its  relationship to HTML5 (Section title ARIA Role Attriubute),  every HTML element may have a \"role\" attribute whose value  must be passed through unmodified on the element on which it  is declared in the final rendered markup. The attribute, if  specified, must have a value that is a string literal that is,  or an EL Expression that evaluates to, a set of  space-separated tokens representing the various WAI-ARIA roles  that the element belongs to.  </p>",
                "type": "string"
            },
            {
                "name": "style",
                "description": "CSS style(s) to be applied when this component is rendered.",
                "type": "string"
            },
            {
                "name": "styleClass",
                "description": "Space-separated list of CSS style class(es) to be applied when  this element is rendered. This value must be passed through  as the \"class\" attribute on generated markup.",
                "type": "string"
            },
            {
                "name": "tabindex",
                "description": "Position of this element in the tabbing order  for the current document. This value must be  an integer between 0 and 32767.",
                "type": "string"
            },
            {
                "name": "title",
                "description": "Advisory title information about markup elements generated  for this component.",
                "type": "string"
            },
            {
                "name": "binding",
                "description": "The ValueExpression linking this component to a property in a backing bean",
                "type": "string"
            }
        ]
    },
    "h:doctype": {
        "name": "h:doctype",
        "description": "Render the markup for  a `<!DOCTYPE>` declaration.</p>",
        "attributes": [
            {
                "name": "converter",
                "description": "Converter instance registered with this component.",
                "type": "string"
            },
            {
                "name": "id",
                "description": "The component identifier for this component. This value must be  unique within the closest parent component that is a naming  container.",
                "type": "boolean"
            },
            {
                "name": "value",
                "description": "The current value of this component.",
                "type": "string"
            },
            {
                "name": "public",
                "description": "Will be output as the public part of the DOCTYPE",
                "type": "string"
            },
            {
                "name": "rootElement",
                "description": "The root XML element",
                "type": "string"
            },
            {
                "name": "system",
                "description": "Will be output as the system part of the DOCTYPE",
                "type": "string"
            },
            {
                "name": "binding",
                "description": "The ValueExpression linking this component to a property in a backing bean",
                "type": "string"
            }
        ]
    },
    "ui:component": {
        "name": "ui:component",
        "description": "This tag is the same as  `ui:composition`, except for two things: Faces creates a  component and adds it directly to the tree, and there's no associated  template.  </p>",
        "attributes": [
            {
                "name": "id",
                "description": "The identifier of the component that Faces inserts into the  component tree. If an identifier is  not explicitly specified by the page author, Faces will assign an  identifier based on the algorithm  that it uses for all components.  </p>",
                "type": "string"
            },
            {
                "name": "binding",
                "description": "Binds the component to a backing bean property, as specified in  section 3.1.5 \"Component Bindings\" of the Jakarta Faces Specification Document.  The  Java language type of this property must be a class that extends  `jakarta.faces.component.UIComponent`. The scope of  the bean on which this property resides must be no wider than  request scope. If either of these conditions are not met, the  results are undefined.",
                "type": "string"
            },
            {
                "name": "rendered",
                "description": "Controls whether the component is rendered. Valid values for this attribute are either the strings \"true\" or \"false\" or an EL expression that evaluates to either \"true\" or \"false\".",
                "type": "string"
            }
        ]
    },
    "ui:composition": {
        "name": "ui:composition",
        "description": "Defines a composition that optionally uses a template, as outlined in the description of the ui tag library. Multiple compositions can use the same template, thus encapsulating and reusing layout. Faces disregards everything outside of the composition, which lets developers embed compositions in well-formed XHTML pages that can be viewed in an XHTML viewer, such as Dreamweaver or a browser, without including extraneous elements such as `head` and `body`.",
        "attributes": [
            {
                "name": "template",
                "description": "A URI that points to a template, also known as a layout, that inserts pieces of the page defined in the composition. If the URI cannot be resolved a `TagAttributeException` must be thrown, including accurate location information to help the page author resolve the problem. When the template is intended to come from a resource library contract, the value of this attribute must be an absolute path starting with \"/\".",
                "type": "string"
            }
        ]
    },
    "ui:debug": {
        "name": "ui:debug",
        "description": "When the `ui:debug` tag is placed in an XHTML  page, it creates a component and adds it to the  component tree. That debug component captures debugging information,  namely the current state of the component  tree and the scoped variables in the application, when the component  is rendered. If the user presses CTRL + SHIFT + d,  Faces opens a window that shows the debugging information captured by  the debug component.  </p>",
        "attributes": [
            {
                "name": "hotkey",
                "description": "Defines a single character, that, pressed in conjunction with  CTRL and SHIFT, will display the Faces debug window.  By default, the hotkey is 'd'. <em>The value for the  hotkey attribute cannot be an EL expression.</em>  </p>",
                "type": "string"
            },
            {
                "name": "rendered",
                "description": "Controls whether the debug component is rendered. Valid values  for this attribute are either the strings \"true\" or \"false\" or  an EL expression that evaluates to either \"true\" or \"false\".",
                "type": "string"
            }
        ]
    },
    "ui:define": {
        "name": "ui:define",
        "description": "The `define` tag defines content  that is inserted into a page by a template. The `define`  tag can be used inside `ui:composition`, `ui:component`,  `ui:decorate`, and `ui:fragment`  tags.</p>",
        "attributes": [
            {
                "name": "name",
                "description": "Assigns a name to the content inside a `define`  tag. That name is used by corresponding `ui:insert`  tags in a template that insert the named content into a page.</p>",
                "type": "string"
            }
        ]
    },
    "ui:decorate": {
        "name": "ui:decorate",
        "description": "The `decorate` tag is identical to the `composition` tag, except that `ui:decorate`, unlike `ui:composition`, does not disregard all content outside of the tag. The `decorate` is useful when you want to decorate some content in a page, for example, you might want to decorate a list of items, like this:",
        "attributes": [
            {
                "name": "template",
                "description": "A URI that points to a template, also known as a layout, that inserts pieces of the page defined in the decorator. If the URI cannot be resolved a `TagAttributeException` must be thrown, including accurate location information to help the page author resolve the problem. When the template is intended to come from a resource library contract, the value of this attribute must be an absolute path starting with \"/\".",
                "type": "string"
            }
        ]
    },
    "ui:fragment": {
        "name": "ui:fragment",
        "description": "The `fragment`  tag is identical to the `component` tag, except  that `ui:fragment`, unlike  `ui:component`, Faces does not disregard all content  outside of the tag.</p>",
        "attributes": [
            {
                "name": "id",
                "description": "The identifier of the component that Faces inserts into the  component tree. If an identifier is  not explicitly specified by the page author, Faces will assign an  identifier based on the algorithm  that it uses for all components.",
                "type": "string"
            },
            {
                "name": "binding",
                "description": "Binds the component to a backing bean property, as specified  in section 3.1.5 \"Component Bindings\" of the Jakarta Faces Specification Document.  The  Java language type of this property must be a class that extends  `jakarta.faces.component.UIComponent`. The scope of  the bean on which this property resides must be no wider than  request scope. If either of these conditions are not met, the  results are undefined.</p>",
                "type": "string"
            },
            {
                "name": "rendered",
                "description": "Controls whether the fragment component is rendered.  Valid values for this attribute are either the strings  \"true\" or \"false\" or an EL expression that evaluates to  either \"true\" or \"false\".  </p>",
                "type": "string"
            }
        ]
    },
    "ui:include": {
        "name": "ui:include",
        "description": "Use this tag &mdash;which  is very similar to JSP's `jsp:include` &mdash; to  encapsulate and reuse content among multiple XHTML  pages. There are three things this tag can include: plain  XHTML, and XHTML pages that have either a  `composition` tag or a `component`  tag. </p>",
        "attributes": [
            {
                "name": "src",
                "description": "The filename of an XHTML page to include. The filename is relative to the XHTML page that was originally loaded. When the included file is intended to come from a resource library contract, the value of this attribute must be an absolute path starting with \"/\".",
                "type": "string"
            }
        ]
    },
    "ui:insert": {
        "name": "ui:insert",
        "description": "Inserts content into a template. That content is defined &mdash;with  the `ui:define` tag &mdash; in either a  `ui:composition`, `ui:component`,  `ui:decorate`, or `ui:fragment`.</p>",
        "attributes": [
            {
                "name": "name",
                "description": "The optional name attribute matches the associated <ui:define/>  tag in this template's client. If no name is specified, it's  expected  that the whole template client will be inserted.",
                "type": "string"
            }
        ]
    },
    "ui:param": {
        "name": "ui:param",
        "description": "Use this tag to pass parameters to an included file (using  `ui:include`), or a template  (linked to either a composition or decorator). Embed `ui:param`  tags in either `ui:include`,  `ui:composition`, or `ui:decorate`  to pass the parameters.",
        "attributes": [
            {
                "name": "name",
                "description": "The name of the parameter.",
                "type": "string"
            },
            {
                "name": "value",
                "description": "The value of the  parameter. Notice that this attribute's value can be an EL expression,  which means that you can pass objects to either an included file or a  template.",
                "type": "string"
            }
        ]
    },
    "ui:repeat": {
        "name": "ui:repeat",
        "description": "Use this tag as an alternative to  `h:dataTable` or `c:forEach`</p>",
        "attributes": [
            {
                "name": "begin",
                "description": "If value specified: Iteration begins at the item located at the specified index.  First item of the collection has index 0.  If value not specified: Iteration begins with index set at the specified value.  </p>",
                "type": "string"
            },
            {
                "name": "end",
                "description": "If value specified: Iteration ends at the item located at the specified index (inclusive).  If value not specified: Iteration ends when index reaches the specified value (inclusive).  </p>",
                "type": "string"
            },
            {
                "name": "offset",
                "description": "Read-write property setting the offset from the  beginning of the  collection from which to start the iteration. If not set, this  offset  is not considered and iteration will start at the beginning of  the  collection.</p>",
                "type": "string"
            },
            {
                "name": "size",
                "description": "Read-write property setting the size of the collection  to iterate.  If this value is less than the actual size of the collection, a  `FacesException` must be thrown.</p>",
                "type": "string"
            },
            {
                "name": "step",
                "description": "Iteration  will only process every step items of the collection,  starting with the first one.</p>",
                "type": "string"
            },
            {
                "name": "value",
                "description": "The name of a collection of items that this tag  iterates over. The  collection may be a `List`, `array`,  `java.sql.ResultSet`, `java.lang.Iterable`,  `java.util.Map` or an individual java Object. If the  collection is null, this tag does nothing.</p>",
                "type": "string"
            },
            {
                "name": "var",
                "description": "Name of the exported scoped variable for the current item of  the iteration. This scoped variable has nested visibility.  </p>",
                "type": "string"
            },
            {
                "name": "varStatus",
                "description": "Name of the exported request scoped variable for the status  of the iteration. The object the name points to is a POJO  with the following read-only JavaBeans properties. This  scoped variable has nested visibility.  </p>",
                "type": "string"
            },
            {
                "name": "rendered",
                "description": "Controls whether the repeat component is rendered.  Valid values for this attribute are either the strings  \"true\" or \"false\" or an EL expression that evaluates to  either \"true\" or \"false\".  </p>",
                "type": "string"
            }
        ]
    },
    "ui:remove": {
        "name": "ui:remove",
        "description": "Remove content from a page.</p>",
        "attributes": []
    },
    "cc:actionSource": {
        "name": "cc:actionSource",
        "description": "Declares that the composite component whose contract is declared by the `<cc:interface>` in which this element is nested exposes an implementation of `ActionSource2` suitable for use as the target of <em>attached objects</em> in <em>the using page</em>. Any attached objects suitable for implementations of `ActionSource2` may be attached to the composite component. Consider this excerpt from <em>the using page</em>:  </p>",
        "attributes": [
            {
                "name": "name",
                "description": "The value of this attribute maps back to the \"for\" attribute on an attachable object  nested within a composite component. If the \"targets\" attribute is not specified,  this value also represents the component ID of the target component within the  that the `<cc:implementation>`  ActionListener should be mapped to. </p>",
                "type": "string"
            },
            {
                "name": "targets",
                "description": "If present, this must be a space (not tab) separated list of client ids (relative to the <em>top level component</em>) of components within the `<cc:implementation>` section. Space is used as the delimiter for compatibility with the IDREFS and NMTOKENS data types from the XML Schema.</p>",
                "type": "string"
            },
            {
                "name": "hidden",
                "description": "The \"hidden\" flag is used to identify features that are intended only for tool use, and which should not be exposed to humans.</p>",
                "type": "string"
            }
        ]
    },
    "cc:attribute": {
        "name": "cc:attribute",
        "description": "If this element has a `method-signature` attribute, the value of the `targets` attribute must be interpreted as a space (not tab) separated list of client ids (relative to the <em>top level component</em>) of components within the `<cc:implementation>` section. Space is used as the delimiter for compatibility with the IDREFS and NMTOKENS data types from the XML Schema. Each entry in the list must be interpreted as the id of an inner component to which the `MethodExpression` from the <em>composite component tag</em> in the <em>using page</em> must be applied. If this element has a `method-signature` attribute, but no `targets` attribute, the value of the `name` attribute is used as the single entry in the list. If the value of the `name` attribute is **not** one of the special values listed in the description of the `name attribute`, `targets` (or its derived value) need not correspond to the id of an inner component.</p>",
        "attributes": [
            {
                "name": "default",
                "description": "If this attribute is not required, and a  value is not supplied by the page author, use this as  the default value.</p>",
                "type": "string"
            },
            {
                "name": "displayName",
                "description": "The name to display in a tool palette  containing this component. The value of this attribute will be set as  the value for this property on the <em>composite  component bean descriptor</em>.</p>",
                "type": "string"
            },
            {
                "name": "expert",
                "description": "Is this component only for expert users?  The value of this attribute will be set as the value for  this property on the <em>composite component bean  descriptor</em>.</p>",
                "type": "string"
            },
            {
                "name": "hidden",
                "description": "The \"hidden\" flag is used to identify features that are intended only  for tool use, and which should not be exposed to humans. The value of  this attribute will be set as the value for this property on the  <em>composite component bean descriptor</em>.</p>",
                "type": "string"
            },
            {
                "name": "method-signature",
                "description": "Declares that this attribute must be a `MethodExpression` whose method signature is described by the value of this attribute. The signature must be described using fully qualified class names wherever a type is required. This attribute is mutually exclusive with the \"type\" attribute. If both attributes are present, the \"method-signature\" attribute is ignored.</p>",
                "type": "string"
            },
            {
                "name": "name",
                "description": "The name of the attribute as it must appear on the <em>composite component tag</em> in the <em>using page</em>. If the value of the <em>name</em> attribute is equal to (without the quotes) &#8220;action&#8221;, &#8220;actionListener&#8221;, &#8220;validator&#8221;, or &#8220;valueChangeListener&#8221;, the action described in ViewHandler.retargetMethodExpressions() must be taken to handle the attribute. In these cases, the `method-signature` attribute, if present, must be ignored as its value is derived as described in `retargetMethodExpressions()`.",
                "type": "string"
            },
            {
                "name": "preferred",
                "description": "Is this a \"preferred\" component. The value  of this attribute will be set as the value for this  property on the <em>composite component bean  descriptor</em>.</p>",
                "type": "string"
            },
            {
                "name": "required",
                "description": "True if the page author must supply a value  for this attribute. The default value is false.</p>",
                "type": "string"
            },
            {
                "name": "shortDescription",
                "description": "A short description of the purpose of this  component. The value of this attribute will be set as  the value for this property on the <em>composite  component bean descriptor</em>.</p>",
                "type": "string"
            },
            {
                "name": "targets",
                "description": "If this element has a `method-signature` attribute, the value of the `targets` attribute must be interpreted as a space (not tab) separated list of client ids (relative to the <em>top level component</em>) of components within the `<cc:implementation>` section. Space is used as the delimiter for compatibility with the IDREFS and NMTOKENS data types from the XML Schema. Each entry in the list must be interpreted as the id of an inner component to which the `MethodExpression` from the <em>composite component tag</em> in the <em>using page</em> must be applied. If this element has a `method-signature` attribute, but no `targets` attribute, the value of the `name` attribute is used as the single entry in the list. If the value of the `name` attribute is **not** one of the special values listed in the description of the `name attribute`, `targets` (or its derived value) need not correspond to the id of an inner component.</p>",
                "type": "string"
            },
            {
                "name": "type",
                "description": "Declares that this attribute must be a `ValueExpression`  whose expected type is given by the value of this attribute. If  not  specified, and no \"method-signature\" attribute is present,  `java.lang.Object` is assumed. This  attribute is mutually  exclusive with the \"method-signature\" attribute. If both attributes are  present, the  \"method-signature\" attribute is ignored. </p>",
                "type": "string"
            }
        ]
    },
    "cc:clientBehavior": {
        "name": "cc:clientBehavior",
        "description": "Declares that the composite component whose contract is declared by the `<cc:interface>` in which this element is nested exposes an implementation of `ClientBehaviorHolder` suitable for use as the target of <em>attached objects</em> in <em>the using page</em>. Any attached objects suitable for implementations of `ClientBehaviorHolder` may be attached to the composite component.</p>",
        "attributes": [
            {
                "name": "default",
                "description": "If the evaluated value of this attribute is `true`, the page author may omit the the \"event\" attribute when specifying the behavior in the using page. This is analogous to \"action\" being the default event for `commandLink`. The usage of this attribute assumes only one `clientBehavior` is declared in this composite component. If more than one is specified, only the first one is used in the case of a using page with no event attribute.",
                "type": "string"
            },
            {
                "name": "event",
                "description": "The evaluated value of this attribute will be passed as the first argument to the `addClientBehavior()` method on `ClientBehaviorHolder`.</p>",
                "type": "string"
            },
            {
                "name": "name",
                "description": "The value of this attribute maps back to the \"for\" attribute on an attachable object  nested within a composite component. If the \"targets\" attribute is not specified,  this value also represents the component ID of the target component within the  that the `<cc:implementation>`  to which the ActionListener should be mapped. </p>",
                "type": "string"
            },
            {
                "name": "targets",
                "description": "If present, this must be a space (not tab) separated list of client ids (relative to the <em>top level component</em>) of components within the `<cc:implementation>` section. Space is used as the delimiter for compatibility with the IDREFS and NMTOKENS data types from the XML Schema.</p>",
                "type": "string"
            }
        ]
    },
    "cc:editableValueHolder": {
        "name": "cc:editableValueHolder",
        "description": "Declares that the composite component whose contract is declared by the `<cc:interface>` in which this element is nested exposes an implementation of `EditableValueHolder` suitable for use as the target of <em>attached objects</em> in <em>the using page</em>. Any attached objects suitable for implementations of `EditableValueHolder` may be attached to the composite component.The example from `<cc:valueHolder>` still applies.  </p>",
        "attributes": [
            {
                "name": "name",
                "description": "The value of this attribute maps back to the \"for\" attribute on  an attachable object  nested within a composite component. If the \"targets\" attribute  is not specified,  this value also represents the component ID of the target  component within the  that the `<cc:implementation>`  to which the ActionListener should be mapped.  </p>",
                "type": "string"
            },
            {
                "name": "targets",
                "description": "If present, this must be a space (not tab) separated  list of client  ids (relative to the <em>top level component</em>)  of components within  the `<cc:implementation>`  section. Space is  used as the delimiter for compatibility with the IDREFS and  NMTOKENS  data types from the XML Schema.</p>",
                "type": "string"
            }
        ]
    },
    "cc:extension": {
        "name": "cc:extension",
        "description": "Used within a `<cc:interface>`  section,  within any sub-element of that section, to include XML content not  defined by this specification. This element can be used to  incorporate  JSR-276  metadata into a composite component.</p>",
        "attributes": []
    },
    "cc:facet": {
        "name": "cc:facet",
        "description": "Declares that this composite component supports a facet  with the  name given by the value of the \"name\" attribute. </p>",
        "attributes": [
            {
                "name": "displayName",
                "description": "The name to display in a tool palette  containing this component. The value of this attribute will be  set as  the value for this property on the <em>composite  component bean descriptor</em>.</p>",
                "type": "string"
            },
            {
                "name": "expert",
                "description": "Is this facet only for expert users?  The value of this attribute will be set as the value for  this property on the <em>composite component bean  descriptor</em>.</p>",
                "type": "string"
            },
            {
                "name": "hidden",
                "description": "The \"hidden\" flag is used to identify features that are intended only  for tool use, and which should not be exposed to humans.</p>",
                "type": "string"
            },
            {
                "name": "name",
                "description": "The name of the attribute as it must appear  on the <em>composite component tag</em> in the  <em>using page</em>.</p>",
                "type": "string"
            },
            {
                "name": "preferred",
                "description": "Is this a \"preferred\" facet. The value  of this attribute will be set as the value for this  property on the <em>composite component bean  descriptor</em>.</p>",
                "type": "string"
            },
            {
                "name": "required",
                "description": "True if the page author must supply a facet with this  name.</p>",
                "type": "string"
            },
            {
                "name": "shortDescription",
                "description": "A short description of the purpose of this  facet. The value of this attribute will be set as  the value for this property on the <em>composite  component bean descriptor</em>.</p>",
                "type": "string"
            }
        ]
    },
    "cc:implementation": {
        "name": "cc:implementation",
        "description": "Defines the implementation of the composite  component. There must be zero or one of these in a  composite component markup file. If a  `<cc:interface>` element appears,  there must be a corresponding  `<composite-implementation>` element. If no  `<cc:interface>` element appears,  the `<composite-implementation>` element is  optional. </p>",
        "attributes": []
    },
    "cc:insertChildren": {
        "name": "cc:insertChildren",
        "description": "This element is used in the  `<cc:implementation>`  section. Any child  components or template text within the composite component tag in  the  using page will be re-parented into the composite component at the  point  indicated by this tag's placement within the  `<cc:implementation>`  section. The normal  use-case for this element is to have only one occurrence within the  `<cc:implementation>`  section. Inserting  multiple occurrences may cause duplicate id errors. The results are  undefined if there are multiple occurrences of this element in the  `<cc:implementation>`  section.</p>",
        "attributes": []
    },
    "cc:insertFacet": {
        "name": "cc:insertFacet",
        "description": "The presence of this tag in a `<cc:implementation>` section must cause the named facet to be taken from the facet map of the <em>top level component</em> and inserted as a facet child of the component in which this element is nested. The results are undefined if there are facets in the composite component tag in the using page, but there is no correspondingly named occurrence of this element in the `<cc:implementation>` section.</p>",
        "attributes": [
            {
                "name": "name",
                "description": "The name of the facet child on the <em>top level  component</em> which  must be inserted as a facet child of the component in which this  element  is nested.</p>",
                "type": "string"
            },
            {
                "name": "required",
                "description": "If `true`, and there is no such  facet present on the top  level component, a `TagException` must be  thrown, containing  the `Location`, the facet name, and a  localized descriptive  error message.</p>",
                "type": "string"
            }
        ]
    },
    "cc:interface": {
        "name": "cc:interface",
        "description": "This  element declares the usage contract for a composite  component. Optionally, and at the component author's  discretion, this contract exposes the features of one or  more inner components to the page author. The page author  can work with the composite component as a single component  whose feature set is the union of the features declared in  the usage contract.</p>",
        "attributes": [
            {
                "name": "componentType",
                "description": "The `component-type` of the `UIComponent`  that  will serve as the <em>composite component root</em>  for this composite  component. The declared `component-family`  for this  component must be `jakarta.faces.NamingContainer`.</p>",
                "type": "string"
            },
            {
                "name": "displayName",
                "description": "The name to display in a tool palette  containing this component. The value of this attribute will be  set as  the value for this property on the <em>composite  component bean descriptor</em>.</p>",
                "type": "string"
            },
            {
                "name": "expert",
                "description": "Is this component only for expert users?  The value of this attribute will be set as the value for  this property on the <em>composite component bean  descriptor</em>.</p>",
                "type": "string"
            },
            {
                "name": "hidden",
                "description": "The \"hidden\" flag is used to identify features that are  intended only for tool use, and which should not be exposed to humans.</p>",
                "type": "string"
            },
            {
                "name": "name",
                "description": "The name of this composite component.  Advisory only. The real name is taken from the  filename. The value of this attribute will be set as  the value for this property on the <em>composite  component bean descriptor</em>.</p>",
                "type": "string"
            },
            {
                "name": "preferred",
                "description": "Is this a \"preferred\" component. The value  of this attribute will be set as the value for this  property on the <em>composite component bean  descriptor</em>.</p>",
                "type": "string"
            },
            {
                "name": "shortDescription",
                "description": "A short description of the purpose of this  component. The value of this attribute will be set as  the value for this property on the <em>composite  component bean descriptor</em>.</p>",
                "type": "string"
            }
        ]
    },
    "cc:renderFacet": {
        "name": "cc:renderFacet",
        "description": "This element is used in the `<cc:implementation>` section. The facet with the name equal to the value of the name attribute, given by the page author in the using page, will be rendered at this point in the composite component VDL view. </p>",
        "attributes": [
            {
                "name": "name",
                "description": "The value of the name attribute as it must appear on an `<f:facet>` tag nested within the <em>composite component tag</em> in the <em>using page</em>.</p>",
                "type": "string"
            },
            {
                "name": "required",
                "description": "If `true`, and there is no such  facet present on the top  level component, a `TagException` must be  thrown, containing  the `Location`, the facet name, and a  localized descriptive  error message.</p>",
                "type": "string"
            }
        ]
    },
    "cc:valueHolder": {
        "name": "cc:valueHolder",
        "description": "Declares that the composite component whose contract is declared by the `<cc:interface>` in which this element is nested exposes an implementation of `ValueHolder` suitable for use as the target of <em>attached objects</em> in <em>the using page</em>. Any attached objects suitable for implementations of `ValueHolder` may be attached to the composite component. Consider this excerpt from <em>the using page</em>:  </p>",
        "attributes": [
            {
                "name": "hidden",
                "description": "The \"hidden\" flag is used to identify features that are  intended only for tool use, and which should not be exposed to humans.</p>",
                "type": "string"
            },
            {
                "name": "name",
                "description": "The value of this attribute maps back to the \"for\" attribute on an attachable object  nested within a composite component. If the \"targets\" attribute is not specified,  this value also represents the component ID of the target component within the  that the `<cc:implementation>`  ActionListener should be mapped to. </p>",
                "type": "string"
            },
            {
                "name": "targets",
                "description": "If present, this must be a space (not tab) separated list of client ids (relative to the <em>top level component</em>) of components within the `<cc:implementation>` section. Space is used as the delimiter for compatibility with the IDREFS and NMTOKENS data types from the XML Schema. </p></p>",
                "type": "string"
            }
        ]
    }
};
