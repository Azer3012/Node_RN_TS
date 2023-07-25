import { NavigatorScreenParams } from "@react-navigation/native"

export type RootStackParams={
    Welcome:undefined,
    SingIn:undefined,
    SignUp:undefined
}


export type RootBottomTabParamList={
    HomeStack:NavigatorScreenParams<HomeStackParamList>,
    Today:undefined,
    Completed:undefined,
    CategoriesStack:NavigatorScreenParams<CategoriesStackParamList>,

}
export type HomeStackParamList={
    Home:undefined,
    EditTask:undefined

}
export type CategoriesStackParamList={
    Categories:undefined,
    Category:{
        id:string
    }
    CreateCategory:{
        id?:string
    }

}




