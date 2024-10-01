/// <reference types="@types/google.maps" />

import { useEffect } from 'react'

const MapMarker = () => {
  useEffect(() => {
    const loadMap = async () => {
      // Google Maps API를 동적으로 로드합니다.
      const { Map } = (await google.maps.importLibrary(
        'maps',
      )) as google.maps.MapsLibrary
      const { AdvancedMarkerElement } = (await google.maps.importLibrary(
        'marker',
      )) as google.maps.MarkerLibrary

      // hardcoded locations
      const position = [
        { lat: -36.7660918, lng: 174.7267817 },
        { lat: -36.7716377, lng: 174.713434 },
        { lat: -36.8827032, lng: 174.6331554 },
        { lat: -36.7705578, lng: 174.7275945 },
        { lat: -36.851687, lng: 174.7832322 },
        { lat: -36.9383626, lng: 174.652653 },
        { lat: -36.8786769, lng: 174.8361916 },
        { lat: -36.9096579, lng: 174.6610737 },
        { lat: 36.9111394, lng: 174.6103638 },
      ]

      const map = new Map(document.getElementById('map') as HTMLElement, {
        zoom: 11,
        center: position[0],
        mapId: 'DEMO_MAP_ID',
      })

      for (let i = 0; i < position.length; i++) {
        new AdvancedMarkerElement({
          map: map,
          position: position[i],
          title: 'Auckland',
        })
      }
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
    }
  }, [])

  return (
    <div>
      <div id="map" style={{ height: '500px', width: '500px' }}></div>
    </div>
  )
}

export default MapMarker
