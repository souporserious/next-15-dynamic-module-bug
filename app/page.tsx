async function getImport(slug: string, exportName: string) {
  const moduleExports = await import(`./${slug}.tsx`)
  return moduleExports[exportName]
}

export default async function Home() {
  const Button = await getImport('components/Button', 'Button')
  return <Button />
}
