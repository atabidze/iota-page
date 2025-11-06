// Declaration for Vanta modules used directly from dist
// This prevents TypeScript from complaining about implicit `any` for the minified bundles.

declare module 'vanta/dist/vanta.topology.min' {
  const vanta: any;
  export default vanta;
}

declare module 'vanta' {
  const vanta: any;
  export default vanta;
}
