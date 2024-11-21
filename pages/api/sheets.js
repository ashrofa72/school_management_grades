import { getSheetData } from '../../utils/sheets';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const { Room } = req.query;

      if (!Room) {
        return res.status(400).json({ error: 'Room is required' });
      }

      const data = await getSheetData(Room);

      res.status(200).json(data);
    } catch (error) {
      console.error('Error fetching Google Sheets data:', error);
      res.status(500).json({ error: 'Error fetching Google Sheets data' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
