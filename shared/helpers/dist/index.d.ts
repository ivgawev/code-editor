declare namespace Tree {
      export interface Node {
            id: string
            level: number
            children: Node[]
      }
}

declare function convertPathsToTree(paths: string[]): Tree.Node[];

declare const isDevelopment: boolean;

interface Dictionary<T> {
      [key: string]: T
}

declare function capitalize(text: string): string;

declare function sanitizePath(value: string): string;

export { Dictionary, Tree, capitalize, convertPathsToTree, isDevelopment, sanitizePath };
