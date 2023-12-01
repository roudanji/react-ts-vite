export type ReadonlyProperties<typeData> = {
  readonly [k in keyof typeData]: typeData[k];
};
