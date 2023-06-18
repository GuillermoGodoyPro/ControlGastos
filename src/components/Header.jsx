import { NuevoPresupuesto } from './NuevoPresupuesto'

export const Header = ({ 
    presupuesto,
    setPresupuesto,
    isValidPresupuesto,    
    setIsValidPresupuesto
}) => {
  return (
    <header>
        <h1>Planificador de Gastos</h1>

        {isValidPresupuesto? (
          <div>
            <p>Control Presupuesto</p>
              <p>{presupuesto}</p>
          </div>
        ) : (
          <NuevoPresupuesto
            presupuesto={presupuesto}
            setPresupuesto={setPresupuesto}
            setIsValidPresupuesto={setIsValidPresupuesto}            
          />
        )}

        
    </header>
  )
}
