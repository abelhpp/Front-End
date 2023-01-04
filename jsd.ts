
enum Compass {
  North = 0,
  East = '1',
  South = 2,
  West = '3'
}

class Automotor{
  name: string = ""
}
class Auto extends Automotor{
  edad: number=0
}

let toyota: Automotor = new Auto();