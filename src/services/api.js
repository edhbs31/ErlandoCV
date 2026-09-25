const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:4000';

/** Mengambil data CV yang tersimpan di MySQL melalui backend. */
export async function getContent(key) {
  const response = await fetch(`${API_URL}/api/content/${key}`);
  if (!response.ok) throw new Error(`Gagal mengambil konten ${key}`);
  const result = await response.json();
  return result.data;
}

/** Mengambil daftar portfolio dari tabel portfolio_projects. */
export async function getPortfolioProjects() {
  const response = await fetch(`${API_URL}/api/portfolio`);
  if (!response.ok) throw new Error('Gagal mengambil portfolio');
  const result = await response.json();
  return result.data;
}

/** CRUD konten untuk dashboard/admin. API key tidak pernah dipakai pada halaman publik. */
export async function saveContent(key, data, apiKey, method = 'PUT') {
  const response = await fetch(`${API_URL}/api/content/${key}`, { method, headers: { 'Content-Type': 'application/json', 'x-api-key': apiKey }, body: JSON.stringify({ data }) });
  const result = response.status === 204 ? null : await response.json();
  if (!response.ok) throw new Error(result?.message || 'Gagal menyimpan konten');
  return result;
}

export async function createContent(key, data, apiKey) {
  const response = await fetch(`${API_URL}/api/content`, { method: 'POST', headers: { 'Content-Type': 'application/json', 'x-api-key': apiKey }, body: JSON.stringify({ key, data }) });
  const result = await response.json();
  if (!response.ok) throw new Error(result.message || 'Gagal membuat konten');
  return result;
}

export async function deleteContent(key, apiKey) {
  const response = await fetch(`${API_URL}/api/content/${key}`, { method: 'DELETE', headers: { 'x-api-key': apiKey } });
  if (!response.ok) { const result = await response.json(); throw new Error(result.message || 'Gagal menghapus konten'); }
}

/** Dipakai oleh form Contact untuk menyimpan pesan ke tabel contact_messages. */
export async function sendContactMessage(payload) {
  const response = await fetch(`${API_URL}/api/contacts`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });
  const result = await response.json();
  if (!response.ok) throw new Error(result.message || 'Pesan gagal dikirim');
  return result;
}
