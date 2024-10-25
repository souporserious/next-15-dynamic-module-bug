function collection(slug: string, getImport: (slug: string) => Promise<any>) {
  return {
    getValue: async (name: string) => {
      const module = await getImport(slug)
      return module[name]
    },
  }
}

const components = collection('Button', (slug) => import(`./${slug}.tsx`))

export default async function Home() {
  const Button = await components.getValue('Button')
  return <Button />
}
