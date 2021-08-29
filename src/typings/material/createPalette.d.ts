import * as createPalette from "@material-ui/core/styles/createPalette";
import { Colors } from "./colors";
import { CustomViewer, CustomAppStyle } from "./customStyles";

type ColorsType = Colors;
type CustomViewerType = CustomViewer;

declare module "@material-ui/core/styles/createPalette" {
  interface Palette {
    basicColors: ColorsType;
    customViewer: CustomViewerType;
    customStyles: CustomAppStyle;
  }
  interface PaletteOptions {
    basicColors?: ColorsType;
    customViewer?: CustomViewerType;
    customStyles?: CustomAppStyle;
  }
}
