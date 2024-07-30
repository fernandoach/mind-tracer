import { Button, Card, CardBody, CardFooter, Chip, CircularProgress, Link } from '@nextui-org/react'
import React from 'react'
import { text } from 'stream/consumers';

type PanelCardComponentProps = {
  testName: string;
  testPercentage: number;
};

function PanelCardComponent(props: PanelCardComponentProps) {
  return (
    <Card className="w-[240px] h-[240px] border-none bg-gradient-to-br from-primary to-warning">
      <CardBody className="justify-center items-center pb-0 overflow-y-hidden">
        <CircularProgress
          classNames={{
            svg: "w-36 h-36 drop-shadow-md",
            indicator: "stroke-white",
            track: "stroke-white/10",
            value: "text-3xl font-semibold text-white"
          }}
          value={props.testPercentage}
          strokeWidth={4}
          showValueLabel={true}
          aria-label='Progress bar'
        />
      </CardBody>
      <CardFooter className="justify-center items-center pt-0">

          
          <div className='flex flex-col gap-4 items-center justify-center'>
            <h3 className='text-success text-xl'>{props.testName}</h3>
            <Button as={Link} color='success' href={`/panel/tests/${props.testName}`}>Continuar</Button>
          </div>
      </CardFooter>
    </Card>
  )
}

export default PanelCardComponent