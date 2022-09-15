import FormField from "./FormField.jsx";
import { withAutoFocus } from "./hoc/withAutoFocus.jsx";

const AutoFocusedField = withAutoFocus(FormField);

export default AutoFocusedField;
