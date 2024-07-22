export const camalizeEachWords = (str: string) => {
    var splitStr = str.toLowerCase().split(" ");
    for (var i = 0; i < splitStr.length; i++) {
      // You do not need to check if i is larger than splitStr length, as your for does that for you
      // Assign it back to the array
      splitStr[i] =
        splitStr[i].trim().charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    // Directly return the joined string
    return splitStr.join(" ");
  };

export function camalizeEachSentance(str: string){
    var splitStr = str.toLowerCase().split(".");
    for (var i = 0; i < splitStr.length; i++) {
      // You do not need to check if i is larger than splitStr length, as your for does that for you
      // Assign it back to the array
      splitStr[i] =
        splitStr[i].trim().charAt(0).toUpperCase() + splitStr[i].trim().substring(1);
    }
    // Directly return the joined string
    return splitStr.join(". ");
};

export function truncate (input: string, length?: number) {
    return input.length > 5 ? `${input.substring(0, length || 5)}...` : input;
}

export async function json2QueryString(json:any) {
    const params = new URLSearchParams();

    for (const key in json) {
        if (json.hasOwnProperty(key)) {
            params.append(key, json[key]);
        }
    }

    return params.toString();
}

export async function json2UrlPath(template:string,jsonObject:any) {
    // Use a regular expression to find all placeholders in the form of {key}
    return template.replace(/{([^{}]*)}/g, function(match, key) {
        // Check if the key exists in the jsonObject
        return typeof jsonObject[key] !== 'undefined' ? jsonObject[key] : match;
    });
    
}


