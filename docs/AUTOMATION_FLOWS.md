# Automation Workflows

## Lead Capture Workflow

**Trigger:** Contact form submission

**Steps:**

1. User submits form (name, email, message, service)
2. Webhook sent to N8N
3. N8N workflow executes:
   - Validate contact info
   - Create contact in Brevo
   - Start email sequence
   - Send WhatsApp notification
   - Create calendar event
   - Log to GA4
4. Lead stored, sequences started

---

## Brevo Integration

**Purpose:** Email marketing automation

1. New contact added to Brevo
2. Brevo list selected based on service type
3. Automation journey triggered
4. Email sequence sent over 5 days
5. Leads tracked in analytics

**Env vars required:** `BREVO_API_KEY`, `BREVO_LIST_ID`, `BREVO_SENDER_EMAIL`, `BREVO_SENDER_NAME`

---

## N8N Webhook

**Endpoint:** Stored in `N8N_WEBHOOK_URL` environment variable

**Method:** POST

**Payload Example:**

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Interested in lead automation",
  "service": "lead-nurturing"
}
```

**Workflow actions triggered:**
- WhatsApp notification to sales team
- Calendly calendar event creation
- GA4 custom event logging
- CRM data enrichment

---

## Calendar Integration

1. Form submitted
2. Calendar widget offered to user (Calendly embed)
3. User books time slot
4. Confirmation email sent automatically
5. Calendar event created for both parties

**Env vars required:** `CALENDLY_API_KEY`

---

## Analytics Events (GA4)

| Event Name | Trigger |
|---|---|
| `form_view` | Contact form loaded |
| `form_submit` | Form successfully submitted |
| `calendar_click` | User clicks "Book a Call" |
| `service_view` | User views a service page |
| `testimonial_interaction` | User interacts with testimonials |

**Env vars required:** `NEXT_PUBLIC_GA_ID`, `NEXT_PUBLIC_GTM_ID`

---

## Error Handling

- If N8N webhook fails: log error, return success to user (async retry in N8N)
- If Brevo API fails: log error, queue for retry
- Form validation errors: shown inline before submission
- All errors logged to Vercel function logs
