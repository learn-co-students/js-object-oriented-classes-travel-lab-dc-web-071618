class Driver {
  constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate);
  }

  yearsExperienceFromBeginningOf(year) {
    let endDate = new Date(year, 0, 1);
    let difference = endDate.getFullYear() - this.startDate.getFullYear();
    if (endDate.getMonth() - this.startDate.getMonth() < 0) {
      difference--;
    }
    return difference
  }
}

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }

  blocksTravelled() {
    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']
    let total = 0;

    const begHorizontal = eastWest.indexOf(this.beginningLocation.horizontal)
    const endHorizontal = eastWest.indexOf(this.endingLocation.horizontal)

    const horizontalDistance = Math.abs(begHorizontal - endHorizontal);
    const verticalDistance = Math.abs((Number(this.beginningLocation.vertical) - Number(this.endingLocation.vertical)));

    total += (verticalDistance + horizontalDistance)

    console.log(`total = ${total}`)
    console.log(`total is a: ${typeof total}`)
    return total;
  }

  estimatedTime(peak) {
    if (peak) {
      return (this.blocksTravelled() / 2);
    } else {
      return (this.blocksTravelled() / 3);
    }
  }
}
