export const roomFilterableFields: string[] = [
  'searchTerm',
  'id',
  'buildingId',
];

export const roomSearchableFields: string[] = ['roomNumber', 'floor'];

export const roomRelationalFields: string[] = ['buildingID'];
export const roomRelationalFieldsMapper: { [key: string]: string } = {
  buildingID: 'building',
};
