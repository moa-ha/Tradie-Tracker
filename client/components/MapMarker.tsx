import { useEffect } from 'react'
const MapMarker = () => {
  const mapId = '9e8c71bfe65128e1'
  useEffect(() => {
    const loadMap = async () => {
      // Google Maps API를 동적으로 로드합니다.
      const { Map } = (await google.maps.importLibrary(
        'maps',
      )) as google.maps.MapsLibrary
      const { AdvancedMarkerElement } = (await google.maps.importLibrary(
        'marker',
      )) as google.maps.MarkerLibrary

      const position = { lat: -36.7660918, lng: 174.7267817 } // Auckland 위치

      const map = new Map(document.getElementById('map') as HTMLElement, {
        zoom: 11,
        center: position,
        mapId: mapId,
      })

      new AdvancedMarkerElement({
        map: map,
        position: position,
        title: 'Auckland',
      })
    }

    // Google Maps API가 이미 로드되었는지 확인합니다.
    if (window.google && window.google.maps) {
      loadMap()
    } else {
      const script = document.createElement('script')
      script.src = `https://maps.googleapis.com/maps/api/js?key=API_KEY&callback=initMap`
      script.async = true
      script.defer = true
      document.head.appendChild(script)

      window.initMap = loadMap // 콜백 함수로 loadMap을 설정합니다.
    }
  }, [])

  return (
    <div>
      <div id="map" style={{ height: '500px', width: '500px' }}></div>
    </div>
  )
}

export default MapMarker
