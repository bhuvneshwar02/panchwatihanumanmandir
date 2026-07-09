diff --git a/src/App.css b/src/App.css
index 0561d19..1a906bb 100644
--- a/src/App.css
+++ b/src/App.css
@@ -541,6 +541,33 @@
   margin-top: 8px;
 }
 
+.social-icons {
+  display: flex;
+  justify-content: center;
+  gap: 14px;
+  margin: 4px 0;
+}
+.social-icons__link {
+  display: flex;
+  align-items: center;
+  justify-content: center;
+  width: 40px;
+  height: 40px;
+  border-radius: 50%;
+  color: var(--ink);
+  background: linear-gradient(135deg, var(--gold-bright), var(--vermilion));
+  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
+  transition: transform 0.2s ease, box-shadow 0.2s ease;
+}
+.social-icons__link:hover {
+  transform: translateY(-3px);
+  box-shadow: 0 6px 14px rgba(0, 0, 0, 0.35);
+}
+.social-icons__link svg {
+  width: 19px;
+  height: 19px;
+}
+
 .contact__actions {
   display: flex;
   flex-wrap: wrap;
diff --git a/src/components/Footer.jsx b/src/components/Footer.jsx
index ed09dc7..4364ac2 100644
--- a/src/components/Footer.jsx
+++ b/src/components/Footer.jsx
@@ -1,4 +1,5 @@
 import content from '../data/content';
+import SocialIcons from './SocialIcons';
 
 export default function Footer() {
   return (
@@ -14,6 +15,8 @@ export default function Footer() {
 
         <p className="footer__om">ॐ श्री हनुमते नमः</p>
 
+        <SocialIcons />
+
         <p className="footer__copy">
           © {new Date().getFullYear()} {content.templeName}. Built with devotion.
         </p>
diff --git a/src/data/content.js b/src/data/content.js
index 4c81d4c..9361f3a 100644
--- a/src/data/content.js
+++ b/src/data/content.js
@@ -14,6 +14,17 @@ const content = {
 
   whatsappCommunityLink: "https://whatsapp.com/channel/0029VbCs0EpEawdmvBua7j2I",
 
+  // Icons row shown in the footer. Leave a link as "" to hide that icon.
+  // Add facebook / youtube links here whenever you have them — no other
+  // code needs to change, the icon will just start showing up.
+  socialLinks: {
+    instagram: "https://www.instagram.com/hanumanmandirkhutiya?igsh=MXBnaW5yNnFlbmpkbw==",
+    whatsapp: "https://whatsapp.com/channel/0029VbCs0EpEawdmvBua7j2I",
+    googleReview: "https://maps.app.goo.gl/GHYBM8g9derwoXLL6?g_st=ac",
+    facebook: "", // TODO: add later
+    youtube: "",  // TODO: add later
+  },
+
   mapEmbedQuery: "28.6056135,79.120293", // from https://maps.app.goo.gl/nwZSH3QEHdVRNtRm6
   googleMapsLink: "https://maps.app.goo.gl/nwZSH3QEHdVRNtRm6", // opens Google Maps app directly, better for mobile "Get Directions"
   about: {
