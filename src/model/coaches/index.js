export const coachFromApi = (apiCoach) => {
  if (!apiCoach) return undefined;
  return {
    alias: apiCoach.alias,
    firstName: apiCoach.first_name,
    joiningDate: apiCoach.joining_date,
    lastName: apiCoach.last_name,
    portraitPhotoUrl: apiCoach.portrait_photo_url,
    type: apiCoach.type,
  };
};