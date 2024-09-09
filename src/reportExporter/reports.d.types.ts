export type headerStyleProps = {
  fontSize: number;
  textColor: number[];
  align?: string;
  angle?: number;
};

export interface centerTextProps {
  doc: jsPDF;
  text: string;
  y: number;
  headerStyles: headerStyleProps;
}

export const headerStyle: headerStyleProps = {
  textColor: [255, 255, 255],
};
