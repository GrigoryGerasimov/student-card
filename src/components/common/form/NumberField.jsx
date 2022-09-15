import FormField from "./FormField.jsx";
import { withNumberRange } from "./hoc/withNumberRange.jsx";

const NumberField = withNumberRange(FormField);

export default NumberField;
