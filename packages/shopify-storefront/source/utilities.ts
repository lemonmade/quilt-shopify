export function graphqlNodesFromConnection<T>(
  connection?: {readonly edges: readonly {readonly node: T}[]} | null,
): T[] {
  return connection?.edges.map(({node}) => node) ?? [];
}
