
class Driver {
    constructor(name, startDate) {
        this.name = name;
        this.startDate = new Date(startDate);
    }

    yearsExperienceFromBeginningOf(year) {
        return year - this.startDate.getUTCFullYear() - 1;
    }
}

class Route {
    constructor(beginningLocation, endingLocation) {
        this.beginningLocation = {};
        this.endingLocation = {};
        this.beginningLocation.horizontal = beginningLocation.horizontal;
        this.beginningLocation.vertical = beginningLocation.vertical;
        this.endingLocation.horizontal = endingLocation.horizontal;
        this.endingLocation.vertical = endingLocation.vertical;
    }

    blocksTravelled() {
        let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']
        return Math.abs(eastWest.indexOf(this.beginningLocation.horizontal) - eastWest.indexOf(this.endingLocation.horizontal)) + Math.abs(Number.parseInt(this.beginningLocation.vertical) - Number.parseInt(this.endingLocation.vertical));
    }

    estimatedTime(peakHours) {
        if(peakHours) {
            return this.blocksTravelled() / 2;
        }
        else {
            return this.blocksTravelled() / 3;
        }
        
    }
}