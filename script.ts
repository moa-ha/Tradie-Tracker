// Initialize and add the map
/// <reference types="@types/google.maps" />

let map
async function initMap(): Promise<void> {
  // The location of Uluru
  // put the data - now hardcoded
  const position = { lat: -36.7660918, lng: 174.7267817 }
  //         { lat: -36.7660918, lng: 174.7267817 },
  //         { lat: -36.7716377, lng: 174.713434 },
  //         { lat: -36.8827032, lng: 174.6331554 },
  //         { lat: -36.7705578, lng: 174.7275945 },
  //         { lat: -36.851687, lng: 174.7832322 },
  //         { lat: -36.9383626, lng: 174.652653 },
  //         { lat: -36.8786769, lng: 174.8361916 },
  //         { lat: -36.9096579, lng: 174.6610737 },
  //         { lat: 36.9111394, lng: 174.6103638 },

  // Request needed libraries.
  const { Map } = (await google.maps.importLibrary(
    'maps',
  )) as google.maps.MapsLibrary
  const { AdvancedMarkerElement } = (await google.maps.importLibrary(
    'marker',
  )) as google.maps.MarkerLibrary

  // The map, centered at Uluru
  map = new Map(document.getElementById('map') as HTMLElement, {
    zoom: 10,
    center: position,
    mapId: 'DEMO_MAP_ID',
  })

  // The marker, positioned at Uluru
  const marker = new AdvancedMarkerElement({
    map: map,
    position: position,
    title: 'Uluru',
  })
}

initMap()
