# Setting Up hello@districtdesk.org Email

This takes about 5 minutes in the Cloudflare dashboard.
No cost. Email forwards to any inbox you already have.

## What this does
Any email sent to hello@districtdesk.org will be automatically
forwarded to your personal Gmail or any other email address.
You receive and read emails in your normal inbox.
Replies appear to come from your personal email unless you
set up additional sending (optional, covered at the end).

## Step 1 — Enable Email Routing in Cloudflare

1. Log into dash.cloudflare.com
2. Click on districtdesk.org in your domains list
3. In the left sidebar, click Email → Email Routing
4. Click "Enable Email Routing" if it shows that option
   (If it says "Email Routing is active" you can skip to Step 2)
5. Cloudflare will ask you to add some MX records to your DNS
   — click "Add records automatically" and it will do this for you

## Step 2 — Create the hello@ forwarding address

1. Still in Email → Email Routing, click the "Routing rules" tab
2. Under "Custom addresses", click "Create address"
3. In the "Custom address" field type: hello
   (This creates hello@districtdesk.org)
4. In the "Action" dropdown select: Send to an email
5. In the "Destination" field enter: YOUR_PERSONAL_EMAIL@gmail.com
   (Replace with whatever email you actually want to receive at)
6. Click Save

## Step 3 — Verify your destination email

Cloudflare will send a verification email to your personal address.
Open it and click the verify link.
Once verified, the routing is active immediately.

## Step 4 — Test it

Send a test email to hello@districtdesk.org from any account.
It should arrive in your personal inbox within 60 seconds.
If it doesn't arrive, check your spam folder.

## Step 5 — Set up Formspree for the website contact form

The contact form on the website uses Formspree to receive
submissions without needing a backend server.

1. Go to formspree.io and sign up for a free account
   (Free plan allows 50 submissions/month — plenty for now)
2. Click "New Form"
3. Name it: DistrictDesk Contact
4. Set the email to: hello@districtdesk.org
   (This sends form submissions to your new email address)
5. Click Create Form
6. Copy the form endpoint URL — it looks like:
   https://formspree.io/f/abcdefgh
7. In index.html, find every occurrence of:
   https://formspree.io/f/REPLACE_WITH_YOUR_ID
   Replace all of them with your actual Formspree URL

## Optional — Send FROM hello@districtdesk.org in Gmail

If you want replies to appear to come FROM hello@districtdesk.org
rather than your personal Gmail address:

1. In Gmail, go to Settings → Accounts → Send mail as
2. Click "Add another email address"
3. Enter: DistrictDesk and hello@districtdesk.org
4. Gmail will send a verification to hello@districtdesk.org
   which will forward to your inbox — click the link
5. Once verified, you can select hello@districtdesk.org
   as the "From" address when composing emails in Gmail

This is optional but makes you look more professional when
responding to demo requests.

## Summary of what you now have

| Address | What it does |
|---|---|
| hello@districtdesk.org | Receives all emails, forwards to your Gmail |
| Formspree form | Website contact form submissions go to hello@ |
| Gmail (optional) | Reply from hello@ so it looks like a real business |

## Troubleshooting

Email not arriving: Check spam. Check that Cloudflare Email
Routing shows "Active" status. Check MX records are present
in your DNS settings.

Form submissions not arriving: Verify the Formspree URL in
the HTML matches your actual form ID. Check your Formspree
dashboard for submission logs. Check spam.
