import { GoogleSpreadsheet } from 'google-spreadsheet';
import { GAErrors, GAOk } from './googleApi.utils';

const SPREADSHEET_ID = process.env.NEXT_PUBLIC_SPREADSHEET_ID;
const GOOGLE_CLIENT_EMAIL = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_EMAIL;
const GOOGLE_SERVICE_PRIVATE_KEY = process.env.NEXT_PUBLIC_GOOGLE_SERVICE_PRIVATE_KEY;

export const googleApi = async (id, data) => {
  const doc = new GoogleSpreadsheet(SPREADSHEET_ID);

  try {
    await doc.useServiceAccountAuth({
      client_email: GOOGLE_CLIENT_EMAIL,
      private_key: GOOGLE_SERVICE_PRIVATE_KEY.replace(/\\n/g, '\n'),
    });

    await doc.loadInfo();

    const sheet = doc.sheetsById[id];
    // const rows = await sheet.getRows();

    // if (data.Email) {
    //   data.Email = data.Email.toLowerCase();

    //   for (const row of rows) {
    //     if (row.Email === data.Email) {
    //       return {
    //         status: false,
    //         statusType: GAErrors.emailExists,
    //       };
    //     }
    //   }
    // }

    await sheet.addRow(data);

    return {
      status: true,
      statusType: GAOk,
    };
  } catch (err) {
    return {
      status: false,
      statusType: GAErrors.err,
    };
  }
};
