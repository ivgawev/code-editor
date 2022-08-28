function sanitizePath (value: string) {
      return decodeURI(value)
            .replace(/^\/|\/$/g, '')
            .replace(/[/]+/g, '/')
            .normalize();
}

export { sanitizePath };
