namespace type {
  // 基础类型
  type buer = boolean;
  type shuzi = number;
  type zifuchuan = string;

  type shuziArray = number[];
  type tupleType = [number, string];
  // 联合类型
  type shuziOrZifuchuan = number | string;
  // 接口类型
  interface IPerson {
    name: string;
    age: number;
  }
  interface IAction {
    eat(): void;
  }
  type ren = IPerson;
  type xingwei = IAction;
  //   接口泛型
  interface IProps<T> {
    data: T;
  }
  type shuju = IProps<string>;

  interface ErrorHandling {
    success: boolean;
    error?: { message: string };
  }

  interface ArtworksData {
    artworks: { title: string }[];
  }

  type ArtworksResponse = ArtworksData & ErrorHandling;
}

export {};
