import { useEffect, useState } from "react";
import Select from "react-select/creatable";
import { components } from "react-select";
import { Controller } from "react-hook-form";

import useApiHook from "../../api/useApiHook";
import { DynamicInputProps } from "../DynamicInput";
import { USER } from "../../../typescript/users";
import { FETCH_FUNCTIONS } from "../../api/types";
import { addDoc } from "firebase/firestore";
import { userCollectionRef } from "../../../lib/firebase/firestore.collections";
import { PLAYER_OPTION } from "../types";

const { GET_ALL_USERS } = FETCH_FUNCTIONS;

const CreatableSelectPlayers = ({ input, control }: DynamicInputProps) => {
  const [{ isError, isLoading, data }] = useApiHook(GET_ALL_USERS);
  const [options, setOptions] = useState<PLAYER_OPTION[]>([] as any);
  const [selectedPlayers, setSelectedPlayers] = useState<
    PLAYER_OPTION[] | null
  >(null);

  const MultiValueContainer = (props: any) => {
    console.log(props);
    return (
      <components.MultiValueContainer {...props}>
        <span className="d-flex align-items-center px-2 rounded bg-dark text-white">
          {/* <ImUsers className="mr-1" /> */}

          {selectedPlayers && selectedPlayers?.length}
        </span>
      </components.MultiValueContainer>
    );
  };

  const handleCreate = (
    inputValue: string,
    onChange: (...event: any[]) => void
  ) => {
    addDoc(userCollectionRef, {
      userName: inputValue,
    })
      .then((response) => {
        console.log(response.id);
        const newPlayer = { label: inputValue, id: response.id };
        setOptions((prevState) => [
          { label: inputValue, id: response.id },
          ...prevState,
        ]);
        onChange(
          handleChange(
            selectedPlayers ? [newPlayer, ...selectedPlayers] : [newPlayer]
          )
        );
      })
      .catch((error) => console.log(error));
  };

  const handleChange = (val: USER[] | null | any) => {
    setSelectedPlayers(val);
    return val;
  };

  useEffect(() => {
    if (data?.length) {
      setOptions(data.map((d: USER) => ({ ...d, label: d.data.userName })));
    } else {
      setOptions(data);
    }
  }, [data]);

  return (
    <Controller
      name={input.name}
      control={control}
      render={({ field: { onChange, value } }) => (
        <Select
          name="players"
          aria-label="Add players"
          className="w-100 text-black"
          classNamePrefix="select-players"
          closeMenuOnSelect={true}
          onChange={(val) => onChange(handleChange(val))}
          getOptionValue={(option) => option.id}
          value={value}
          noOptionsMessage={() =>
            isError
              ? `Something went wrong (status: ${isError.status}, message: ${isError.message})`
              : isLoading
              ? "Loading options.."
              : "Write a name for the player"
          }
          isMulti={true}
          formatCreateLabel={(val) => `Create "${val}"`}
          options={options}
          onCreateOption={(val) => handleCreate(val, onChange)}
          hideSelectedOptions={false}
          placeholder="Add players.."
          components={{ MultiValueContainer }}
        />
      )}
    ></Controller>
  );
};

export default CreatableSelectPlayers;
