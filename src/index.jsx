import ForgeUI, { render, AdminPage, IssuePanel, Text, Fragment, Link, Badge, Button } from '@forge/ui';

// 1. Jira Admin Page Component (Renders inside Jira Settings -> Apps)
const AdminComponent = () => {
  return (
    <AdminPage>
      <Text content="## 🌐 SEOSiri Enterprise Control Plane" />
      <Text content="Universal Model Context Protocol (MCP) Master Suite & Cyber-Physical AI Infrastructure." />

      <Text content="### 📊 Live Ecosystem Architecture" />
      <Text content="• **Active Packages:** 17 Published Packages (15 PyPI + 2 NPM)" />
      <Text content="• **Autonomous Tools:** 181 Operational Tools Total" />
      <Text content="• **Edge Gateways:** 12 Live Cloudflare Edge Gateways (*.seosiri.com)" />

      <Text content="### 🛠️ Connected Industrial & AI Suites" />
      <Text content="1. **AI Search & Governance:** AEO/GEO, Schema, Keyword Vector RAG, Governance, Entity, DNS Security" />
      <Text content="2. **Data Engineering & DevOps:** Enterprise ETL Pipeline, Lambda Ingestion, Database Infra, Ops Sentry Triage, API Guard" />
      <Text content="3. **Life Sciences & Cyber-Physical:** Biopharma (FDA 21 CFR Part 11), BioAssay (HL7 FHIR), Industrial AI Gateway (ROS 2), Bio-Robotics" />

      <Text content="---" />
      <Text content="### 🔗 Official Portals & Verification" />
      <Text content="• 🌐 [Open Interactive Topology Explorer](https://developers.seosiri.com/)" />
      <Text content="• 📖 [SEOSiri Master Documentation Hub](https://www.seosiri.com/2026/07/seosiri-mcp-servers.html)" />
      <Text content="• 🛡️ [SEOSiri Official Website](https://seosiri.com)" />
      <Text content=" " />
      <Text content="*Architected by Momenul Ahmad • SEOSiri Enterprise Labs.*" />
    </AdminPage>
  );
};

// 2. Jira Issue Panel Component (Renders on every Jira Ticket)
const IssuePanelComponent = () => {
  return (
    <IssuePanel>
      <Text content="## 🌐 SEOSiri MCP Suite" />
      <Text content="Enterprise AI Control Plane active for this issue." />
      <Text content="• **181 Autonomous Tools** available across 12 Edge Gateways." />
      <Text content="🔗 [Open Topology Explorer](https://developers.seosiri.com/)" />
      <Text content="📖 [Technical Guide](https://www.seosiri.com/2026/07/seosiri-mcp-servers.html)" />
    </IssuePanel>
  );
};

export const runAdmin = render(<AdminComponent />);
export const runPanel = render(<IssuePanelComponent />);
