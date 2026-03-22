// Minimal declaration for @emailjs/browser to satisfy TypeScript in this project.
declare module '@emailjs/browser' {
  export function send(serviceID: string, templateID: string, templateParams: any, publicKey?: string): Promise<any>;
  const defaultExport: {
    send: typeof send;
  };
  export default defaultExport;
}
