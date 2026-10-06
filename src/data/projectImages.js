// Optimised copies of the demo screenshots (800 / 1600 / 2400 px wide WebP) in /public/images/project.
const make = (id, w, h, alt) => ({
  id,
  width: w,
  height: h,
  alt,
  src: `/images/project/${id}-1600.webp`,
  srcSet: `/images/project/${id}-800.webp 800w, /images/project/${id}-1600.webp 1600w`,
  large: `/images/project/${id}-2400.webp`,
})

export const SCENARIOS = [
  make(
    'scenario-1', 3840, 3170,
    'Operations dashboard after a complete onboarding: customer Kavya Menon is Active with Coach Tom Fernandes assigned, and the event log shows the full workflow.'
  ),
  make(
    'scenario-2', 3840, 3340,
    'Operations dashboard showing customer Rahul Bhatia as Information missing, with weight, emergency contact phone and health consent flagged and a reminder in the notification log.'
  ),
  make(
    'scenario-3', 3840, 3340,
    'Operations dashboard after a coach reassignment: customer Vikram Desai moves from Coach Dev Malhotra to Coach Riya Kapoor, with a COACH_REASSIGNED event logged.'
  ),
]

export const WORKFLOWS = [
  make(
    'workflow-1', 3200, 1520,
    'n8n workflow 1: a payment webhook is validated, mapped to customer fields, a customer record is created, onboarding starts and a form link is sent. Duplicates are skipped.'
  ),
  make(
    'workflow-2', 3200, 1520,
    'n8n workflow 2: submitted onboarding information is fetched and validated. Complete submissions trigger coach assignment; incomplete ones are marked missing and a reminder is sent.'
  ),
  make(
    'workflow-3', 3200, 1520,
    'n8n workflow 3: a coach is assigned, the coach is notified, a first-time customer receives a welcome message and the customer is marked active.'
  ),
]
