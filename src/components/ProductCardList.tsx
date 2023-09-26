import Card from './Card'

const linksData = [
  {
    src: 'https://www.cannect.life/static/media/oil.db0bca1af0202dbb5dcb.png',
    alt: 'produto Oleo',
    toPath: '/produtos/1?shape_id=1',
  },
  {
    src: 'https://www.cannect.life/static/media/gummy.ef7b010b10aeb50ebbf4.png',
    alt: 'produto Gummy',
    toPath: '/produtos/1?shape_id=6',
  },
  {
    src: 'https://www.cannect.life/static/media/capsula.2c1fe52719db38c5e309.png',
    alt: 'produto capsula',
    toPath: '/produtos/1?shape_id=2',
  },
  {
    src: 'https://www.cannect.life/static/media/topico.5e96ade7ac023eef72b7.png',
    alt: 'produto Tópico',
    toPath:
      '/produtos/1?shape_id=28&shape_id=17&shape_id=5&shape_id=10&shape_id=47&shape_id=19&shape_id=50&shape_id=31&shape_id=7',
  },
  {
    src: 'https://www.cannect.life/static/media/flores.f120c4715b75a0c227ee.png',
    alt: 'produto Flores',
    toPath: '/produtos/1?shape_id=29',
  },
]

const ProductCardList = () => {
  return (
    <>
      {linksData.map(({ alt, src, toPath }, id) => {
        return <Card key={id} alt={alt} src={src} toPath={toPath} />
      })}
    </>
  )
}

export default ProductCardList
