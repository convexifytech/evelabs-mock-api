const fullReports = {
  "10086491": {
    report_id: 10086491, uid: "100036", customer_name: "Maria Garcia", store_name: "DBS Flagship Paris",
    device_id: "EVE-M-PAR-001", created_at: "2026-02-09T10:30:00Z", source_type: "eve",
    preview: { skin_age: 32, age: 28, skin_type_label: "Combination", composite_score: 72, skin_status_label: "To be improved",
      t_score: 70.48, cheek_score: 49.27, chin_score: 68.08, color: "#C8927D", color_code: "3R07", tone: "Natural skin with a warm undertone",
      slsd: { score: 51, level_label: "Fast aging speed", sub_item: { antioxidant: { score: 60, label: "Medium" }, anti_glycation: { score: 60, label: "Medium" }, anti_photoaging: { score: 30, label: "Weak" } } },
      skin_barrier: { score: 44, level_label: "Heavily damaged", sub_item: { moisturizing: { score: 54, label: "Medium" }, antibacterial: { score: 39, label: "Weak" }, anti_inflammatory: { score: 36, label: "Weak" } } },
      melanin_metabolism: { score: 60, level_label: "Normal", sub_item: { anti_spots: { score: 60, label: "Medium" }, anti_darkening: { score: 60, label: "Medium" } } }
    },
    pore: { score: 54, density: 0.041, percentage: 0.44, type_label: "Coarse", degree_label: "Severe", keratin_plug_score: 66, cleanliness_label: "Poor" },
    blackhead: { score: 32, density: 0.054, percentage: 0.45, degree_label: "Severe" },
    wrinkle: { score: 79, density: 0.115, degree_label: "Mild", trouble_list: [
      { type: "Crow\'s feet", degree: "Mild", detected: true, score: 65 }, { type: "Under eye wrinkles", degree: "Mild", detected: true, score: 70 },
      { type: "Forehead wrinkles", degree: "None", detected: false, score: 92 }, { type: "Nasolabial Fold", degree: "Mild", detected: true, score: 68 },
      { type: "Marionette lines", degree: "None", detected: false, score: 95 }, { type: "Glabellar Wrinkles", degree: "None", detected: false, score: 98 },
      { type: "Tear Troughs", degree: "Mild", detected: true, score: 62 } ] },
    speckle: { score: 62, degree_label: "Mild", total_quantity: 394, trouble_list: [
      { type: "Freckles/Sun spots", degree: "Mild", quantity: 105, score: 68 }, { type: "Brown Spots", degree: "Mild", quantity: 112, score: 65 },
      { type: "UV Spots", degree: "Moderate", quantity: 177, score: 52 } ] },
    acne: { score: 54, degree_label: "Moderate", total_quantity: 12, porphyrin_score: 68, possibility_outbreak: 0.22,
      trouble_list: [ { type: "Papules", quantity: 5 }, { type: "Comedones", quantity: 4 }, { type: "Acne marks", quantity: 3 } ] },
    sensitive: { score: 54, type_label: "Severe sensitive skin", degree_label: "Severe", percentage: 0.46 },
    dark_circles: { score: 52, degree_label: "Severe", trouble_list: [ { type: "Vascular", degree: "Moderate" }, { type: "Pigmented", degree: "Moderate" }, { type: "Shadowed", degree: "None" } ] },
    skin_glow: { score: 50.51, type_label: "Good", skin_homogeneity: { score: 70.22 }, skin_texture: { score: 79.90, roughness: 3.84 }, skin_reflection: { oil_score: 77.06, highlight_score: 73.59 } },
    moisture: { forehead: 49, cheek: 54, nose: 52 },
    oil: { forehead: 8, cheek: 7, nose: 6 }
  },
  "10086492": {
    report_id: 10086492, uid: "100037", customer_name: "Sophie Laurent", store_name: "DBS Corner Harrods London",
    device_id: "EVE-M-LON-002", created_at: "2026-02-08T15:45:00Z", source_type: "eve",
    preview: { skin_age: 45, age: 38, skin_type_label: "Dry", composite_score: 58, skin_status_label: "Problem skin",
      t_score: 32.15, cheek_score: 28.44, chin_score: 35.21, color: "#D4A68C", color_code: "2R05", tone: "Fair skin with a neutral undertone",
      slsd: { score: 38, level_label: "Fast aging speed", sub_item: { antioxidant: { score: 42, label: "Medium" }, anti_glycation: { score: 35, label: "Weak" }, anti_photoaging: { score: 38, label: "Weak" } } },
      skin_barrier: { score: 35, level_label: "Heavily damaged", sub_item: { moisturizing: { score: 30, label: "Weak" }, antibacterial: { score: 42, label: "Medium" }, anti_inflammatory: { score: 33, label: "Weak" } } },
      melanin_metabolism: { score: 48, level_label: "Weak", sub_item: { anti_spots: { score: 45, label: "Medium" }, anti_darkening: { score: 50, label: "Medium" } } }
    },
    pore: { score: 78, density: 0.021, percentage: 0.22, type_label: "Medium", degree_label: "Mild", keratin_plug_score: 82, cleanliness_label: "Good" },
    blackhead: { score: 85, density: 0.012, percentage: 0.15, degree_label: "Mild" },
    wrinkle: { score: 42, density: 0.285, degree_label: "Moderate", trouble_list: [
      { type: "Crow\'s feet", degree: "Moderate", detected: true, score: 38 }, { type: "Under eye wrinkles", degree: "Moderate", detected: true, score: 35 },
      { type: "Forehead wrinkles", degree: "Moderate", detected: true, score: 40 }, { type: "Nasolabial Fold", degree: "Severe", detected: true, score: 28 },
      { type: "Marionette lines", degree: "Mild", detected: true, score: 60 }, { type: "Glabellar Wrinkles", degree: "None", detected: false, score: 90 },
      { type: "Tear Troughs", degree: "Severe", detected: true, score: 25 } ] },
    speckle: { score: 45, degree_label: "Moderate", total_quantity: 620, trouble_list: [
      { type: "Freckles/Sun spots", degree: "Moderate", quantity: 180, score: 42 }, { type: "Brown Spots", degree: "Moderate", quantity: 195, score: 40 },
      { type: "UV Spots", degree: "Severe", quantity: 245, score: 32 } ] },
    acne: { score: 88, degree_label: "None", total_quantity: 2, porphyrin_score: 90, possibility_outbreak: 0.05,
      trouble_list: [ { type: "Acne marks", quantity: 2 } ] },
    sensitive: { score: 38, type_label: "Mild sensitive skin", degree_label: "Moderate", percentage: 0.32 },
    dark_circles: { score: 35, degree_label: "Severe", trouble_list: [ { type: "Vascular", degree: "Severe" }, { type: "Pigmented", degree: "Moderate" }, { type: "Shadowed", degree: "Moderate" } ] },
    skin_glow: { score: 38.20, type_label: "Mild", skin_homogeneity: { score: 52.10 }, skin_texture: { score: 65.40, roughness: 5.12 }, skin_reflection: { oil_score: 88.50, highlight_score: 45.20 } },
    moisture: { forehead: 32, cheek: 28, nose: 35 },
    oil: { forehead: 3, cheek: 2, nose: 4 }
  },
  "10086493": {
    report_id: 10086493, uid: "100038", customer_name: "Elena Rossi", store_name: "DBS Boutique Milan",
    device_id: "EVE-M-MIL-001", created_at: "2026-02-07T11:20:00Z", source_type: "eve",
    preview: { skin_age: 27, age: 25, skin_type_label: "Oily", composite_score: 81, skin_status_label: "Healthy skin",
      t_score: 82.30, cheek_score: 65.40, chin_score: 78.15, color: "#B8845E", color_code: "4Y06", tone: "Medium skin with a warm olive undertone",
      slsd: { score: 72, level_label: "Normal aging speed", sub_item: { antioxidant: { score: 75, label: "Normal" }, anti_glycation: { score: 70, label: "Normal" }, anti_photoaging: { score: 68, label: "Normal" } } },
      skin_barrier: { score: 68, level_label: "Slightly damaged", sub_item: { moisturizing: { score: 72, label: "Normal" }, antibacterial: { score: 65, label: "Normal" }, anti_inflammatory: { score: 62, label: "Medium" } } },
      melanin_metabolism: { score: 70, level_label: "Normal", sub_item: { anti_spots: { score: 72, label: "Normal" }, anti_darkening: { score: 68, label: "Normal" } } }
    },
    pore: { score: 62, density: 0.035, percentage: 0.38, type_label: "Medium", degree_label: "Moderate", keratin_plug_score: 58, cleanliness_label: "General" },
    blackhead: { score: 55, density: 0.045, percentage: 0.40, degree_label: "Moderate" },
    wrinkle: { score: 92, density: 0.025, degree_label: "None", trouble_list: [
      { type: "Crow\'s feet", degree: "None", detected: false, score: 95 }, { type: "Under eye wrinkles", degree: "None", detected: false, score: 93 },
      { type: "Forehead wrinkles", degree: "None", detected: false, score: 96 }, { type: "Nasolabial Fold", degree: "None", detected: false, score: 94 },
      { type: "Marionette lines", degree: "None", detected: false, score: 98 }, { type: "Glabellar Wrinkles", degree: "None", detected: false, score: 99 },
      { type: "Tear Troughs", degree: "None", detected: false, score: 90 } ] },
    speckle: { score: 82, degree_label: "Mild", total_quantity: 145, trouble_list: [
      { type: "Freckles/Sun spots", degree: "Mild", quantity: 55, score: 80 }, { type: "Brown Spots", degree: "None", quantity: 30, score: 88 },
      { type: "UV Spots", degree: "Mild", quantity: 60, score: 78 } ] },
    acne: { score: 45, degree_label: "Moderate", total_quantity: 18, porphyrin_score: 52, possibility_outbreak: 0.45,
      trouble_list: [ { type: "Papules", quantity: 8 }, { type: "Comedones", quantity: 6 }, { type: "Nodules", quantity: 1 }, { type: "Acne marks", quantity: 3 } ] },
    sensitive: { score: 78, type_label: "Medium skin tolerance", degree_label: "Mild", percentage: 0.15 },
    dark_circles: { score: 75, degree_label: "Mild", trouble_list: [ { type: "Vascular", degree: "Mild" }, { type: "Pigmented", degree: "None" }, { type: "Shadowed", degree: "None" } ] },
    skin_glow: { score: 68.40, type_label: "Good", skin_homogeneity: { score: 78.50 }, skin_texture: { score: 82.30, roughness: 2.45 }, skin_reflection: { oil_score: 55.20, highlight_score: 82.10 } },
    moisture: { forehead: 55, cheek: 60, nose: 58 },
    oil: { forehead: 12, cheek: 9, nose: 14 }
  }
};

export default function handler(req, res) {
  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "GET") return res.status(405).json({ error: "Method not allowed" });
  const { report_id } = req.query;
  const report = fullReports[report_id];
  if (!report) {
    return res.status(404).json({ error: "Report not found", available_ids: Object.keys(fullReports) });
  }
  res.status(200).json(report);
}
