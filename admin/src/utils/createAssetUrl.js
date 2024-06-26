import { prefixFileUrlWithBackendUrl } from "@strapi/helper-plugin";

/**
 * Create image URL for asset
 * @param {Object} asset
 * @param {Boolean} forThumbnail - if true, return URL for thumbnail
 * if there's no thumbnail, return the URL of the original image.
 * @return {String} URL
 */
export const createAssetUrl = (asset, forThumbnail = true) => {
  if (asset.isLocal) {
    return asset.url;
  }

  const assetUrl = forThumbnail
    ? asset?.formats?.thumbnail?.url || asset.url
    : asset.url;

  return prefixFileUrlWithBackendUrl(assetUrl);
};
