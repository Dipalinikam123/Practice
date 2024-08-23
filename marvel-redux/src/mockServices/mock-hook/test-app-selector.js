
const state={
    fetchApiReducer: {
        data: [],
        loading: false,
        error: null
      }
}

export const testUseAppSelector=(f)=>f(state)