export const UTCtoDateTime = (utc: number) => new Date(utc * 1000).toLocaleString('en-SG', {year: 'numeric', month: '2-digit', day: '2-digit',  hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }).replace(/\//g, '-').replace(/,/g, '');

export const formatCity = (str: string) =>  str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

export const formatCountry = (str:string) => str.toUpperCase();