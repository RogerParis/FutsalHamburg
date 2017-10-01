export const playerFromApi = (apiPlayer) => {
  if (!apiPlayer) return undefined;
  return {
    alias: apiPlayer.alias,
    firstName: apiPlayer.first_name,
    joiningDate: apiPlayer.joining_date,
    lastName: apiPlayer.last_name,
    portraitPhotoUrl: apiPlayer.portrait_photo_url,
    position: apiPlayer.position,
  };
};