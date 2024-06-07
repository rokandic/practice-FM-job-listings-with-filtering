import IUserData from "../_types/IUSerData";
import userFilterItems from "./userFilterItems";

// process and filter JSON data
export default function processData(
  data: IUserData[],
  filter: string[],
): IUserData[] {
  let result: IUserData[] = [];

  // filter items
  for (const dataItem of data) {
    let filterItems = userFilterItems(dataItem);
    const filterCheck = filter.every((x) => filterItems.includes(x));
    if (filterCheck || filter.length === 0) result.push(dataItem);
  }

  // featured items should come first
  result.sort((a, b) => Number(b.featured) - Number(a.featured));

  let basePath = process.env.NEXT_PUBLIC_BASEPATH ?? "";

  // correct logo images path
  for (let i = 0; i < result.length; i++)
    result[i].logo = result[i].logo.replace(/^\.\/images/, basePath);

  return result;
}
