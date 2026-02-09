const mockReports = [
  {
    report_id: 10086491,
    uid: "100036",
    customer_name: "Maria García",
    store_name: "DBS Flagship Paris",
    created_at: "2026-02-09T10:30:00Z",
    skin_type: "Combination",
    skin_age: 32,
    actual_age: 28,
    composite_score: 72
  },
  {
    report_id: 10086492,
    uid: "100037",
    customer_name: "Sophie Laurent",
    store_name: "DBS Corner Harrods London",
    created_at: "2026-02-08T15:45:00Z",
    skin_type: "Dry",
    skin_age: 45,
    actual_age: 38,
    composite_score: 58
  },
  {
    report_id: 10086493,
    uid: "100038",
    customer_name: "Elena Rossi",
    store_name: "DBS Boutique Milan",
    created_at: "2026-02-07T11:20:00Z",
    skin_type: "Oily",
    skin_age: 27,
    actual_age: 25,
    composite_score: 81
  }
];

export default function handler(req, res) {
  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "GET") return res.status(405).json({ error: "Method not allowed" });

  const { store, skin_type, min_score, max_score } = req.query;

  let filtered = [...mockReports];
  if (store) filtered = filtered.filter(r => r.store_name.toLowerCase().includes(store.toLowerCase()));
  if (skin_type) filtered = filtered.filter(r => r.skin_type.toLowerCase() === skin_type.toLowerCase());
  if (min_score) filtered = filtered.filter(r => r.composite_score >= parseInt(min_score));
  if (max_score) filtered = filtered.filter(r => r.composite_score <= parseInt(max_score));

  res.status(200).json({
    total: filtered.length,
    reports: filtered
  });
}
