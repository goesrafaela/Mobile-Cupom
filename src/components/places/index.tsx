import { Text, useWindowDimensions } from "react-native";
import BottomSheet, {BottomSheetFlatList} from '@gorhom/bottom-sheet';

import { s } from "./styles";

import { Place, PlaceProps } from "../place";
import { useRef } from "react";

type Props ={
    data:PlaceProps[]
}

export function Places({data}:Props){
    const dimensions = useWindowDimensions()
    const bottomSheetRef = useRef<BottomSheet>(null)

    const snapPoints = {
        min: 278,
        max: dimensions.height - 128
    }
    
    return(
        <BottomSheet 
            ref={bottomSheetRef}
            snapPoints={[snapPoints.min, snapPoints.max]} //altura padrão 100, altura máxima 300
            handleIndicatorStyle={s.indicator}
            backgroundStyle={s.container}
            enableOverDrag={false}
        >
        <BottomSheetFlatList
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => <Place data={item} />}
            contentContainerStyle={s.content}
            ListHeaderComponent={() => (<Text style={s.title}>Explore locais perto de você 😁</Text>)}
            showsVerticalScrollIndicator={false}
        />
    </BottomSheet> 
    )
}