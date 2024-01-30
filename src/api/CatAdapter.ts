export class CatAdapter {
  static transform(data: any): CatImageModel[] {
    return data.map(
      (item: any) =>
        <CatImageModel>{
          ...item,
          isFavourite: false,
        }
    );
  }
}
