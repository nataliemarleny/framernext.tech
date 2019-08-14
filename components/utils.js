// credit: https://primer.style
// Authored by: Github's Design Systems Team 2019
// Avaliable for use under the MIT Licence

import getConfig from "next/config";

export const config = getConfig().publicRuntimeConfig || {};
export const assetPrefix = config.assetPrefix || "";
export const assetPath = `${assetPrefix}/static/`;
export const getAssetPath = path => `${assetPath}${path}`;
