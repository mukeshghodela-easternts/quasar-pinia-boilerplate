import { get } from '@vercel/edge-config';

export const config = { matcher: '/welcome' };

export async function middleware() {
  const isInMaintenanceMode = await get('isInMaintenanceMode')
    .then()
    .catch((e) => {
      console.log(e);
    });
  return isInMaintenanceMode;
}
