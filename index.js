
class Driver {
  constructor (name, startDate){
    this.name = name
    this.startDate = new Date(startDate)
  }
  yearsExperienceFromBeginningOf(endDate){
    return  endDate - (this.startDate.getFullYear()+1)
  }
}

let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']

class Route {

  constructor (beginningLocation, endingLocation){
  this.beginningLocation = beginningLocation
  this.endingLocation = endingLocation
  }

  blocksTravelled (){
    let horiz = eastWest.indexOf(this.beginningLocation.horizontal) - eastWest.indexOf(this.endingLocation.horizontal)
    let vert = this.beginningLocation.vertical - this.endingLocation.vertical
    let totalDist = Math.abs(horiz) + Math.abs(vert)
    return totalDist
  }

  estimatedTime(peak){
    let eTime
    // debugger
    if (peak){
      eTime = this.blocksTravelled() / 2
    }else {
      eTime = this.blocksTravelled() / 3
    }
    return eTime
  }
}
