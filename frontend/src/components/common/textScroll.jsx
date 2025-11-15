import {
  ScrollVelocityContainer,
  ScrollVelocityRow,
} from "../../components/ui/scroll-based-velocity"

export function ScrollBasedVelocityDemo() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <ScrollVelocityContainer className="text-3xl font-bold tracking-[-0.02em] md:text-5xl md:leading-[3rem]">
  <ScrollVelocityRow baseVelocity={5} direction={1}>
        Human RIGHTS N.G.O  Human RIGHTS  N.G.O  Human RIGHTS  N.G.O 
        </ScrollVelocityRow>
  <ScrollVelocityRow baseVelocity={5} direction={-1}>
          N.G.O  Human RIGHTS  N.G.O  Human RIGHTS  N.G.O  Human RIGHTS  N.G.O 
        </ScrollVelocityRow>
      </ScrollVelocityContainer>
      <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r"></div>
      <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l"></div>
    </div>
  )
}
