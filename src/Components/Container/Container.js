export const Container = ({children, height = '100vh'}) => {
  return (
    <div className="vh100 sectionOne-main" style={{height}}>
        {children}
    </div>
  )
}
