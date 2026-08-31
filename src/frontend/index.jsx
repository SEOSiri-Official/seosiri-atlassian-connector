import React from 'react';
import ForgeReconciler, { Text, Heading, Link, Stack, Box, Strong, Em } from '@forge/react';

const App = () => {
  return (
    <Box padding="space.200">
      <Stack space="space.150">
        <Heading as="h1">SEOSiri Enterprise Control Plane</Heading>
        <Text>Universal Model Context Protocol (MCP) Master Suite &amp; Cyber-Physical AI Infrastructure.</Text>

        <Heading as="h2">Live Ecosystem Architecture</Heading>
        <Text><Strong>Active Packages:</Strong> 17 Published Packages (15 PyPI + 2 NPM)</Text>
        <Text><Strong>Autonomous Tools:</Strong> 181 Operational Tools Total</Text>
        <Text><Strong>Edge Gateways:</Strong> 12 Live Cloudflare Edge Gateways (*.seosiri.com)</Text>

        <Heading as="h3">Connected Industrial &amp; AI Suites</Heading>
        <Text>1. <Strong>AI Search &amp; Governance:</Strong> AEO/GEO, Schema, Keyword Vector RAG, Governance, Entity, DNS Security</Text>
        <Text>2. <Strong>Data Engineering &amp; DevOps:</Strong> Enterprise ETL Pipeline, Lambda Ingestion, Database Infra, Ops Sentry Triage, API Guard</Text>
        <Text>3. <Strong>Life Sciences &amp; Cyber-Physical:</Strong> Biopharma (FDA 21 CFR Part 11), BioAssay (HL7 FHIR), Industrial AI Gateway (ROS 2), Bio-Robotics</Text>

        <Heading as="h3">Official Portals &amp; Verification</Heading>
        <Link href="https://developers.seosiri.com/" openInNewTab>Open Interactive Topology Explorer</Link>
        <Link href="https://www.seosiri.com/2026/07/seosiri-mcp-servers.html" openInNewTab>SEOSiri Master Documentation Hub</Link>
        <Link href="https://seosiri.com" openInNewTab>SEOSiri Official Website</Link>

        <Text><Em>Architected by Momenul Ahmad • SEOSiri Enterprise Labs.</Em></Text>
      </Stack>
    </Box>
  );
};

ForgeReconciler.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
