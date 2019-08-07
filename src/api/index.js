import ajax from './ajax'

const BASE = '/api'

export const reqAddress = (longitude,latitude) => ajax({
  method:'GET',
  url:BASE+`/position/${latitude},${longitude}`
})

export const reqCategorys = () => ajax.get(BASE+'/index_category') 

export const reqShops = ({latitude,longitude}) => ajax({
  method:'GET',
  url:BASE+'/shops',
  params:{
    latitude,
    longitude
  }
})
